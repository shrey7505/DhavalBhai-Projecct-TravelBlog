export interface Author {
  name: string;
  slug: string;
  avatar: string;
  bio: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  category: string;
  categorySlug: string;
  tags: string[];
  image: string;
  date: string;
  readTime: number;
  featured: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  color: string;
}

export interface Destination {
  name: string;
  country: string;
  description: string;
  image: string;
  slug: string;
  highlights: string[];
}

export const authors: Author[] = [
  {
    name: "Elena Marchetti",
    slug: "elena-marchetti",
    avatar: "https://picsum.photos/seed/author1/100/100",
    bio: "Elena is a veteran travel writer who has visited over 80 countries. She specializes in off-the-beaten-path adventures and sustainable travel.",
  },
  {
    name: "James Calloway",
    slug: "james-calloway",
    avatar: "https://picsum.photos/seed/author2/100/100",
    bio: "James is a family travel expert and father of three who has made it his mission to show that adventure doesn't stop when you have kids.",
  },
  {
    name: "Priya Nair",
    slug: "priya-nair",
    avatar: "https://picsum.photos/seed/author3/100/100",
    bio: "Priya is a budget travel guru who traveled through 30 countries on under $50/day. She believes travel should be accessible to everyone.",
  },
];

export const categories: Category[] = [
  {
    name: "Hiking",
    slug: "hiking",
    description: "Trail guides, gear reviews, and epic wilderness adventures for every level of hiker.",
    image: "https://picsum.photos/seed/hiking-cat/800/500",
    color: "#2d6a4f",
  },
  {
    name: "Family Travel",
    slug: "family-travel",
    description: "Kid-friendly destinations, tips for traveling with children, and memorable family adventures.",
    image: "https://picsum.photos/seed/family-cat/800/500",
    color: "#1e3a5f",
  },
  {
    name: "Budget Travel",
    slug: "budget-travel",
    description: "Stretch your dollar further with smart tips, hidden gems, and affordable itineraries worldwide.",
    image: "https://picsum.photos/seed/budget-cat/800/500",
    color: "#7b2d8b",
  },
  {
    name: "Destinations",
    slug: "destinations",
    description: "In-depth guides to the world's most fascinating cities, islands, and landscapes.",
    image: "https://picsum.photos/seed/dest-cat/800/500",
    color: "#c9952d",
  },
];

export const destinations: Destination[] = [
  {
    name: "Kyoto",
    country: "Japan",
    description: "Ancient temples, bamboo groves, and sublime cherry blossoms in Japan's cultural heartland.",
    image: "https://picsum.photos/seed/kyoto/600/400",
    slug: "kyoto-japan",
    highlights: ["Fushimi Inari Shrine", "Arashiyama Bamboo Grove", "Gion District"],
  },
  {
    name: "Patagonia",
    country: "Chile & Argentina",
    description: "Dramatic peaks, glaciers, and wild steppes at the bottom of the world.",
    image: "https://picsum.photos/seed/patagonia/600/400",
    slug: "patagonia",
    highlights: ["Torres del Paine", "Los Glaciares", "Carretera Austral"],
  },
  {
    name: "Dubrovnik",
    country: "Croatia",
    description: "The Pearl of the Adriatic: medieval walls, turquoise waters, and golden stone streets.",
    image: "https://picsum.photos/seed/dubrovnik/600/400",
    slug: "dubrovnik-croatia",
    highlights: ["Old City Walls", "Lokrum Island", "Cable Car Views"],
  },
  {
    name: "Marrakech",
    country: "Morocco",
    description: "A sensory feast of souks, riads, and ancient medinas in the heart of North Africa.",
    image: "https://picsum.photos/seed/marrakech/600/400",
    slug: "marrakech-morocco",
    highlights: ["Jemaa el-Fna Square", "Majorelle Garden", "Atlas Mountains Day Trip"],
  },
  {
    name: "New Zealand",
    country: "New Zealand",
    description: "Where mountains meet fjords and Hobbit holes — adventure at the edge of the world.",
    image: "https://picsum.photos/seed/newzealand/600/400",
    slug: "new-zealand",
    highlights: ["Milford Sound", "Tongariro Alpine Crossing", "Bay of Islands"],
  },
  {
    name: "Oaxaca",
    country: "Mexico",
    description: "Vibrant indigenous culture, world-class mezcal, and some of Mexico's finest cuisine.",
    image: "https://picsum.photos/seed/oaxaca/600/400",
    slug: "oaxaca-mexico",
    highlights: ["Monte Albán Ruins", "Hierve el Agua", "Mezcal Distillery Tours"],
  },
];

export const posts: Post[] = [
  // HIKING
  {
    id: "1",
    slug: "torres-del-paine-complete-guide",
    title: "Torres del Paine: The Complete Trekker's Guide to Patagonia's Crown Jewel",
    excerpt: "The W Trek and O Circuit through Torres del Paine are bucket-list worthy for a reason. Here's everything you need to know to plan the perfect Patagonian adventure.",
    content: `
<h2 id="introduction">Why Torres del Paine?</h2>
<p>Few places on Earth match the raw, untamed beauty of Torres del Paine National Park. Located in the remote Última Esperanza Province of Chilean Patagonia, this UNESCO Biosphere Reserve is home to soaring granite towers, electric-blue glaciers, and pampas grasslands roamed by guanacos and pumas. It is, without question, one of the finest trekking destinations on the planet.</p>
<p>Having completed both the W Trek and the full O Circuit in a single 12-day trip, I can tell you with confidence: it exceeds every expectation. But preparation is everything in Patagonia — the weather changes in minutes, gear shortfalls become emergencies, and reservations need to be made months in advance.</p>

<h2 id="choosing-your-route">Choosing Your Route</h2>
<p>The park offers two main multi-day trekking circuits:</p>
<ul>
  <li><strong>The W Trek (4–5 days):</strong> The most popular option. It traces the shape of the letter W across the park's most dramatic viewpoints — the base of the Torres, the French Valley, and Grey Glacier. Most trekkers go left to right (east to west).</li>
  <li><strong>The O Circuit (8–12 days):</strong> The full loop around the Paine Massif. It includes everything on the W plus the remote and spectacular "back side" of the circuit, which sees far fewer hikers and rewards with extraordinary isolation and scenery.</li>
</ul>
<p>If you have time, do the O Circuit. The back section is lonely in the best possible way — the views of the glacier-draped mountains from camp at Perros or Dickson are not to be missed.</p>

<h2 id="best-time-to-visit">Best Time to Visit</h2>
<p>The trekking season runs from October to April, which is the Southern Hemisphere spring and summer. Peak season is December through February, when the days are longest, the weather (relatively) most stable, and the trails most crowded.</p>
<blockquote>
  "Patagonia has four seasons in one day. There is no 'good' weather window — only good gear."
</blockquote>
<p>My recommendation: visit in November or March. You'll find shorter queues for refugios, lower prices, and the shoulder-season light in Patagonia is extraordinary — golden hours that seem to last forever.</p>

<h2 id="accommodation">Accommodation on the Trail</h2>
<p>You have two main options: refugios (mountain huts) and camping. Most trekkers mix both. The refugios operated by Vertice Patagonia and Las Torres offer dormitory beds, hot meals, and showers — luxury after a hard day on the trail. Campsites are more affordable and let you bring your own food.</p>
<p><strong>Book everything before you travel.</strong> The best refugio spots sell out 6–8 months in advance for December and January. Seriously.</p>

<h2 id="gear-essentials">Gear Essentials</h2>
<p>Patagonia's weather demands respect. The wind alone — legendary, relentless — can knock you sideways on the exposed ridgelines. Here's the non-negotiable gear list:</p>
<ul>
  <li>A waterproof hardshell jacket and trousers</li>
  <li>Layering system: merino base, insulating mid-layer</li>
  <li>Trekking poles (essential for stability in the wind)</li>
  <li>Waterproof backpack cover or a dry bag liner</li>
  <li>Gaiters for muddy sections</li>
  <li>Quick-dry hiking trousers</li>
  <li>Warm hat and wind-resistant gloves</li>
</ul>
<div class="tip-box">
  <strong>Pro Tip:</strong> Bring trekking poles regardless of your fitness level. The Patagonian wind makes them essential for balance on exposed sections, not just joint support on descents.
</div>

<h2 id="getting-there">Getting There</h2>
<p>The nearest city is Puerto Natales, a charming frontier town 3 hours from the park. Fly into Punta Arenas (2.5 hours from Santiago) or Puerto Montt, then take a long-distance bus to Puerto Natales. From Puerto Natales, shuttles run to the park entrance and various trailheads multiple times per day during the season.</p>
<p>Allow a day in Puerto Natales before you start to organize gear, stock up on food, and adjust to the timezone. The town has excellent outdoor gear rental shops if you're traveling light.</p>

<h2 id="budget">Budget Planning</h2>
<p>Torres del Paine is not cheap. Budget approximately:</p>
<ul>
  <li>Park entrance fee: ~$35 USD (peak), ~$21 USD (shoulder)</li>
  <li>Refugio bed: $60–$120 USD per night with breakfast/dinner</li>
  <li>Camping fees: $10–$25 USD per night</li>
  <li>Bus from Puerto Natales to park: ~$15 USD each way</li>
</ul>
<p>A 7-day W Trek with refugios will cost $600–$1,000 USD in accommodation alone. Budget accordingly — but also know that every penny is worth it.</p>
    `,
    author: authors[0],
    category: "Hiking",
    categorySlug: "hiking",
    tags: ["Patagonia", "Chile", "Trekking", "South America", "Backpacking"],
    image: "https://picsum.photos/seed/torres/1200/700",
    date: "2025-11-14",
    readTime: 12,
    featured: true,
  },
  {
    id: "2",
    slug: "dolomites-via-ferrata-beginners",
    title: "Via Ferrata in the Dolomites: A Beginner's Guide to Italy's Iron Roads",
    excerpt: "Italy's via ferrata routes offer unforgettable high-altitude adventure without requiring technical climbing skills. Here's how to get started safely.",
    content: `
<h2 id="what-is-via-ferrata">What is Via Ferrata?</h2>
<p>Via ferrata — Italian for "iron road" — is a form of mountain hiking where fixed iron rungs, cables, and stemples are bolted into cliff faces, allowing hikers to safely navigate terrain that would otherwise require full rock-climbing expertise. The tradition dates back to WWI, when military engineers constructed these routes to move troops and supplies through the Dolomites.</p>
<p>Today, the Dolomites of northeastern Italy have one of the world's greatest concentrations of via ferrata routes, ranging from simple exposed ridge walks to serious vertical ascents. For anyone with reasonable fitness and a head for heights, they offer an incomparable alpine experience.</p>

<h2 id="essential-gear">Essential Gear</h2>
<p>You cannot attempt a via ferrata without a proper via ferrata kit. This is non-negotiable. The required gear:</p>
<ul>
  <li><strong>Via ferrata harness:</strong> A sit harness (regular climbing harness works fine)</li>
  <li><strong>Via ferrata lanyard/set:</strong> A Y-shaped energy-absorbing lanyard with two carabiners. This is what connects you to the fixed cables.</li>
  <li><strong>Helmet:</strong> Falling rocks are a real hazard</li>
  <li><strong>Gloves:</strong> The iron cables destroy bare hands over a long route</li>
  <li><strong>Proper hiking boots:</strong> Stiff-soled, ankle-supporting mountain boots</li>
</ul>

<h2 id="best-beginner-routes">Best Beginner Routes</h2>
<p>The Dolomites offer hundreds of routes graded from 1 (easiest) to 6 (expert). For beginners, grades 2–3 are ideal. Some excellent starting points:</p>
<ul>
  <li><strong>Via Ferrata Sass Rigais (Grade 2–3):</strong> Near Ortisei in the Val Gardena. Magnificent summit views over the Odle group.</li>
  <li><strong>Tridentina (Grade 2):</strong> In the Tre Cime di Lavaredo area — one of the most iconic landscapes in the Alps.</li>
  <li><strong>Via Ferrata Innerkofler (Grade 3):</strong> A WWI historical route with stunning exposure and remarkable fixed rope sections.</li>
</ul>

<h2 id="when-to-go">When to Go</h2>
<p>Via ferrata season in the Dolomites runs from late June to late September. July and August are peak season — routes are crowded and afternoon thunderstorms are common. Visit in late June or September for quieter conditions and the possibility of lingering snow on high routes (which adds both beauty and challenge).</p>
<blockquote>"Always start early. Afternoon storms in the Dolomites form fast and catch hikers exposed on ridgelines."</blockquote>

<h2 id="guided-vs-independent">Guided vs. Independent</h2>
<p>For absolute beginners, booking a half-day or full-day guide through a local mountain guide association is worth every cent. A certified mountain guide will teach you proper clipping technique, route management, and crucially, how to read the weather and know when to turn back.</p>
    `,
    author: authors[0],
    category: "Hiking",
    categorySlug: "hiking",
    tags: ["Dolomites", "Italy", "Via Ferrata", "Climbing", "Alps"],
    image: "https://picsum.photos/seed/dolomites/1200/700",
    date: "2025-10-08",
    readTime: 9,
    featured: false,
  },
  {
    id: "3",
    slug: "appalachian-trail-section-hiking",
    title: "Section Hiking the Appalachian Trail: How to Tackle America's Greatest Trail One Piece at a Time",
    excerpt: "You don't have to quit your job to hike the AT. Section hiking lets you experience America's most iconic long trail in manageable, deeply rewarding chunks.",
    content: `
<h2 id="the-appeal-of-section-hiking">The Appeal of Section Hiking</h2>
<p>The Appalachian Trail stretches 2,190 miles from Springer Mountain in Georgia to Mount Katahdin in Maine. Thru-hiking it — completing the entire trail in a single continuous journey — takes 5 to 7 months and demands extraordinary commitment. But section hiking offers a gentler path to the same destination.</p>
<p>Over a decade of weekend trips and vacation weeks, thousands of hikers have completed the entire trail one manageable section at a time. Some are "flip-floppers" who hop around by season; others work steadily from one end toward the other. The trail doesn't care how long it takes you.</p>

<h2 id="planning-your-sections">Planning Your Sections</h2>
<p>The AT passes through 14 states, offering huge variety in terrain and character. Some popular section choices for first-timers:</p>
<ul>
  <li><strong>Great Smoky Mountains, NC/TN (69 miles):</strong> One of the most beloved sections. Dense forest, historic shelters, abundant wildlife.</li>
  <li><strong>Shenandoah National Park, VA (101 miles):</strong> Relatively gentle terrain, stunning Blue Ridge views, easy road crossings for resupply.</li>
  <li><strong>White Mountains, NH (146 miles):</strong> The most challenging section — and arguably the most spectacular.</li>
  <li><strong>100-Mile Wilderness, ME:</strong> The most remote and demanding section, saved for last by many.</li>
</ul>

<h2 id="logistics">Logistics Made Simple</h2>
<p>Section hiking requires more shuttle logistics than a straightforward thru-hike. You'll need to arrange either a car shuttle (two vehicles: one at each end) or use shuttle services that operate near the trail. Many trail towns have hostel operators who offer shuttles.</p>
<p>The AT is exceptionally well-documented. The Appalachian Trail Conservancy's official guidebooks and apps cover every detail, from water sources to resupply points to recommended hostels in each trail town.</p>

<h2 id="gear-considerations">Gear for Section Hiking</h2>
<p>Unlike thru-hikers who must optimize every ounce for a 6-month journey, section hikers have flexibility. You can afford slightly heavier gear if it means extra comfort for a 5-day trip. That said, a lighter pack is always a happier pack on steep AT climbs.</p>
<div class="tip-box">
  <strong>Pro Tip:</strong> Invest in good rain gear. The AT is one of the wettest long trails in the world — average annual precipitation along the trail exceeds 60 inches in many sections. A quality hardshell jacket is worth every dollar.
</div>
    `,
    author: authors[0],
    category: "Hiking",
    categorySlug: "hiking",
    tags: ["Appalachian Trail", "USA", "Hiking", "Long Trails", "Backpacking"],
    image: "https://picsum.photos/seed/appalachian/1200/700",
    date: "2025-09-22",
    readTime: 10,
    featured: false,
  },

  // FAMILY TRAVEL
  {
    id: "4",
    slug: "japan-with-kids-ultimate-guide",
    title: "Japan with Kids: The Ultimate Family Travel Guide",
    excerpt: "Japan is one of the world's most family-friendly destinations — if you know how to approach it. Here's everything you need for an unforgettable trip with children.",
    content: `
<h2 id="why-japan">Why Japan is Perfect for Families</h2>
<p>Japan regularly tops lists of the world's safest, cleanest, and most punctual countries — three qualities that make family travel dramatically easier. Add in a culture that genuinely adores children, an incredible food scene with wide-ranging options, and the sheer variety of experiences available, and you have one of the finest family travel destinations on the planet.</p>
<p>Having traveled Japan twice with my three children (then aged 4, 7, and 10), I can attest that the logistical anxieties many parents feel before the trip evaporate almost immediately on arrival. Japan makes it easy.</p>

<h2 id="best-cities-for-families">Best Cities for Families</h2>
<p>Japan's major cities each offer distinct experiences that work beautifully for families:</p>
<ul>
  <li><strong>Tokyo:</strong> An overwhelming abundance of child-centric attractions — from teamLab's digital art worlds to Odaiba's interactive science museum to Ueno Zoo and Akihabara's electronics wonderland. Divide the city into neighborhoods and tackle one per day.</li>
  <li><strong>Kyoto:</strong> Cultural immersion at a more manageable pace. Rent kimonos, explore temple gardens, watch a geisha district at dusk, and take a day trip to Nara to feed the deer.</li>
  <li><strong>Hiroshima and Miyajima:</strong> Powerful history at the Peace Memorial Museum (appropriate for children 8+) and iconic scenery at the floating torii gate on Miyajima island.</li>
  <li><strong>Hakone:</strong> Mt. Fuji views, an open-air sculpture museum, hot spring ryokan stays — one of the most memorable overnight experiences possible for families.</li>
</ul>

<h2 id="transportation">Navigating Transportation</h2>
<p>Japan's transport system is a miracle of efficiency. The Shinkansen bullet trains are fast, smooth, and — crucially for parents — have spacious luggage areas and food carts. Buy a Japan Rail Pass before you leave home if you're visiting multiple cities; the savings are substantial.</p>
<p>Within cities, the subway systems are complex but extremely well-signed in English. Download the Google Maps app and Japan's Transit app — they will handle all your route planning.</p>
<blockquote>"Our kids still talk about their first Shinkansen ride. At 300 km/h, even grown-ups feel like children."</blockquote>

<h2 id="food-with-kids">Food: Tackling the Menu</h2>
<p>Japanese food is varied enough that even picky eaters find something they love. Ramen, sushi (start with basic maki rolls), yakitori, tempura, and Japanese curry are universally adored by children. Convenience stores (konbini) — 7-Eleven, Lawson, FamilyMart — are genuinely excellent and stock affordable, freshly prepared sandwiches, onigiri, and pastries that make perfect snacks.</p>

<h2 id="packing-list">Family Packing List</h2>
<ul>
  <li>IC card for public transit (load it at any station; one per person)</li>
  <li>Portable WiFi router or SIM card (essential)</li>
  <li>Collapsible stroller for toddlers (elevators are available everywhere)</li>
  <li>Slip-on shoes for everyone (you'll be removing shoes constantly at temples and traditional restaurants)</li>
  <li>Small backpack for each child (independence makes the trip smoother)</li>
</ul>
    `,
    author: authors[1],
    category: "Family Travel",
    categorySlug: "family-travel",
    tags: ["Japan", "Kids", "Family", "Asia", "Tokyo", "Kyoto"],
    image: "https://picsum.photos/seed/japan-family/1200/700",
    date: "2025-12-01",
    readTime: 14,
    featured: true,
  },
  {
    id: "5",
    slug: "road-trip-national-parks-family",
    title: "The Great American Road Trip: National Parks Edition for Families",
    excerpt: "A loop through America's Southwest national parks is the ultimate family road trip — epic scenery, endless adventure, and no jet lag required.",
    content: `
<h2 id="the-route">The Route: America's Southwest Loop</h2>
<p>Start in Las Vegas (great flight prices), drive to Zion, then Bryce Canyon, across to Capitol Reef, down to Canyonlands and Arches, up to Mesa Verde, and back through Monument Valley and the Grand Canyon. The full loop is approximately 1,500 miles and best done over 14–18 days. Every single day offers something extraordinary.</p>
<p>The America the Beautiful Annual Pass ($80) covers entrance to all national parks for a full year — one of the great travel bargains in existence. Buy it online before you go.</p>

<h2 id="zion-national-park">Zion: The Family Favorite</h2>
<p>Zion consistently tops family rankings for good reason. The park's free shuttle system means no driving stress; the Riverwalk trail along the Virgin River is accessible to children as young as 3; and the Angels Landing hike (for older children and parents) offers one of the most dramatic summit experiences in the American Southwest.</p>
<p>The town of Springdale, right at the park entrance, has excellent restaurants and accommodations. Book a room at one of the canyon-view hotels for the full experience.</p>

<h2 id="bryce-canyon">Bryce Canyon: Alien Landscape</h2>
<p>Children are consistently mesmerized by Bryce Canyon's hoodoos — the otherworldly orange and red rock spires that fill the amphitheater. The rim trail offers spectacular views with minimal effort; the Navajo Loop Trail descends into the canyon itself for a more immersive experience. The park sits above 8,000 feet — bring layers even in summer.</p>
<div class="tip-box">
  <strong>Junior Ranger Programs:</strong> Every national park has a Junior Ranger program where children complete activity booklets and are sworn in as Junior Rangers by a park ranger. Kids love it, and it deepens engagement with each park's unique story. Pick up the booklets at the visitor center on your first day.
</div>
    `,
    author: authors[1],
    category: "Family Travel",
    categorySlug: "family-travel",
    tags: ["USA", "National Parks", "Road Trip", "Kids", "Southwest"],
    image: "https://picsum.photos/seed/roadtrip/1200/700",
    date: "2025-08-15",
    readTime: 11,
    featured: false,
  },
  {
    id: "6",
    slug: "costa-rica-family-adventures",
    title: "Costa Rica with Kids: Ziplining, Wildlife, and Pura Vida Life",
    excerpt: "Costa Rica's biodiversity, adventure activities, and welcoming culture make it one of the best family destinations in the Americas.",
    content: `
<h2 id="why-costa-rica">Why Costa Rica for Families?</h2>
<p>Costa Rica punches far above its weight as a travel destination. Packed into a country smaller than West Virginia are two coastlines, active volcanoes, cloud forests, coral reefs, sea turtle nesting beaches, and one of the world's highest concentrations of plant and animal species. For families, this biodiversity translates into one extraordinary wildlife encounter after another.</p>
<p>The country is also exceptionally well set up for tourism, with good infrastructure, widespread English in tourist areas, and a culture — captured in the national saying "pura vida" (pure life) — that is genuinely warm toward visitors and especially children.</p>

<h2 id="top-regions">Top Regions for Families</h2>
<ul>
  <li><strong>Arenal Volcano:</strong> Zip-lining, hanging bridges through the rainforest canopy, hot springs heated by the volcano, white-water rafting on the Balsa River. Action central.</li>
  <li><strong>Monteverde Cloud Forest:</strong> One of the world's great ecological experiences. Night walks reveal insects, frogs, and small mammals that hide during daylight.</li>
  <li><strong>Manuel Antonio:</strong> A national park where three-toed sloths nap in beachside trees and monkeys steal snacks from inattentive tourists. Combine jungle and beach in one spot.</li>
  <li><strong>Tortuguero:</strong> Boat through canals to spot caimans and river turtles, and from July to October, watch sea turtles nest on the Caribbean beach at night.</li>
</ul>
    `,
    author: authors[1],
    category: "Family Travel",
    categorySlug: "family-travel",
    tags: ["Costa Rica", "Wildlife", "Kids", "Central America", "Adventure"],
    image: "https://picsum.photos/seed/costarica/1200/700",
    date: "2025-07-20",
    readTime: 9,
    featured: false,
  },

  // BUDGET TRAVEL
  {
    id: "7",
    slug: "southeast-asia-budget-guide",
    title: "Southeast Asia on $40 a Day: The Definitive Budget Travel Guide",
    excerpt: "From Bangkok to Bali, Southeast Asia remains the world's greatest budget travel destination. Here's how to see it all without breaking the bank.",
    content: `
<h2 id="the-golden-rule">The Golden Rule of Southeast Asia Budget Travel</h2>
<p>The single most important principle for budget travel in Southeast Asia: <strong>eat where locals eat</strong>. Street food stalls, market vendors, and family-run local restaurants serve food that is simultaneously cheaper (often $1–3 per dish), fresher, and more delicious than any tourist-oriented restaurant. This rule alone will cut your food budget by 60% and dramatically improve your culinary experience.</p>
<p>A $40/day budget is very achievable across most of Southeast Asia. In some countries (Cambodia, Vietnam, Laos), it's positively luxurious.</p>

<h2 id="accommodation">Accommodation: Beyond the Dorm Room</h2>
<p>The hostel dorm is the classic budget accommodation — and it remains a great option, with beds often available for $5–12 in most cities. But Southeast Asia has evolved: guesthouses and budget hotels now offer private rooms for $15–30 in most cities, and these are often excellent value.</p>
<p>Tools I use: Hostelworld for hostels, Booking.com for guesthouses and budget hotels, and Airbnb for longer stays in apartments. Always filter by "free cancellation" and read recent reviews carefully — quality varies enormously.</p>

<h2 id="transport-tips">Transport: Moving Between Countries</h2>
<p>Budget airlines have transformed Southeast Asian travel. AirAsia, Vietjet, Lion Air, and Cebu Pacific connect major cities for as little as $20–50, often cheaper than ground transport once your time is factored in. Use Google Flights or Skyscanner to find the best deals, and book at least 3 weeks ahead for popular routes.</p>
<p>For ground transport, overnight buses and trains kill two birds with one stone — you sleep and travel simultaneously, saving both accommodation costs and travel time. Night trains in Vietnam and Thailand are particularly comfortable and scenic.</p>
<blockquote>"The best budget travel hack in Southeast Asia: book overnight transport whenever possible. You arrive rested (approximately), having saved a night's accommodation."</blockquote>

<h2 id="countries-ranked">Countries Ranked by Budget-Friendliness</h2>
<ul>
  <li><strong>Cambodia:</strong> The most affordable. Accommodation from $6, street food from $1.</li>
  <li><strong>Vietnam:</strong> Incredible value, especially outside Hanoi and Ho Chi Minh City.</li>
  <li><strong>Laos:</strong> Underrated, peaceful, and very affordable — particularly for activities.</li>
  <li><strong>Myanmar (if safe):</strong> Limited tourism infrastructure but extraordinary value.</li>
  <li><strong>Thailand:</strong> Slightly more expensive than neighbors but still very affordable by Western standards.</li>
  <li><strong>Indonesia:</strong> Highly variable — Bali's tourist areas rival Western prices; off-the-beaten-path is cheap.</li>
  <li><strong>Philippines:</strong> Affordable on land; inter-island flights add up if visiting multiple islands.</li>
  <li><strong>Malaysia/Singapore:</strong> Most expensive in the region, though Singapore's hawker centers are legendary value.</li>
</ul>
    `,
    author: authors[2],
    category: "Budget Travel",
    categorySlug: "budget-travel",
    tags: ["Southeast Asia", "Budget", "Backpacking", "Thailand", "Vietnam"],
    image: "https://picsum.photos/seed/seasia/1200/700",
    date: "2025-11-03",
    readTime: 13,
    featured: true,
  },
  {
    id: "8",
    slug: "europe-budget-rail-pass",
    title: "Seeing Europe by Rail on a Budget: Interrail vs. Eurail and How to Save on Every Ticket",
    excerpt: "Rail travel is the heart of a European adventure. Here's how to navigate the complex world of rail passes and point-to-point tickets to maximize your budget.",
    content: `
<h2 id="pass-vs-point-to-point">Rail Pass vs. Point-to-Point Tickets</h2>
<p>The eternal debate: is an Interrail or Eurail pass worth it, or should you book individual tickets as you go? The answer: it depends entirely on your itinerary.</p>
<p>Passes make economic sense if you're traveling fast, crossing multiple countries, and don't want to plan ahead. Point-to-point tickets are cheaper if you book at least 2–3 weeks in advance and have a fixed itinerary. In my experience, the sweet spot is a pass for unlimited travel within one country (the single-country versions offer much better value) combined with advance-booked tickets for longer international journeys.</p>

<h2 id="advance-booking">The Art of Advance Booking</h2>
<p>European rail operates a yield management system similar to airlines. Tickets released 90–120 days before departure are significantly cheaper than those bought a week out. On routes like London–Paris (Eurostar), Paris–Barcelona (TGV), and Amsterdam–Berlin, advance prices can be 70% cheaper than walk-up fares.</p>
<ul>
  <li>Book French trains at sncf-connect.com</li>
  <li>Book Spanish trains at renfe.com</li>
  <li>Book German trains at bahn.de</li>
  <li>For pan-European booking: trainline.com or raileurope.com</li>
</ul>

<h2 id="budget-hubs">Europe's Best Budget Rail Hubs</h2>
<p>Some cities are extraordinarily well-connected by budget rail routes, making them excellent base points for exploration:</p>
<ul>
  <li><strong>Vienna:</strong> Connects cheaply to Budapest, Prague, Bratislava, and Salzburg. Central European hub par excellence.</li>
  <li><strong>Milan:</strong> Gateway to the Alps, Riviera, and the broader Italian network. Cheap trains to Turin, Bologna, Florence.</li>
  <li><strong>Brussels:</strong> Eurostar to London, Thalys to Paris and Amsterdam — and Belgium itself is compact and thoroughly rail-connected.</li>
</ul>
    `,
    author: authors[2],
    category: "Budget Travel",
    categorySlug: "budget-travel",
    tags: ["Europe", "Rail Travel", "Budget", "Backpacking", "Interrail"],
    image: "https://picsum.photos/seed/eurail/1200/700",
    date: "2025-09-10",
    readTime: 11,
    featured: false,
  },
  {
    id: "9",
    slug: "free-walking-tours-worth-it",
    title: "Are Free Walking Tours Worth It? An Honest Assessment After 50+ Tours Worldwide",
    excerpt: "Free walking tours promise city exploration with no upfront cost. But are they genuinely free? And do they offer real value compared to paid alternatives?",
    content: `
<h2 id="how-they-work">How Free Walking Tours Work</h2>
<p>The model is simple: you join a 2–3 hour walking tour with a guide, pay nothing upfront, and tip at the end based on what you thought it was worth. The guide's entire income comes from those tips, which creates a strong incentive to deliver an excellent, engaging tour.</p>
<p>This model — pioneered by Sandemans New Europe in the early 2000s — has spread worldwide. You can now find free walking tours in virtually every major tourist city on earth.</p>

<h2 id="the-verdict">My Verdict: Yes, With Caveats</h2>
<p>After joining more than 50 free walking tours across five continents, my honest assessment is: <strong>free walking tours are consistently among the best travel investments you can make</strong>, particularly when you first arrive in a new city.</p>
<p>A 2-hour walk with a knowledgeable local guide will orient you geographically, give you historical context, help you identify neighborhoods to return to, and — if you choose a good guide — entertain you thoroughly. This orientation is invaluable for efficient city exploration.</p>
<blockquote>"The best free walking tour I ever took was in Sarajevo. Our guide, a local who lived through the siege, turned a history lesson into something I'll remember for the rest of my life."</blockquote>

<h2 id="tipping-guide">The Tipping Question</h2>
<p>Guides on free tours are service professionals working for tips. They deserve fair compensation. My rule of thumb: if the tour was good, tip what you would pay for a standard museum entrance fee in that city — roughly $10–15 USD equivalent. If the tour was exceptional, tip more. If you genuinely couldn't afford more, $3–5 is better than nothing.</p>
<p>The idea that these tours are "free" is somewhat misleading — they're tip-based. Think of them as paid tours with flexible pricing, where you determine the price based on value delivered.</p>
    `,
    author: authors[2],
    category: "Budget Travel",
    categorySlug: "budget-travel",
    tags: ["Walking Tours", "Budget", "Tips", "Worldwide", "City Guides"],
    image: "https://picsum.photos/seed/walkingtour/1200/700",
    date: "2025-08-28",
    readTime: 8,
    featured: false,
  },

  // DESTINATIONS
  {
    id: "10",
    slug: "kyoto-complete-guide",
    title: "Kyoto: The Complete Guide to Japan's Ancient Imperial Capital",
    excerpt: "Beyond the crowds and the postcards lies a Kyoto of extraordinary depth — a city where 1,600 temples, time-worn neighborhoods, and living cultural traditions await the curious traveler.",
    content: `
<h2 id="when-to-visit">When to Visit Kyoto</h2>
<p>Kyoto's seasons are dramatically different and each has its devotees. The famous cherry blossom season (late March to early April) and autumn foliage (mid-November) are the most beautiful — and the most crowded. Lines at popular temples stretch hours long, accommodation prices triple, and the city's narrow streets become rivers of tourists.</p>
<p>My recommendation: visit in late June (rainy season — fewer crowds, lush green gardens) or late November after the peak foliage has passed. The light at these times is exceptional and you can actually enjoy the temples without fighting for elbow room.</p>

<h2 id="essential-neighborhoods">Essential Neighborhoods</h2>
<ul>
  <li><strong>Gion:</strong> Kyoto's famous geisha district. Walk Hanamikoji Street at dusk for the best chance of glimpsing a geiko or maiko on her way to an appointment. The wooden machiya townhouses lining the stone-paved lanes are extraordinary.</li>
  <li><strong>Higashiyama:</strong> The preserved historic district climbing the hillside east of Gion. The shopping street leading to Kiyomizudera Temple is touristic but beautiful; duck into the side alleys to find quieter moments.</li>
  <li><strong>Arashiyama:</strong> Western Kyoto's famous bamboo grove, Tenryuji temple garden (a UNESCO World Heritage Site), and the Oi River where cormorant fishing still takes place at night in summer.</li>
  <li><strong>Fushimi:</strong> South of central Kyoto, home to Fushimi Inari — the network of thousands of vermilion torii gates that have become one of Japan's most recognized images. Go early (before 8am) to find it peaceful.</li>
</ul>

<h2 id="temple-strategy">Temple Strategy: Quality Over Quantity</h2>
<p>Kyoto has over 1,600 temples and shrines. Trying to tick them all off is a fool's errand — after the fifth temple, most visitors experience what's colloquially known as "temple fatigue." Instead, choose 4–5 that genuinely interest you and spend real time at each.</p>
<p>The unmissable: Kinkakuji (Golden Pavilion), Fushimi Inari, Ryoanji (the famous rock garden), Ginkakuji (Silver Pavilion), and Nijo Castle. Beyond those, let your interests guide you — Kyoto has temples devoted to everything from poetry to tea ceremony to the warrior class.</p>
<blockquote>"Kyoto reveals itself slowly, to those who walk its streets without a timetable."</blockquote>

<h2 id="day-trips">Day Trips from Kyoto</h2>
<ul>
  <li><strong>Nara (45 min):</strong> Ancient capital, giant bronze Buddha, and freely roaming deer that bow for crackers. Half-day trip.</li>
  <li><strong>Osaka (15 min by Shinkansen):</strong> Food city of Japan — street food in Dotonbori, markets, Osaka Castle.</li>
  <li><strong>Hiroshima and Miyajima (1.5 hrs):</strong> One of the most moving day trips available from any city in the world.</li>
</ul>
    `,
    author: authors[0],
    category: "Destinations",
    categorySlug: "destinations",
    tags: ["Kyoto", "Japan", "Culture", "Asia", "Temples"],
    image: "https://picsum.photos/seed/kyoto-dest/1200/700",
    date: "2025-12-10",
    readTime: 15,
    featured: true,
  },
  {
    id: "11",
    slug: "marrakech-travelers-guide",
    title: "Marrakech Unfiltered: A Traveler's Guide to Morocco's Most Vibrant City",
    excerpt: "Marrakech overwhelms the senses on first contact — and that is entirely the point. A guide to navigating the medina, surviving the souks, and finding the city's quieter soul.",
    content: `
<h2 id="arriving-in-marrakech">Arriving in Marrakech</h2>
<p>Nothing prepares you for Marrakech. The moment you step through the gates of the medina, the sensory overload begins: the smell of spices, the call to prayer bouncing off clay walls, motorbikes threading impossibly tight alleys, vendors calling out in four languages simultaneously. It is intense, alive, and completely unlike anywhere else on earth.</p>
<p>Give yourself a day to acclimate. Sit at a café on Jemaa el-Fna square with a mint tea and simply watch. The square — a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity — transforms through the day from market to food stalls to open-air theater as evening falls.</p>

<h2 id="navigating-the-souks">Navigating the Souks</h2>
<p>The medina's souks are organized by trade — leatherworkers here, metalworkers there, spice merchants in another quarter. Getting genuinely lost in them is not a misfortune but a rite of passage. The key guidance:</p>
<ul>
  <li>Bargaining is expected and considered a social art. Opening prices are typically 3–4x what sellers will accept. Start at 30% of the asking price and work toward a mutual middle ground.</li>
  <li>Saying "no thank you" firmly and continuing to walk is always acceptable.</li>
  <li>The most persistent "guides" who appear unsolicited near major sites are typically hustlers angling for a commission. Politely decline and trust your map.</li>
  <li>Download the maps.me app with offline Marrakech maps — it works accurately even in the medina's maze.</li>
</ul>

<h2 id="riads">Staying in a Riad</h2>
<p>A riad — a traditional Moroccan house built around a central courtyard — is the definitive Marrakech accommodation experience. From the outside, riads are invisible, hidden behind plain medina walls. Step through the door and everything changes: a tranquil courtyard with a fountain, mosaic tilework, orange trees, and rooftop terraces overlooking the medina.</p>
<p>Small, family-run riads offer the most authentic experience and often the best value. Budget $60–120/night for a well-reviewed mid-range riad; the splurge options are among the most beautiful small hotels in the world.</p>
    `,
    author: authors[0],
    category: "Destinations",
    categorySlug: "destinations",
    tags: ["Marrakech", "Morocco", "Africa", "Medina", "Culture"],
    image: "https://picsum.photos/seed/marrakech-dest/1200/700",
    date: "2025-10-25",
    readTime: 12,
    featured: false,
  },
  {
    id: "12",
    slug: "new-zealand-north-south-island",
    title: "North vs South: Choosing the Right New Zealand Adventure for You",
    excerpt: "New Zealand's two islands offer radically different landscapes and experiences. Here's how to decide which fits your travel style — or how to see both in three weeks.",
    content: `
<h2 id="north-island">The North Island: Culture, Volcanoes, and Beaches</h2>
<p>The North Island is New Zealand's more populated, culturally rich half. Auckland — your likely entry point — is a cosmopolitan harbour city worth a day or two. But the North Island's greatest draws lie further afield:</p>
<ul>
  <li><strong>Rotorua:</strong> The geothermal heart of the island, where the ground steams, boils, and occasionally erupts. Also the cultural center of Māori New Zealand, with exceptional cultural performances and hangi meals.</li>
  <li><strong>Tongariro Alpine Crossing:</strong> A 19.4km day hike across an active volcanic plateau — the Emerald Lakes, Red Crater, and views of Mt. Ngauruhoe (Tolkien fans know it as Mount Doom) make this one of the world's great day walks.</li>
  <li><strong>Coromandel Peninsula:</strong> Cathedral Cove, Hot Water Beach (dig your own hot tub in the sand), and some of New Zealand's finest coastal scenery within 2 hours of Auckland.</li>
  <li><strong>Hawke's Bay:</strong> New Zealand's premiere wine and food region. Art Deco architecture in Napier, world-class Chardonnay, fresh seafood.</li>
</ul>

<h2 id="south-island">The South Island: Fjords, Alps, and Adventure</h2>
<p>The South Island is where New Zealand's scenery becomes almost absurdly dramatic. The Southern Alps run the length of the island, framing fjords, glaciers, and wilderness that inspired Tolkien's Middle-earth vision.</p>
<ul>
  <li><strong>Milford Sound:</strong> The world's finest fjord — steep waterfalls plunging from peaks into glassy dark water. Cruise it, kayak it, fly over it. All three if possible.</li>
  <li><strong>Queenstown:</strong> The self-styled adventure capital of the world. Bungy jumping (invented here), skydiving, jet boating, white-water rafting — and some excellent restaurants and wine bars for recovery.</li>
  <li><strong>Mount Cook/Aoraki:</strong> New Zealand's highest peak, surrounded by glaciers. The Hooker Valley Track to the Hooker Glacier terminal lake and its floating icebergs is the island's finest easy hike.</li>
  <li><strong>Abel Tasman National Park:</strong> Golden-sand beaches, turquoise water, sea kayaking — New Zealand's most paradisiacal national park, and the most accessible.</li>
</ul>

<h2 id="three-week-itinerary">A Three-Week Both-Island Itinerary</h2>
<p>Days 1–3: Auckland — Days 4–5: Coromandel — Days 6–7: Rotorua — Days 8–9: Tongariro — Days 10–11: Wellington — Day 12: ferry to South Island (Marlborough Sounds route — spectacular) — Days 13–14: Abel Tasman — Days 15–16: Christchurch/Mt. Cook — Days 17–18: Queenstown — Days 19–21: Milford Sound and Te Anau — fly home from Queenstown.</p>
    `,
    author: authors[0],
    category: "Destinations",
    categorySlug: "destinations",
    tags: ["New Zealand", "Adventure", "Hiking", "South Pacific", "Oceania"],
    image: "https://picsum.photos/seed/newzealand-dest/1200/700",
    date: "2025-09-05",
    readTime: 13,
    featured: false,
  },
];

// Helper functions
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return posts.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedPosts(): Post[] {
  return posts.filter((p) => p.featured);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  return posts
    .filter((p) => p.id !== post.id && p.categorySlug === post.categorySlug)
    .slice(0, limit);
}

export function searchPosts(query: string): Post[] {
  if (!query.trim()) return posts;
  const q = query.toLowerCase();
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
