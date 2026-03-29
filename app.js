'use strict';

// ── Locations ──────────────────────────────────────────────────────────────
const NE_LOCATIONS = [
  // ── Maine ──
  { lat: 47.2,  lon: -68.4,  name: 'Fort Kent, ME' },
  { lat: 46.9,  lon: -67.9,  name: 'Caribou, ME' },
  { lat: 46.7,  lon: -68.0,  name: 'Presque Isle, ME' },
  { lat: 46.1,  lon: -67.8,  name: 'Houlton, ME' },
  { lat: 45.7,  lon: -68.7,  name: 'Millinocket, ME' },
  { lat: 45.5,  lon: -69.7,  name: 'Dover-Foxcroft, ME' },
  { lat: 45.5,  lon: -70.3,  name: 'Jackman, ME' },           // border mountains
  { lat: 45.1,  lon: -69.9,  name: 'Greenville, ME' },        // Moosehead Lake
  { lat: 45.0,  lon: -71.0,  name: 'Rangeley, ME' },          // Western ME mountains
  { lat: 44.9,  lon: -69.6,  name: 'Skowhegan, ME' },
  { lat: 44.7,  lon: -70.2,  name: 'Farmington, ME' },
  { lat: 44.3,  lon: -69.8,  name: 'Augusta, ME' },
  { lat: 44.4,  lon: -70.5,  name: 'Rumford, ME' },           // Sunday River area
  { lat: 44.4,  lon: -70.8,  name: 'Bethel, ME' },            // Sunday River/ski
  { lat: 44.2,  lon: -70.4,  name: 'Lewiston/Auburn, ME' },
  { lat: 44.8,  lon: -68.8,  name: 'Bangor, ME' },
  { lat: 44.5,  lon: -68.4,  name: 'Ellsworth, ME' },         // MDI / Acadia
  { lat: 44.4,  lon: -68.2,  name: 'Bar Harbor, ME' },        // Acadia NP
  { lat: 44.1,  lon: -69.1,  name: 'Rockland, ME' },          // Penobscot coast
  { lat: 43.9,  lon: -69.6,  name: 'Boothbay Harbor, ME' },
  { lat: 44.3,  lon: -69.8,  name: 'Waterville, ME' },
  { lat: 44.1,  lon: -70.2,  name: 'Norway, ME' },
  { lat: 43.5,  lon: -70.5,  name: 'Sanford, ME' },
  { lat: 43.7,  lon: -70.3,  name: 'Portland, ME' },
  { lat: 43.4,  lon: -70.6,  name: 'Kennebunk, ME' },
  { lat: 43.1,  lon: -70.8,  name: 'Portsmouth area, ME' },

  // ── New Hampshire ──
  { lat: 44.3,  lon: -71.3,  name: 'Mt. Washington, NH' },   // Highest NE peak
  { lat: 44.4,  lon: -71.2,  name: 'Gorham, NH' },            // N. of Presidentials
  { lat: 44.5,  lon: -71.5,  name: 'Dixville Notch, NH' },   // Notch / far north
  { lat: 44.3,  lon: -71.7,  name: 'Bretton Woods, NH' },    // Base of presidentials
  { lat: 44.1,  lon: -71.7,  name: 'Lincoln, NH' },           // White Mts / Loon Mtn
  { lat: 44.2,  lon: -71.5,  name: 'Franconia, NH' },         // Cannon Mtn
  { lat: 44.0,  lon: -71.1,  name: 'N. Conway, NH' },
  { lat: 43.8,  lon: -71.9,  name: 'Plymouth, NH' },          // S. White Mts gateway
  { lat: 43.7,  lon: -71.6,  name: 'Meredith, NH' },          // Lakes region
  { lat: 43.7,  lon: -71.3,  name: 'Laconia, NH' },           // Lakes region
  { lat: 43.5,  lon: -72.0,  name: 'Claremont, NH' },         // Connecticut River
  { lat: 43.7,  lon: -72.3,  name: 'Hanover, NH' },           // Upper Valley / Dartmouth
  { lat: 43.0,  lon: -71.5,  name: 'Concord, NH' },
  { lat: 42.9,  lon: -71.4,  name: 'Manchester, NH' },
  { lat: 42.8,  lon: -71.2,  name: 'Nashua, NH' },
  { lat: 43.1,  lon: -70.8,  name: 'Portsmouth, NH' },
  { lat: 43.0,  lon: -71.1,  name: 'Durham, NH' },            // Seacoast UNH
  { lat: 42.9,  lon: -71.9,  name: 'Peterborough, NH' },      // Monadnock region
  { lat: 42.8,  lon: -72.0,  name: 'Keene, NH' },

  // ── Vermont ──
  { lat: 45.0,  lon: -72.1,  name: 'Newport, VT' },           // NE Kingdom
  { lat: 44.8,  lon: -71.9,  name: 'Lyndonville, VT' },       // NE Kingdom south
  { lat: 44.6,  lon: -71.8,  name: 'Burke, VT' },             // Burke Mountain / ski
  { lat: 44.6,  lon: -72.0,  name: 'St. Johnsbury, VT' },
  { lat: 44.5,  lon: -73.2,  name: 'Burlington, VT' },
  { lat: 44.6,  lon: -72.5,  name: 'Johnson, VT' },           // NW of Stowe
  { lat: 44.5,  lon: -72.7,  name: 'Stowe, VT' },             // Mt. Mansfield / ski
  { lat: 44.3,  lon: -72.6,  name: 'Montpelier, VT' },
  { lat: 44.2,  lon: -73.0,  name: 'Middlebury, VT' },
  { lat: 43.9,  lon: -72.8,  name: 'Randolph, VT' },          // Central VT ridgeline
  { lat: 43.7,  lon: -72.5,  name: 'White River Jct, VT' },
  { lat: 43.8,  lon: -72.8,  name: 'Killington, VT' },        // Killington ski resort
  { lat: 43.6,  lon: -72.9,  name: 'Rutland, VT' },
  { lat: 43.4,  lon: -73.0,  name: 'Wallingford, VT' },
  { lat: 43.2,  lon: -72.9,  name: 'Manchester, VT' },        // Stratton / Bromley
  { lat: 43.1,  lon: -72.8,  name: 'Wilmington, VT' },        // Mt. Snow
  { lat: 44.9,  lon: -72.8,  name: 'Jay Peak, VT' },          // Jay Peak ski resort
  { lat: 43.0,  lon: -72.7,  name: 'Brattleboro, VT' },
  { lat: 43.0,  lon: -73.2,  name: 'Bennington, VT' },

  // ── Massachusetts ──
  { lat: 42.7,  lon: -73.1,  name: 'Williamstown, MA' },      // N. Berkshires
  { lat: 42.5,  lon: -73.2,  name: 'Pittsfield, MA' },        // Berkshires
  { lat: 42.3,  lon: -73.0,  name: 'Great Barrington, MA' },  // S. Berkshires
  { lat: 42.7,  lon: -72.6,  name: 'Greenfield, MA' },        // Pioneer Valley north
  { lat: 42.4,  lon: -72.5,  name: 'Amherst, MA' },
  { lat: 42.1,  lon: -72.6,  name: 'Springfield, MA' },
  { lat: 42.6,  lon: -71.8,  name: 'Fitchburg, MA' },
  { lat: 42.6,  lon: -71.3,  name: 'Lowell, MA' },
  { lat: 42.5,  lon: -70.9,  name: 'Gloucester, MA' },        // Cape Ann coast
  { lat: 42.8,  lon: -70.9,  name: 'Newburyport, MA' },       // N. Shore
  { lat: 42.4,  lon: -71.1,  name: 'Boston, MA' },
  { lat: 42.3,  lon: -71.8,  name: 'Worcester, MA' },
  { lat: 42.0,  lon: -71.5,  name: 'Taunton, MA' },
  { lat: 41.9,  lon: -70.7,  name: 'Plymouth, MA' },
  { lat: 41.7,  lon: -70.3,  name: 'Cape Cod, MA' },
  { lat: 41.4,  lon: -70.6,  name: "Martha's Vineyard, MA" },
  { lat: 41.3,  lon: -70.1,  name: 'Nantucket, MA' },
  { lat: 41.7,  lon: -71.2,  name: 'Fall River, MA' },

  // ── Rhode Island ──
  { lat: 41.8,  lon: -71.4,  name: 'Providence, RI' },
  { lat: 41.7,  lon: -71.5,  name: 'Cranston, RI' },
  { lat: 41.5,  lon: -71.3,  name: 'Newport, RI' },
  { lat: 41.4,  lon: -71.5,  name: 'Westerly, RI' },

  // ── Connecticut ──
  { lat: 41.9,  lon: -73.4,  name: 'Litchfield, CT' },        // NW CT highlands
  { lat: 41.8,  lon: -73.1,  name: 'Torrington, CT' },
  { lat: 41.8,  lon: -72.7,  name: 'Hartford, CT' },
  { lat: 41.8,  lon: -72.3,  name: 'Storrs, CT' },            // UConn / NE CT
  { lat: 41.9,  lon: -71.9,  name: 'Putnam, CT' },            // NE CT corner
  { lat: 41.7,  lon: -72.7,  name: 'New Britain, CT' },
  { lat: 41.6,  lon: -72.9,  name: 'Meriden, CT' },
  { lat: 41.5,  lon: -72.8,  name: 'Wallingford, CT' },
  { lat: 41.3,  lon: -72.9,  name: 'New Haven, CT' },
  { lat: 41.3,  lon: -73.0,  name: 'Bridgeport, CT' },
  { lat: 41.1,  lon: -73.4,  name: 'Stamford, CT' },
  { lat: 41.4,  lon: -72.1,  name: 'New London, CT' },
  { lat: 41.6,  lon: -72.1,  name: 'Willimantic, CT' },

  // ── New York — Adirondacks ──
  { lat: 44.7,  lon: -73.5,  name: 'Plattsburgh, NY' },
  { lat: 44.7,  lon: -74.5,  name: 'Malone, NY' },            // N. Adirondack foothills
  { lat: 44.3,  lon: -74.0,  name: 'Lake Placid, NY' },       // High Peaks region
  { lat: 44.2,  lon: -73.8,  name: 'Keene Valley, NY' },      // Heart of High Peaks
  { lat: 44.4,  lon: -73.8,  name: 'Wilmington, NY' },        // Whiteface Mtn
  { lat: 44.3,  lon: -74.6,  name: 'Saranac Lake, NY' },
  { lat: 44.2,  lon: -74.5,  name: 'Tupper Lake, NY' },
  { lat: 43.9,  lon: -74.7,  name: 'Newcomb, NY' },           // Central High Peaks
  { lat: 43.8,  lon: -74.3,  name: 'Indian Lake, NY' },       // Central Adirondacks
  { lat: 43.7,  lon: -75.0,  name: 'Old Forge, NY' },         // W. Adirondacks
  { lat: 44.0,  lon: -73.9,  name: 'Elizabethtown, NY' },
  { lat: 43.7,  lon: -74.6,  name: 'Long Lake, NY' },
  { lat: 43.5,  lon: -74.5,  name: 'Blue Mtn Lake, NY' },
  { lat: 43.3,  lon: -73.6,  name: 'Warrensburg, NY' },       // S. Adirondack gateway
  { lat: 43.3,  lon: -73.9,  name: 'Lake George, NY' },

  // ── New York — Catskills & Hudson Valley ──
  { lat: 42.3,  lon: -74.1,  name: 'Windham, NY' },           // Windham ski resort
  { lat: 42.2,  lon: -74.2,  name: 'Hunter, NY' },            // Catskill Mountains
  { lat: 42.2,  lon: -74.5,  name: 'Fleischmanns, NY' },      // W. Catskills
  { lat: 42.0,  lon: -74.4,  name: 'Slide Mtn area, NY' },    // Highest Catskill
  { lat: 42.1,  lon: -74.8,  name: 'Roxbury, NY' },
  { lat: 42.3,  lon: -74.9,  name: 'Delhi, NY' },             // W. Catskills
  { lat: 42.0,  lon: -74.2,  name: 'Phoenicia, NY' },
  { lat: 42.1,  lon: -73.9,  name: 'Kingston, NY' },
  { lat: 42.0,  lon: -73.7,  name: 'Rhinebeck, NY' },
  { lat: 42.7,  lon: -73.8,  name: 'Albany, NY' },
  { lat: 42.6,  lon: -73.6,  name: 'Chatham, NY' },
  { lat: 42.5,  lon: -73.6,  name: 'Catskill, NY' },
  { lat: 41.9,  lon: -73.9,  name: 'Poughkeepsie, NY' },
  { lat: 41.5,  lon: -74.0,  name: 'Newburgh, NY' },
  { lat: 41.3,  lon: -74.2,  name: 'Middletown, NY' },

  // ── New York — Central & Western ──
  { lat: 43.0,  lon: -75.3,  name: 'Utica, NY' },
  { lat: 43.1,  lon: -76.1,  name: 'Syracuse, NY' },
  { lat: 43.1,  lon: -77.0,  name: 'Canandaigua, NY' },       // Finger Lakes
  { lat: 43.2,  lon: -77.6,  name: 'Rochester, NY' },
  { lat: 42.9,  lon: -78.8,  name: 'Buffalo, NY' },
  { lat: 42.1,  lon: -79.3,  name: 'Jamestown, NY' },
  { lat: 42.1,  lon: -75.9,  name: 'Binghamton, NY' },
  { lat: 42.1,  lon: -76.8,  name: 'Elmira, NY' },
  { lat: 43.5,  lon: -76.5,  name: 'Watertown, NY' },         // Tug Hill / snowbelt
  { lat: 40.7,  lon: -74.0,  name: 'New York, NY' },
  { lat: 40.6,  lon: -73.7,  name: 'Brooklyn/JFK, NY' },
  { lat: 40.8,  lon: -73.1,  name: 'Islip, NY' },
  { lat: 41.0,  lon: -72.3,  name: 'Riverhead, NY' },         // E. Long Island
  { lat: 41.1,  lon: -71.9,  name: 'Montauk, NY' },           // E. tip Long Island

  // ── New Jersey ──
  { lat: 40.7,  lon: -74.2,  name: 'Newark, NJ' },
  { lat: 41.2,  lon: -74.5,  name: 'Vernon, NJ' },            // NJ Highlands / ski
  { lat: 41.1,  lon: -74.7,  name: 'High Point, NJ' },        // Highest point in NJ
  { lat: 40.9,  lon: -74.9,  name: 'Blairstown, NJ' },        // NW NJ ridges
  { lat: 40.9,  lon: -74.6,  name: 'Chester, NJ' },           // NJ Highlands
  { lat: 40.5,  lon: -74.4,  name: 'New Brunswick, NJ' },
  { lat: 40.2,  lon: -74.0,  name: 'Toms River, NJ' },        // Jersey Shore
  { lat: 39.4,  lon: -74.4,  name: 'Atlantic City, NJ' },
  { lat: 38.9,  lon: -74.9,  name: 'Cape May, NJ' },

  // ── Pennsylvania ──
  { lat: 41.4,  lon: -75.7,  name: 'Scranton, PA' },
  { lat: 41.2,  lon: -76.9,  name: 'Williamsport, PA' },
  { lat: 41.3,  lon: -75.5,  name: 'Tannersville, PA' },      // Pocono summit
  { lat: 41.0,  lon: -75.2,  name: 'Stroudsburg, PA' },       // Poconos
  { lat: 41.5,  lon: -75.2,  name: 'Hawley, PA' },            // N. Poconos
  { lat: 40.6,  lon: -75.5,  name: 'Allentown, PA' },
  { lat: 40.4,  lon: -75.9,  name: 'Reading, PA' },
  { lat: 40.8,  lon: -77.8,  name: 'State College, PA' },
  { lat: 40.3,  lon: -76.9,  name: 'Harrisburg, PA' },
  { lat: 40.5,  lon: -78.4,  name: 'Altoona, PA' },           // Allegheny Front
  { lat: 40.0,  lon: -79.1,  name: 'Somerset, PA' },          // Laurel Highlands / ski
  { lat: 39.9,  lon: -79.7,  name: 'Uniontown, PA' },         // S. Laurel Highlands
  { lat: 40.4,  lon: -79.9,  name: 'Pittsburgh, PA' },
  { lat: 41.4,  lon: -79.7,  name: 'Warren, PA' },
  { lat: 42.1,  lon: -80.1,  name: 'Erie, PA' },
  { lat: 40.0,  lon: -75.2,  name: 'Philadelphia, PA' },

  // ── Delaware & Maryland ──
  { lat: 39.7,  lon: -75.5,  name: 'Wilmington, DE' },
  { lat: 39.6,  lon: -77.7,  name: 'Hagerstown, MD' },
  { lat: 39.4,  lon: -77.4,  name: 'Frederick, MD' },
  { lat: 39.3,  lon: -76.6,  name: 'Baltimore, MD' },
  { lat: 38.9,  lon: -77.0,  name: 'Washington, DC' },
  { lat: 39.6,  lon: -78.8,  name: 'Cumberland, MD' },        // Allegheny front
  { lat: 39.4,  lon: -79.4,  name: 'Deep Creek, MD' },        // Garrett Co. / ski

  // ── Southeast — Virginia ──
  { lat: 37.5,  lon: -77.5,  name: 'Richmond, VA' },
  { lat: 37.3,  lon: -80.0,  name: 'Roanoke, VA' },
  { lat: 36.9,  lon: -76.3,  name: 'Norfolk, VA' },
  { lat: 38.0,  lon: -78.5,  name: 'Charlottesville, VA' },
  { lat: 38.1,  lon: -79.1,  name: 'Staunton, VA' },

  // ── Southeast — West Virginia ──
  { lat: 38.4,  lon: -81.6,  name: 'Charleston, WV' },
  { lat: 38.9,  lon: -79.8,  name: 'Elkins, WV' },
  { lat: 37.8,  lon: -81.2,  name: 'Beckley, WV' },

  // ── Southeast — North Carolina ──
  { lat: 35.2,  lon: -80.8,  name: 'Charlotte, NC' },
  { lat: 35.8,  lon: -78.6,  name: 'Raleigh, NC' },
  { lat: 35.6,  lon: -82.6,  name: 'Asheville, NC' },
  { lat: 36.2,  lon: -81.7,  name: 'Boone, NC' },
  { lat: 34.2,  lon: -77.9,  name: 'Wilmington, NC' },

  // ── Southeast — South Carolina ──
  { lat: 34.0,  lon: -81.0,  name: 'Columbia, SC' },
  { lat: 32.8,  lon: -79.9,  name: 'Charleston, SC' },
  { lat: 34.8,  lon: -82.4,  name: 'Greenville, SC' },

  // ── Southeast — Georgia ──
  { lat: 33.7,  lon: -84.4,  name: 'Atlanta, GA' },
  { lat: 32.1,  lon: -81.1,  name: 'Savannah, GA' },
  { lat: 32.8,  lon: -83.6,  name: 'Macon, GA' },
  { lat: 34.5,  lon: -84.0,  name: 'Dahlonega, GA' },

  // ── Southeast — Florida ──
  { lat: 30.3,  lon: -81.7,  name: 'Jacksonville, FL' },
  { lat: 28.5,  lon: -81.4,  name: 'Orlando, FL' },
  { lat: 27.9,  lon: -82.5,  name: 'Tampa, FL' },
  { lat: 25.8,  lon: -80.2,  name: 'Miami, FL' },
  { lat: 30.4,  lon: -84.3,  name: 'Tallahassee, FL' },
  { lat: 24.6,  lon: -81.8,  name: 'Key West, FL' },
  { lat: 30.4,  lon: -87.2,  name: 'Pensacola, FL' },

  // ── Southeast — Alabama ──
  { lat: 33.5,  lon: -86.8,  name: 'Birmingham, AL' },
  { lat: 30.7,  lon: -88.1,  name: 'Mobile, AL' },
  { lat: 34.7,  lon: -86.6,  name: 'Huntsville, AL' },

  // ── Southeast — Mississippi ──
  { lat: 32.3,  lon: -90.2,  name: 'Jackson, MS' },
  { lat: 32.4,  lon: -88.7,  name: 'Meridian, MS' },

  // ── Southeast — Tennessee ──
  { lat: 36.2,  lon: -86.8,  name: 'Nashville, TN' },
  { lat: 35.1,  lon: -89.9,  name: 'Memphis, TN' },
  { lat: 35.9,  lon: -83.9,  name: 'Knoxville, TN' },
  { lat: 35.0,  lon: -85.3,  name: 'Chattanooga, TN' },

  // ── Southeast — Kentucky ──
  { lat: 38.3,  lon: -85.8,  name: 'Louisville, KY' },
  { lat: 38.0,  lon: -84.5,  name: 'Lexington, KY' },
  { lat: 37.5,  lon: -82.5,  name: 'Pikeville, KY' },

  // ── Southeast — Arkansas ──
  { lat: 34.7,  lon: -92.3,  name: 'Little Rock, AR' },
  { lat: 36.1,  lon: -94.2,  name: 'Fayetteville, AR' },

  // ── Midwest — Ohio ──
  { lat: 40.0,  lon: -83.0,  name: 'Columbus, OH' },
  { lat: 41.5,  lon: -81.7,  name: 'Cleveland, OH' },
  { lat: 39.1,  lon: -84.5,  name: 'Cincinnati, OH' },
  { lat: 41.7,  lon: -83.6,  name: 'Toledo, OH' },

  // ── Midwest — Indiana ──
  { lat: 39.8,  lon: -86.2,  name: 'Indianapolis, IN' },
  { lat: 41.1,  lon: -85.1,  name: 'Fort Wayne, IN' },
  { lat: 37.9,  lon: -87.6,  name: 'Evansville, IN' },

  // ── Midwest — Illinois ──
  { lat: 41.9,  lon: -87.6,  name: 'Chicago, IL' },
  { lat: 39.8,  lon: -89.6,  name: 'Springfield, IL' },
  { lat: 40.7,  lon: -89.6,  name: 'Peoria, IL' },
  { lat: 37.7,  lon: -89.2,  name: 'Carbondale, IL' },

  // ── Midwest — Michigan ──
  { lat: 42.3,  lon: -83.0,  name: 'Detroit, MI' },
  { lat: 42.9,  lon: -85.7,  name: 'Grand Rapids, MI' },
  { lat: 44.8,  lon: -85.6,  name: 'Traverse City, MI' },
  { lat: 46.5,  lon: -87.4,  name: 'Marquette, MI' },

  // ── Midwest — Wisconsin ──
  { lat: 43.0,  lon: -87.9,  name: 'Milwaukee, WI' },
  { lat: 43.1,  lon: -89.4,  name: 'Madison, WI' },
  { lat: 44.5,  lon: -88.0,  name: 'Green Bay, WI' },
  { lat: 46.7,  lon: -92.1,  name: 'Superior, WI' },

  // ── Midwest — Minnesota ──
  { lat: 44.9,  lon: -93.2,  name: 'Minneapolis, MN' },
  { lat: 46.8,  lon: -92.1,  name: 'Duluth, MN' },
  { lat: 48.6,  lon: -93.4,  name: 'International Falls, MN' },
  { lat: 46.4,  lon: -94.2,  name: 'Brainerd, MN' },

  // ── Midwest — Iowa ──
  { lat: 41.6,  lon: -93.6,  name: 'Des Moines, IA' },
  { lat: 41.7,  lon: -91.5,  name: 'Iowa City, IA' },
  { lat: 42.5,  lon: -96.4,  name: 'Sioux City, IA' },

  // ── Midwest — Missouri ──
  { lat: 38.6,  lon: -90.2,  name: 'St. Louis, MO' },
  { lat: 39.1,  lon: -94.6,  name: 'Kansas City, MO' },
  { lat: 37.2,  lon: -93.3,  name: 'Springfield, MO' },

  // ── Great Plains — North Dakota ──
  { lat: 46.9,  lon: -96.8,  name: 'Fargo, ND' },
  { lat: 46.8,  lon: -100.8, name: 'Bismarck, ND' },
  { lat: 48.2,  lon: -101.3, name: 'Minot, ND' },
  { lat: 48.1,  lon: -103.6, name: 'Williston, ND' },

  // ── Great Plains — South Dakota ──
  { lat: 43.5,  lon: -96.7,  name: 'Sioux Falls, SD' },
  { lat: 44.1,  lon: -103.2, name: 'Rapid City, SD' },
  { lat: 45.5,  lon: -98.5,  name: 'Aberdeen, SD' },

  // ── Great Plains — Nebraska ──
  { lat: 41.3,  lon: -96.0,  name: 'Omaha, NE' },
  { lat: 40.8,  lon: -96.7,  name: 'Lincoln, NE' },
  { lat: 41.1,  lon: -100.8, name: 'North Platte, NE' },
  { lat: 41.9,  lon: -103.7, name: 'Scottsbluff, NE' },

  // ── Great Plains — Kansas ──
  { lat: 37.7,  lon: -97.3,  name: 'Wichita, KS' },
  { lat: 39.0,  lon: -95.7,  name: 'Topeka, KS' },
  { lat: 37.8,  lon: -100.0, name: 'Dodge City, KS' },
  { lat: 37.0,  lon: -101.0, name: 'Liberal, KS' },

  // ── Great Plains — Oklahoma ──
  { lat: 35.5,  lon: -97.5,  name: 'Oklahoma City, OK' },
  { lat: 36.2,  lon: -96.0,  name: 'Tulsa, OK' },
  { lat: 34.6,  lon: -98.4,  name: 'Lawton, OK' },

  // ── South-Central — Texas ──
  { lat: 32.8,  lon: -97.0,  name: 'Dallas, TX' },
  { lat: 29.8,  lon: -95.4,  name: 'Houston, TX' },
  { lat: 29.4,  lon: -98.5,  name: 'San Antonio, TX' },
  { lat: 30.3,  lon: -97.7,  name: 'Austin, TX' },
  { lat: 31.8,  lon: -106.4, name: 'El Paso, TX' },
  { lat: 35.2,  lon: -101.8, name: 'Amarillo, TX' },
  { lat: 33.6,  lon: -101.8, name: 'Lubbock, TX' },
  { lat: 32.0,  lon: -102.1, name: 'Midland, TX' },
  { lat: 27.8,  lon: -97.4,  name: 'Corpus Christi, TX' },
  { lat: 32.4,  lon: -99.7,  name: 'Abilene, TX' },

  // ── South-Central — Louisiana ──
  { lat: 30.0,  lon: -90.1,  name: 'New Orleans, LA' },
  { lat: 30.4,  lon: -91.2,  name: 'Baton Rouge, LA' },
  { lat: 32.5,  lon: -93.7,  name: 'Shreveport, LA' },

  // ── Mountain West — Montana ──
  { lat: 45.8,  lon: -108.5, name: 'Billings, MT' },
  { lat: 47.5,  lon: -111.3, name: 'Great Falls, MT' },
  { lat: 46.9,  lon: -114.0, name: 'Missoula, MT' },
  { lat: 48.2,  lon: -114.3, name: 'Kalispell, MT' },
  { lat: 48.2,  lon: -106.6, name: 'Glasgow, MT' },

  // ── Mountain West — Idaho ──
  { lat: 43.6,  lon: -116.2, name: 'Boise, ID' },
  { lat: 42.9,  lon: -112.4, name: 'Pocatello, ID' },
  { lat: 43.5,  lon: -112.0, name: 'Idaho Falls, ID' },
  { lat: 47.7,  lon: -116.8, name: "Coeur d'Alene, ID" },

  // ── Mountain West — Wyoming ──
  { lat: 41.1,  lon: -104.8, name: 'Cheyenne, WY' },
  { lat: 42.8,  lon: -106.3, name: 'Casper, WY' },
  { lat: 43.5,  lon: -110.8, name: 'Jackson, WY' },
  { lat: 44.8,  lon: -107.0, name: 'Sheridan, WY' },
  { lat: 42.8,  lon: -108.7, name: 'Lander, WY' },

  // ── Mountain West — Colorado ──
  { lat: 39.7,  lon: -105.0, name: 'Denver, CO' },
  { lat: 38.8,  lon: -104.8, name: 'Colorado Springs, CO' },
  { lat: 39.2,  lon: -106.8, name: 'Aspen, CO' },
  { lat: 39.1,  lon: -108.6, name: 'Grand Junction, CO' },
  { lat: 37.3,  lon: -107.9, name: 'Durango, CO' },
  { lat: 40.5,  lon: -106.8, name: 'Steamboat Springs, CO' },
  { lat: 37.5,  lon: -105.9, name: 'Alamosa, CO' },

  // ── Mountain West — Utah ──
  { lat: 40.8,  lon: -111.9, name: 'Salt Lake City, UT' },
  { lat: 37.1,  lon: -113.6, name: 'St. George, UT' },
  { lat: 41.7,  lon: -111.8, name: 'Logan, UT' },
  { lat: 38.6,  lon: -109.5, name: 'Moab, UT' },

  // ── Mountain West — Nevada ──
  { lat: 36.2,  lon: -115.2, name: 'Las Vegas, NV' },
  { lat: 39.5,  lon: -119.8, name: 'Reno, NV' },
  { lat: 40.8,  lon: -115.8, name: 'Elko, NV' },
  { lat: 41.0,  lon: -117.7, name: 'Winnemucca, NV' },

  // ── Mountain West — Arizona ──
  { lat: 33.4,  lon: -112.1, name: 'Phoenix, AZ' },
  { lat: 32.2,  lon: -110.9, name: 'Tucson, AZ' },
  { lat: 35.2,  lon: -111.7, name: 'Flagstaff, AZ' },
  { lat: 32.7,  lon: -114.6, name: 'Yuma, AZ' },

  // ── Mountain West — New Mexico ──
  { lat: 35.1,  lon: -106.7, name: 'Albuquerque, NM' },
  { lat: 35.7,  lon: -105.9, name: 'Santa Fe, NM' },
  { lat: 33.4,  lon: -104.5, name: 'Roswell, NM' },
  { lat: 32.3,  lon: -106.8, name: 'Las Cruces, NM' },

  // ── Pacific — Washington ──
  { lat: 47.6,  lon: -122.3, name: 'Seattle, WA' },
  { lat: 47.7,  lon: -117.4, name: 'Spokane, WA' },
  { lat: 46.6,  lon: -120.5, name: 'Yakima, WA' },
  { lat: 48.7,  lon: -122.5, name: 'Bellingham, WA' },
  { lat: 47.0,  lon: -122.9, name: 'Olympia, WA' },
  { lat: 48.5,  lon: -120.2, name: 'Winthrop, WA' },

  // ── Pacific — Oregon ──
  { lat: 45.5,  lon: -122.7, name: 'Portland, OR' },
  { lat: 44.1,  lon: -123.1, name: 'Eugene, OR' },
  { lat: 42.3,  lon: -122.9, name: 'Medford, OR' },
  { lat: 45.7,  lon: -118.8, name: 'Pendleton, OR' },
  { lat: 44.1,  lon: -121.3, name: 'Bend, OR' },
  { lat: 42.9,  lon: -122.1, name: 'Crater Lake, OR' },

  // ── Pacific — California ──
  { lat: 34.1,  lon: -118.2, name: 'Los Angeles, CA' },
  { lat: 37.8,  lon: -122.4, name: 'San Francisco, CA' },
  { lat: 38.6,  lon: -121.5, name: 'Sacramento, CA' },
  { lat: 32.7,  lon: -117.2, name: 'San Diego, CA' },
  { lat: 36.7,  lon: -119.8, name: 'Fresno, CA' },
  { lat: 40.6,  lon: -122.4, name: 'Redding, CA' },
  { lat: 40.8,  lon: -124.2, name: 'Eureka, CA' },
  { lat: 37.4,  lon: -118.4, name: 'Bishop, CA' },
  { lat: 38.9,  lon: -120.0, name: 'South Lake Tahoe, CA' },
  { lat: 35.4,  lon: -119.0, name: 'Bakersfield, CA' },
];

// ── Temperature color scale (°F) ────────────────────────────────────────────
const TEMP_SCALE = [
  { t:  -10, r: 90,  g: 0,   b: 180 },
  { t:   0,  r: 40,  g: 0,   b: 255 },
  { t:   10, r: 0,   g: 60,  b: 255 },
  { t:   20, r: 0,   g: 150, b: 255 },
  { t:   30, r: 0,   g: 210, b: 240 },
  { t:   40, r: 0,   g: 230, b: 180 },
  { t:   50, r: 80,  g: 225, b: 80  },
  { t:   60, r: 200, g: 230, b: 0   },
  { t:   70, r: 255, g: 190, b: 0   },
  { t:   80, r: 255, g: 95,  b: 0   },
  { t:   90, r: 235, g: 15,  b: 0   },
  { t:  100, r: 160, g: 0,   b: 0   },
];

// ── Model confidence info ────────────────────────────────────────────────────
const CONFIDENCE = [
  { range: [1,  3],  color: '#3fb950', text: 'Both models are reliable. Differences at this range are usually minor.' },
  { range: [4,  7],  color: '#d29922', text: 'Euro (ECMWF) generally outperforms GFS in the medium range. Favor Euro if they disagree.' },
  { range: [8,  10], color: '#f07830', text: 'Meaningful uncertainty. Euro still tends to verify better but both carry real error.' },
  { range: [11, 14], color: '#f85149', text: 'Extended range — treat as trends only. Model agreement increases confidence slightly.' },
];

// ── State ───────────────────────────────────────────────────────────────────
const weatherData = {};        // key → { name, lat, lon, times[], gfs[], ecmwf[] }
let currentHour = 0;
let selectedKey  = null;
let activeModel  = 'both';     // 'both' | 'gfs' | 'ecmwf'
let tempUnit     = 'F';
let isPlaying    = false;
let playTimer    = null;
let playSpeed    = 1;    // multiplier; base interval is 80ms/hour
let map, chartInst, tempLayer, usBoundary = null;
let tempBgMode = false; // false = thin bar, true = full plot background
let gfsRunTime = null, ecmwfRunTime = null; // Date objects for latest available model runs

// ── Color helpers ────────────────────────────────────────────────────────────
function tempToRGB(f) {
  const s = TEMP_SCALE;
  if (f <= s[0].t) return [s[0].r, s[0].g, s[0].b];
  if (f >= s[s.length-1].t) { const c = s[s.length-1]; return [c.r, c.g, c.b]; }
  for (let i = 0; i < s.length - 1; i++) {
    if (f >= s[i].t && f <= s[i+1].t) {
      const frac = (f - s[i].t) / (s[i+1].t - s[i].t);
      return [
        Math.round(s[i].r + frac * (s[i+1].r - s[i].r)),
        Math.round(s[i].g + frac * (s[i+1].g - s[i].g)),
        Math.round(s[i].b + frac * (s[i+1].b - s[i].b)),
      ];
    }
  }
  return [128, 128, 128];
}

function toDisplay(f) {
  return tempUnit === 'F' ? f : (f - 32) * 5 / 9;
}

function fmtTemp(f) {
  if (f == null) return '—';
  return `${Math.round(toDisplay(f))}°${tempUnit}`;
}

// ── Data fetching ────────────────────────────────────────────────────────────
const CACHE_KEY = 'weatherCache_v1';
const CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours — matches GFS update cadence

async function loadAll() {
  const statusEl = document.getElementById('loading-status');

  // Load US boundary for canvas clipping (runs in parallel with weather fetch)
  fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/nation-10m.json')
    .then(r => r.json())
    .then(topo => { usBoundary = topojson.feature(topo, topo.objects.nation); })
    .catch(() => {});

  // Try cache first
  let gfsList, ecmwfList;
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
    if (cached && (Date.now() - cached.ts) < CACHE_TTL) {
      statusEl.textContent = `Loaded from cache (${new Date(cached.ts).toLocaleTimeString()})`;
      gfsList   = cached.gfs;
      ecmwfList = cached.ecmwf;
    }
  } catch (e) { /* ignore bad cache */ }

  if (!gfsList) {
    statusEl.textContent = 'Fetching forecast data…';

    const lats   = NE_LOCATIONS.map(l => l.lat).join(',');
    const lons   = NE_LOCATIONS.map(l => l.lon).join(',');
    const coords = `latitude=${lats}&longitude=${lons}` +
      `&hourly=temperature_2m&temperature_unit=fahrenheit&timezone=America%2FNew_York`;

    const [gfsResp, ecmwfResp] = await Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?${coords}&models=gfs_seamless&forecast_days=14`),
      fetch(`https://api.open-meteo.com/v1/ecmwf?${coords}&forecast_days=10`),
    ]);

    const [gfsRaw, ecmwfRaw] = await Promise.all([gfsResp.json(), ecmwfResp.json()]);

    const firstGfs = Array.isArray(gfsRaw) ? gfsRaw[0] : gfsRaw;
    if (firstGfs?.error) throw new Error(`GFS API error: ${firstGfs.reason}`);
    const firstEcmwf = Array.isArray(ecmwfRaw) ? ecmwfRaw[0] : ecmwfRaw;
    if (firstEcmwf?.error) throw new Error(`ECMWF API error: ${firstEcmwf.reason}`);

    gfsList   = Array.isArray(gfsRaw)   ? gfsRaw   : [gfsRaw];
    ecmwfList = Array.isArray(ecmwfRaw) ? ecmwfRaw : [ecmwfRaw];

    // Save to cache
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), gfs: gfsList, ecmwf: ecmwfList }));
    } catch (e) { /* storage full — skip caching */ }
  }

  // Seed weatherData from GFS (includes times)
  gfsList.forEach((d, i) => {
    const loc = NE_LOCATIONS[i];
    if (!loc || !d.hourly) return;
    const key = `${loc.lat},${loc.lon}`;
    weatherData[key] = {
      name: loc.name, lat: loc.lat, lon: loc.lon,
      times: d.hourly.time,
      gfs:   d.hourly.temperature_2m ?? [],
      ecmwf: [],
    };
  });

  // Merge ECMWF
  ecmwfList.forEach((d, i) => {
    const loc = NE_LOCATIONS[i];
    if (!loc || !d.hourly) return;
    const key = `${loc.lat},${loc.lon}`;
    if (weatherData[key]) weatherData[key].ecmwf = d.hourly.temperature_2m ?? [];
  });

  // Compute most recent available model run times from current UTC clock.
  // GFS initializes at 00/06/12/18Z, available ~3.5h later.
  // ECMWF initializes at 00/12Z, available ~6h later.
  const nowMs = Date.now();
  const latestRun = (initHours, lagHours) => {
    const d = new Date(nowMs);
    const utcH = d.getUTCHours() + d.getUTCMinutes() / 60;
    const available = initHours.map(h => h + lagHours);
    // Find latest available run (may be from previous day)
    let best = null;
    for (let dayOffset = 0; dayOffset <= 1; dayOffset++) {
      for (const avail of [...available].reverse()) {
        const runMs = new Date(Date.UTC(
          d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - dayOffset,
          Math.floor(avail), (avail % 1) * 60
        )).getTime();
        if (runMs <= nowMs) { best = runMs; break; }
      }
      if (best) break;
    }
    return best ? new Date(best) : null;
  };
  gfsRunTime   = latestRun([0, 6, 12, 18], 3.5);
  ecmwfRunTime = latestRun([0, 12], 6);

  statusEl.textContent = `${gfsList.length} locations loaded (GFS + Euro)`;
}

// ── IDW canvas rendering ─────────────────────────────────────────────────────
// Builds the temperature field pixel-by-pixel using inverse distance weighting.
// Lives in Leaflet's overlayPane so it moves/zooms correctly with the map.
function buildTempLayer() {
  return L.Layer.extend({
    onAdd(map) {
      this._map = map;
      this._canvas = document.createElement('canvas');
      this._canvas.style.cssText = 'position:absolute;pointer-events:none;opacity:0.78';
      map.getPanes().overlayPane.appendChild(this._canvas);
      map.on('viewreset moveend zoomend', this._reset, this);
      this._reset();
    },
    onRemove(map) {
      this._canvas.remove();
      map.off('viewreset moveend zoomend', this._reset, this);
    },
    _reset() {
      const nw = this._map.getBounds().getNorthWest();
      const se = this._map.getBounds().getSouthEast();
      const tl = this._map.latLngToLayerPoint(nw);
      const br = this._map.latLngToLayerPoint(se);
      this._canvas.width  = Math.ceil(br.x - tl.x);
      this._canvas.height = Math.ceil(br.y - tl.y);
      L.DomUtil.setPosition(this._canvas, tl);
      this._tl = tl;
      this.draw();
    },
    draw() {
      if (!this._canvas || !this._tl) return;
      drawIDW(this._canvas, this._tl, this._map);
    },
  });
}

function mapTemp(d) {
  // Returns the temperature value to use for the map at the current hour,
  // depending on the active model toggle.
  const g = d.gfs?.[currentHour]  ?? null;
  const e = d.ecmwf?.[currentHour] ?? null;
  if (activeModel === 'gfs')   return g;
  if (activeModel === 'ecmwf') return e;
  // 'both' → average when we have both; fall back to whichever exists
  if (g != null && e != null)  return (g + e) / 2;
  return g ?? e;
}

function mapLabel() {
  if (activeModel === 'gfs')   return 'Map: GFS';
  if (activeModel === 'ecmwf') return 'Map: Euro';
  return 'Map: GFS + Euro avg';
}

function drawIDW(canvas, tl, m) {
  // Collect stations with valid data for the current hour + model
  const stations = [];
  NE_LOCATIONS.forEach(loc => {
    const d   = weatherData[`${loc.lat},${loc.lon}`];
    if (!d) return;
    const temp = mapTemp(d);
    if (temp != null) stations.push([loc.lat, loc.lon, temp]);
  });
  if (stations.length < 3) return;

  const ctx  = canvas.getContext('2d');
  const W    = canvas.width;
  const H    = canvas.height;
  const img  = ctx.createImageData(W, H);
  const BLOCK = 4;   // render one sample per 4×4 block for speed

  for (let py = 0; py < H; py += BLOCK) {
    for (let px = 0; px < W; px += BLOCK) {
      const ll = m.layerPointToLatLng(L.point(tl.x + px, tl.y + py));

      // Loose CONUS bounding box — just skips obviously out-of-range pixels
      // for performance. The actual border clipping happens via canvas masking below.
      if (ll.lat < 23 || ll.lat > 50 || ll.lng < -127 || ll.lng > -63) continue;

      // Gaussian weighting: w = exp(-d² / σ²), σ ≈ 1.6° (~180 km)
      let wSum = 0, vSum = 0;
      for (const [slat, slng, stemp] of stations) {
        const d2 = (ll.lat - slat) ** 2 + (ll.lng - slng) ** 2;
        const w  = Math.exp(-d2 / 2.56);
        wSum += w;
        vSum += w * stemp;
      }
      if (wSum < 1e-9) continue;
      const [r, g, b] = tempToRGB(vSum / wSum);

      for (let dy = 0; dy < BLOCK && py + dy < H; dy++) {
        for (let dx = 0; dx < BLOCK && px + dx < W; dx++) {
          const i = ((py + dy) * W + (px + dx)) * 4;
          img.data[i]     = r;
          img.data[i + 1] = g;
          img.data[i + 2] = b;
          img.data[i + 3] = 200;
        }
      }
    }
  }
  ctx.putImageData(img, 0, 0);

  // ── Clip to exact US border ───────────────────────────────────────────────
  // destination-in keeps pixels where the new shape overlaps existing content;
  // everything outside the US polygon becomes transparent.
  if (usBoundary) {
    ctx.save();
    ctx.globalCompositeOperation = 'destination-in';
    ctx.beginPath();
    for (const feature of usBoundary.features) {
      const geom   = feature.geometry;
      // Handle both Polygon and MultiPolygon
      const polys  = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
      for (const poly of polys) {
        for (const ring of poly) {
          let first = true;
          for (const [lng, lat] of ring) {
            const pt = m.latLngToLayerPoint([lat, lng]);
            const cx = pt.x - tl.x, cy = pt.y - tl.y;
            if (first) { ctx.moveTo(cx, cy); first = false; }
            else ctx.lineTo(cx, cy);
          }
          ctx.closePath();
        }
      }
    }
    ctx.fillStyle = 'black'; // alpha=1, so full opacity inside the polygon
    ctx.fill('evenodd');
    ctx.restore();
  }
}

// ── Map setup ────────────────────────────────────────────────────────────────
function initMap() {
  map = L.map('map', { center: [43.5, -73.5], zoom: 7, zoomControl: false });
  L.control.zoom({ position: 'bottomright' }).addTo(map);

  const zoomBadge = L.control({ position: 'bottomright' });
  zoomBadge.onAdd = () => {
    const el = L.DomUtil.create('div', 'zoom-badge');
    el.textContent = `z${map.getZoom()}`;
    map.on('zoomend', () => { el.textContent = `z${map.getZoom()}`; });
    return el;
  };
  zoomBadge.addTo(map);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 12, subdomains: 'abcd',
  }).addTo(map);

  // IDW temperature canvas layer
  const TempLayer = buildTempLayer();
  tempLayer = new TempLayer();
  tempLayer.addTo(map);

  // City markers
  NE_LOCATIONS.forEach(loc => {
    const key = `${loc.lat},${loc.lon}`;
    const icon = L.divIcon({
      className: '',
      html: `<div class="city-dot" id="dot-${key.replace(/[.,]/g,'_')}" title="${loc.name}"></div>`,
      iconSize: [7, 7], iconAnchor: [3.5, 3.5],
    });
    const marker = L.marker([loc.lat, loc.lon], { icon }).addTo(map);
    marker.bindPopup(loc.name, { closeButton: false, offset: [0, -4] });
    marker.on('mouseover', () => marker.openPopup());
    marker.on('mouseout',  () => marker.closePopup());
    marker.on('click', () => selectLocation(key));
  });

  buildLegend();
}

function redrawOverlay() {
  if (tempLayer) tempLayer.draw();
  const el = document.getElementById('map-model-label');
  if (el) el.textContent = mapLabel();
}

function buildLegend() {
  const lc = document.getElementById('legend-canvas');
  const ctx = lc.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 160, 0);
  const minT = TEMP_SCALE[0].t, maxT = TEMP_SCALE[TEMP_SCALE.length - 1].t;
  TEMP_SCALE.forEach(c => {
    grad.addColorStop((c.t - minT) / (maxT - minT), `rgb(${c.r},${c.g},${c.b})`);
  });
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 160, 10);
  updateLegendLabels();
}

function updateLegendLabels() {
  const minT = TEMP_SCALE[0].t, maxT = TEMP_SCALE[TEMP_SCALE.length - 1].t;
  document.getElementById('legend-min').textContent = fmtTemp(minT);
  document.getElementById('legend-mid').textContent = fmtTemp((minT + maxT) / 2);
  document.getElementById('legend-max').textContent = fmtTemp(maxT);
}

// ── Chart ────────────────────────────────────────────────────────────────────
function initChart() {
  const ctx = document.getElementById('temp-chart').getContext('2d');

  // Plugin: vertical temperature color bar along the y-axis
  const yColorBarPlugin = {
    id: 'yColorBar',
    afterDraw(chart) {
      const { ctx, chartArea: ca, scales } = chart;
      if (!ca) return;
      const minF = tempUnit === 'C' ? scales.y.min * 9/5 + 32 : scales.y.min;
      const maxF = tempUnit === 'C' ? scales.y.max * 9/5 + 32 : scales.y.max;
      const steps = 12;
      const grad = ctx.createLinearGradient(0, ca.bottom, 0, ca.top);
      for (let i = 0; i <= steps; i++) {
        const f = minF + (maxF - minF) * (i / steps);
        const [r, g, b] = tempToRGB(f);
        const alpha = tempBgMode ? 0.13 : 0.7;
        grad.addColorStop(i / steps, `rgba(${r},${g},${b},${alpha})`);
      }
      ctx.save();
      ctx.fillStyle = grad;
      if (tempBgMode) {
        ctx.fillRect(ca.left, ca.top, ca.right - ca.left, ca.bottom - ca.top);
      } else {
        const barW = 4, barX = ca.left - 8;
        ctx.beginPath();
        ctx.roundRect(barX - barW / 2, ca.top, barW, ca.bottom - ca.top, 2);
        ctx.fill();
      }
      ctx.restore();
    }
  };

  // Plugin: day number labels along the top of the plot area
  const dayLabelPlugin = {
    id: 'dayLabels',
    afterDraw(chart) {
      if (!chart.data.labels.length) return;
      const { ctx, chartArea: ca, scales } = chart;
      ctx.save();
      ctx.font = '9px Inter, system-ui, sans-serif';
      ctx.fillStyle = 'rgba(110,118,129,0.7)';
      ctx.textAlign = 'center';
      for (let day = 1; day <= 14; day++) {
        let x = scales.x.getPixelForValue((day - 1) * 24);
        if (x < ca.left || x > ca.right) continue;
        if (day === 1) x += 6; // nudge away from y-axis
        ctx.fillText(day, x, ca.bottom - 6);
      }
      ctx.restore();
    }
  };

  // Plugin: gradient fills under GFS and Euro lines
  const gradientPlugin = {
    id: 'gradients',
    beforeDatasetsDraw(chart) {
      const { ctx, chartArea: ca } = chart;
      if (!ca) return;
      const gfsGrad = ctx.createLinearGradient(0, ca.top, 0, ca.bottom);
      gfsGrad.addColorStop(0, 'rgba(88,166,255,0.1)');
      gfsGrad.addColorStop(1, 'rgba(88,166,255,0)');
      chart.data.datasets[2].backgroundColor = gfsGrad;
      const euroGrad = ctx.createLinearGradient(0, ca.top, 0, ca.bottom);
      euroGrad.addColorStop(0, 'rgba(255,166,87,0.1)');
      euroGrad.addColorStop(1, 'rgba(255,166,87,0)');
      chart.data.datasets[3].backgroundColor = euroGrad;
    }
  };

  // Plugin: vertical "now" indicator with dots at line intersections
  const vLinePlugin = {
    id: 'vline',
    afterDatasetsDraw(chart) {
      if (!chart.data.labels.length) return;
      const { ctx: c, chartArea: ca, scales } = chart;
      const x = scales.x.getPixelForValue(currentHour);
      c.save();
      // Vertical line
      c.beginPath();
      c.moveTo(x, ca.top);
      c.lineTo(x, ca.bottom);
      c.strokeStyle = 'rgba(255,255,255,0.3)';
      c.lineWidth = 1;
      c.setLineDash([3, 3]);
      c.stroke();
      // Dots where vline crosses each dataset (both always drawn, clipped to chart area)
      c.setLineDash([]);
      c.save();
      c.beginPath();
      c.rect(ca.left, ca.top, ca.right - ca.left, ca.bottom - ca.top);
      c.clip();
      [2, 3].forEach(di => {
        const ds = chart.data.datasets[di];
        const val = ds.data[currentHour];
        if (val == null) return;
        const y = scales.y.getPixelForValue(val);
        const isPrimary = !ds.hidden;
        c.beginPath();
        c.arc(x, y, isPrimary ? 3.5 : 2.5, 0, Math.PI * 2);
        c.fillStyle = di === 2 ? (isPrimary ? '#58a6ff' : 'rgba(88,166,255,0.5)')
                                : (isPrimary ? '#ffa657' : 'rgba(255,166,87,0.5)');
        c.fill();
        c.strokeStyle = '#0d1117';
        c.lineWidth = isPrimary ? 1.5 : 1;
        c.stroke();
      });
      c.restore();
      c.restore();
    }
  };

  chartInst = new Chart(ctx, {
    type: 'line',
    plugins: [yColorBarPlugin, dayLabelPlugin, gradientPlugin, vLinePlugin],
    data: {
      labels: [],
      datasets: [
        // 0: spread upper
        {
          label: '_upper', data: [],
          borderColor: 'transparent', borderWidth: 0, pointRadius: 0,
          backgroundColor: 'rgba(255,255,255,0.05)',
          fill: '+1', tension: 0.35,
        },
        // 1: spread lower
        {
          label: '_lower', data: [],
          borderColor: 'transparent', borderWidth: 0, pointRadius: 0,
          backgroundColor: 'transparent',
          fill: false, tension: 0.35,
        },
        // 2: GFS
        {
          label: 'GFS', data: [],
          borderColor: '#58a6ff', backgroundColor: 'transparent',
          borderWidth: 1.5, pointRadius: 0, pointHoverRadius: 4,
          tension: 0.35, fill: 'origin',
        },
        // 3: Euro
        {
          label: 'Euro (ECMWF)', data: [],
          borderColor: '#ffa657', backgroundColor: 'transparent',
          borderWidth: 1.5, pointRadius: 0, pointHoverRadius: 4,
          tension: 0.35, fill: 'origin',
        },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      interaction: { intersect: false, mode: 'index' },
      onClick(event, activeElements, chart) {
        const pts = chart.getElementsAtEventForMode(event.native, 'index', { intersect: false }, true);
        if (pts.length) {
          currentHour = pts[0].index;
          document.getElementById('timeline').value = currentHour;
          updateTimeDisplay();
          redrawOverlay();
          updateConfidence();
          updateSelectedDotLabel();
          chart.update('none');
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#6e7681', font: { size: 11 }, boxWidth: 10, boxHeight: 2,
            filter: item => !item.text.startsWith('_'),
          }
        },
        tooltip: {
          backgroundColor: 'rgba(13,17,23,0.95)',
          borderColor: '#30363d', borderWidth: 1,
          titleColor: '#e6edf3', titleFont: { size: 11, weight: '500' },
          bodyColor: '#8b949e', bodyFont: { size: 11 },
          padding: 8, caretSize: 4,
          callbacks: {
            title: items => items[0]?.label ?? '',
            label: item => {
              if (item.dataset.label.startsWith('_')) return null;
              const raw = item.raw;
              if (raw == null) return null;
              return ` ${item.dataset.label}: ${Math.round(raw)}°${tempUnit}`;
            },
          },
          filter: item => !item.dataset.label.startsWith('_'),
        },
      },
      scales: {
        x: {
          border: { display: false },
          ticks: {
            color: '#6e7681', font: { size: 10 }, maxRotation: 0,
            callback(val) {
              if (val % 24 !== 0) return '';
              const label = this.getLabelForValue(val);
              if (!label) return '';
              return label.split(' at ')[0];
            },
          },
          grid: {
            color: ctx => ctx.tick.value % 24 === 0 ? 'rgba(48,54,61,0.6)' : 'transparent',
          },
        },
        y: {
          border: { display: false },
          ticks: {
            font: { size: 10 },
            color: '#6e7681',
            callback: v => `${Math.round(v)}°`,
            maxTicksLimit: 6,
          },
          grid: { color: 'rgba(48,54,61,0.35)' },
        },
      },
    },
  });
}

function updateChart(key) {
  const d = weatherData[key];
  if (!d) return;

  const labels = d.times.map(t => {
    const dt = parseETstr(t);
    return dt.toLocaleString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric',
      hour: 'numeric', minute: '2-digit',
      timeZone: 'America/New_York',
    });
  });

  const gfsD  = d.gfs.map(v  => v  != null ? toDisplay(v)  : null);
  const ecmwfD = d.ecmwf.map(v => v  != null ? toDisplay(v) : null);
  const hasEcmwf = ecmwfD.some(v => v != null);

  const upper = gfsD.map((g, i) => {
    const e = ecmwfD[i];
    if (g == null && e == null) return null;
    if (g == null) return e;
    if (e == null) return g;
    return Math.max(g, e);
  });
  const lower = gfsD.map((g, i) => {
    const e = ecmwfD[i];
    if (g == null && e == null) return null;
    if (g == null) return e;
    if (e == null) return g;
    return Math.min(g, e);
  });

  chartInst.data.labels = labels;
  chartInst.data.datasets[0].data = upper;
  chartInst.data.datasets[1].data = lower;
  chartInst.data.datasets[2].data = gfsD;
  chartInst.data.datasets[3].data = ecmwfD;

  const showBoth  = activeModel === 'both' && hasEcmwf;
  chartInst.data.datasets[0].hidden = !showBoth;
  chartInst.data.datasets[1].hidden = !showBoth;
  chartInst.data.datasets[2].hidden = activeModel === 'ecmwf';
  chartInst.data.datasets[3].hidden = activeModel === 'gfs' || !hasEcmwf;

  chartInst.update('none');
  alignConfidenceBars();

  // Peak temps annotation
  const gfsPeak  = gfsD.reduce((m, v) => (v != null && v > m ? v : m), -Infinity);
  const ecmwfPeak = hasEcmwf ? ecmwfD.reduce((m, v) => (v != null && v > m ? v : m), -Infinity) : null;

  let peakStr = `Peak (14d): GFS ${Math.round(gfsPeak)}°${tempUnit}`;
  if (ecmwfPeak !== null) peakStr += ` · Euro ${Math.round(ecmwfPeak)}°${tempUnit}`;
  document.getElementById('selected-location').textContent = d.name;
  document.getElementById('peak-label').textContent = peakStr;
}

// ── Location selection ────────────────────────────────────────────────────────
function updateSelectedDotLabel() {
  document.querySelectorAll('.dot-temp-label').forEach(el => el.remove());
  if (!selectedKey || !weatherData[selectedKey]) return;
  const temp = mapTemp(weatherData[selectedKey]);
  if (temp == null) return;
  const dotEl = document.getElementById(`dot-${selectedKey.replace(/[.,]/g,'_')}`);
  if (!dotEl) return;
  const label = document.createElement('span');
  label.className = 'dot-temp-label';
  label.textContent = `${Math.round(toDisplay(temp))}°`;
  dotEl.appendChild(label);
}

function selectLocation(key) {
  selectedKey = key;

  // Update dot styles
  NE_LOCATIONS.forEach(loc => {
    const k = `${loc.lat},${loc.lon}`;
    const id = `dot-${k.replace(/[.,]/g,'_')}`;
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('selected', k === key);
  });

  updateSelectedDotLabel();
  if (weatherData[key]) updateChart(key);
}

// ── Time helpers ─────────────────────────────────────────────────────────────
// Open-Meteo returns local-time strings like "2024-03-22T14:00" for the
// requested timezone. Parse them correctly with a simple DST heuristic.
function parseETstr(timeStr) {
  const month = +timeStr.slice(5, 7);
  // EDT (UTC-4): Mar 8 – Nov 1 approx; EST (UTC-5) otherwise
  const offset = (month >= 3 && month <= 11) ? '-04:00' : '-05:00';
  return new Date(timeStr + ':00' + offset);
}

// ── Timeline ─────────────────────────────────────────────────────────────────
function tickStep() {
  // Central update used by play loop, step buttons, and slider
  document.getElementById('timeline').value = currentHour;
  updateTimeDisplay();
  redrawOverlay();
  updateConfidence();
  if (selectedKey) chartInst.update('none');
  updateSelectedDotLabel();
}

function startPlay() {
  clearInterval(playTimer);
  playTimer = setInterval(() => {
    currentHour = (currentHour + 1) % 336;
    tickStep();
  }, Math.round(80 / playSpeed));
}

function buildTimelineTicks() {
  const container = document.getElementById('timeline-ticks');
  if (!container) return;
  container.innerHTML = '';

  const first = Object.values(weatherData)[0];
  const times = first?.times ?? null;

  for (let h = 0; h <= 335; h += 6) {
    const pct = (h / 335) * 100;
    const isDay = h % 24 === 0;
    const is12h = h % 12 === 0;

    const tick = document.createElement('div');
    tick.className = 'tl-tick ' + (isDay ? 'tl-tick-day' : is12h ? 'tl-tick-12h' : 'tl-tick-6h');
    tick.style.left = `calc(6.5px + ${h / 335} * (100% - 13px))`;
    container.appendChild(tick);

    if (isDay && times?.[h]) {
      const label = document.createElement('div');
      label.className = 'tl-label';
      label.style.left = `calc(6.5px + ${h / 335} * (100% - 13px))`;
      label.textContent = parseETstr(times[h]).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', timeZone: 'America/New_York',
      });
      container.appendChild(label);
    }
  }
}

function initTimeline() {
  const slider = document.getElementById('timeline');
  slider.addEventListener('input', () => {
    currentHour = +slider.value;
    tickStep();
  });

  // Play / pause
  document.getElementById('play-btn').addEventListener('click', () => {
    isPlaying = !isPlaying;
    const btn = document.getElementById('play-btn');
    btn.innerHTML = `<i data-lucide="${isPlaying ? 'pause' : 'play'}"></i>`;
    lucide.createIcons({ nodes: [btn] });
    if (isPlaying) startPlay(); else clearInterval(playTimer);
  });

  // Step back / forward 1 hour
  document.getElementById('step-back').addEventListener('click', () => {
    currentHour = Math.max(0, currentHour - 1);
    tickStep();
  });
  document.getElementById('step-fwd').addEventListener('click', () => {
    currentHour = Math.min(335, currentHour + 1);
    tickStep();
  });

  // Speed buttons
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      playSpeed = parseFloat(btn.dataset.speed);
      if (isPlaying) startPlay(); // restart with new interval
    });
  });
}

function updateTimeDisplay() {
  const first = Object.values(weatherData)[0];
  if (!first || !first.times[currentHour]) return;

  const dt = parseETstr(first.times[currentHour]);

  document.getElementById('current-time-local').textContent =
    dt.toLocaleString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric',
      hour: 'numeric', minute: '2-digit', hour12: true,
      timeZone: 'America/New_York',
    }) + ' ET';

  const hh = String(dt.getUTCHours()).padStart(2,'0');
  const mm = String(dt.getUTCMinutes()).padStart(2,'0');
  const mon = dt.toLocaleString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
  document.getElementById('current-time-z').textContent = `${mon} ${hh}${mm}Z`;

  const day = Math.floor(currentHour / 24) + 1;
  document.getElementById('timeline-readout').textContent = `Day ${day} of 14`;
}

function alignConfidenceBars() {
  if (!chartInst?.chartArea) return;
  const ca = chartInst.chartArea;
  const canvasRect = document.getElementById('temp-chart').getBoundingClientRect();
  const segsEl = document.getElementById('confidence-segments');
  const segsRect = segsEl.getBoundingClientRect();
  const leftPad  = Math.max(0, (canvasRect.left + ca.left)  - segsRect.left);
  const rightPad = Math.max(0, segsRect.right - (canvasRect.left + ca.right));
  segsEl.style.paddingLeft  = leftPad  + 'px';
  segsEl.style.paddingRight = rightPad + 'px';

}

function updateModelRunAge() {
  const el = document.getElementById('model-run-age');
  if (!el) return;
  const fmt = (runTime, cadenceHours) => {
    if (!runTime) return '—';
    const ageH = (Date.now() - runTime.getTime()) / 3600000;
    const nextH = cadenceHours - (ageH % cadenceHours);
    const ageStr = ageH < 1 ? '<1h old' : `${Math.floor(ageH)}h old`;
    const nextStr = nextH < 1 ? 'new run soon' : `next ~${Math.ceil(nextH)}h`;
    return `${ageStr} · ${nextStr}`;
  };
  el.innerHTML =
    `GFS: ${fmt(gfsRunTime, 6)}<br>Euro: ${fmt(ecmwfRunTime, 12)}`;
}

function updateConfidence() {
  const day = Math.floor(currentHour / 24) + 1;
  const c = CONFIDENCE.find(c => day >= c.range[0] && day <= c.range[1]) ?? CONFIDENCE[3];
  document.getElementById('model-advice').innerHTML =
    `<span style="color:${c.color}">Day ${day} — </span>${c.text}`;
}

// ── Controls ──────────────────────────────────────────────────────────────────
function initControls() {
  document.getElementById('temp-bg-btn').addEventListener('click', () => {
    tempBgMode = !tempBgMode;
    document.getElementById('temp-bg-btn').classList.toggle('active', tempBgMode);
    chartInst.update('none');
  });

  document.querySelectorAll('.panel-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.panel-size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('chart-panel').style.width = btn.dataset.width + 'px';
      setTimeout(() => { map.invalidateSize(); redrawOverlay(); alignConfidenceBars(); }, 50);
    });
  });

  document.querySelectorAll('.model-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeModel = btn.dataset.model;
      redrawOverlay();
      if (selectedKey) updateChart(selectedKey);
      updateSelectedDotLabel();
    });
  });

  document.querySelectorAll('.unit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tempUnit = btn.dataset.unit;
      updateLegendLabels();
      redrawOverlay();
      if (selectedKey) updateChart(selectedKey);
    });
  });
}

// ── Init ──────────────────────────────────────────────────────────────────────
async function main() {
  initMap();
  initChart();
  initTimeline();
  initControls();

  await loadAll();

  document.getElementById('loading').style.display = 'none';

  redrawOverlay();
  updateTimeDisplay();
  updateConfidence();
  buildTimelineTicks();
  // Force canvas layer to reposition after the DOM has fully settled
  setTimeout(() => { map.fire('moveend'); }, 50);

  updateModelRunAge();

  // Init Lucide icons
  lucide.createIcons();

  // Default selection: Hartford, CT
  const hartford = NE_LOCATIONS.find(l => l.name.includes('Hartford, CT'));
  if (hartford) selectLocation(`${hartford.lat},${hartford.lon}`);
}

main().catch(err => {
  console.error(err);
  document.getElementById('loading-status').textContent = 'Error loading data. Check console.';
});
