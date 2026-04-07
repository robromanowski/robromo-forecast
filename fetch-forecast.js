'use strict';

const fs    = require('fs');
const https = require('https');

// Extract locations from app.js so there's a single source of truth
const src  = fs.readFileSync('app.js', 'utf8');
const locs = [...src.matchAll(/\{\s*lat:\s*([\d.-]+),\s*lon:\s*([\d.-]+)/g)]
  .map(m => ({ lat: parseFloat(m[1]), lon: parseFloat(m[2]) }));

if (!locs.length) { console.error('No locations found in app.js'); process.exit(1); }
console.log(`Fetching data for ${locs.length} locations…`);

const lats   = locs.map(l => l.lat).join(',');
const lons   = locs.map(l => l.lon).join(',');
const coords = `latitude=${lats}&longitude=${lons}` +
  `&hourly=temperature_2m&temperature_unit=fahrenheit&timezone=America%2FNew_York`;

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(body)); }
        catch (e) { reject(new Error(`JSON parse failed: ${e.message}`)); }
      });
    }).on('error', reject);
  });
}

async function main() {
  const [gfsRaw, ecmwfRaw] = await Promise.all([
    fetchJSON(`https://api.open-meteo.com/v1/forecast?${coords}&models=gfs_seamless&forecast_days=14`),
    fetchJSON(`https://api.open-meteo.com/v1/ecmwf?${coords}&forecast_days=10`),
  ]);

  const firstGfs = Array.isArray(gfsRaw) ? gfsRaw[0] : gfsRaw;
  if (firstGfs?.error) throw new Error(`GFS API error: ${firstGfs.reason}`);
  const firstEcmwf = Array.isArray(ecmwfRaw) ? ecmwfRaw[0] : ecmwfRaw;
  if (firstEcmwf?.error) throw new Error(`ECMWF API error: ${firstEcmwf.reason}`);

  const out = {
    ts:    Date.now(),
    gfs:   Array.isArray(gfsRaw)   ? gfsRaw   : [gfsRaw],
    ecmwf: Array.isArray(ecmwfRaw) ? ecmwfRaw : [ecmwfRaw],
  };

  fs.mkdirSync('data', { recursive: true });
  fs.writeFileSync('data/forecast.json', JSON.stringify(out));
  console.log(`Saved data/forecast.json (ts=${new Date(out.ts).toISOString()})`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
