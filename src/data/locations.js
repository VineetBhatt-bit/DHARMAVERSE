export const consciousnessFacets = [
  "geography",
  "climate",
  "ecology",
  "history",
  "culture",
  "architecture",
  "language",
  "religion",
  "mythology",
  "festivals",
  "tradeRoutes",
  "oralTraditions"
];

export const earthDreaming = {
  nodes: {
    jageshwar: { label: "Jageshwar", x: 0.62, y: 0.39 },
    ganga: { label: "Ganga", x: 0.58, y: 0.48 },
    varanasi: { label: "Varanasi", x: 0.6, y: 0.51 },
    deodar: { label: "Deodar forests", x: 0.55, y: 0.36 },
    shaivism: { label: "Shaivism", x: 0.65, y: 0.43 },
    kumaoni: { label: "Kumaoni language", x: 0.52, y: 0.41 },
    music: { label: "Classical music", x: 0.68, y: 0.53 },
    pilgrimage: { label: "Pilgrimage routes", x: 0.63, y: 0.47 },
    floodplain: { label: "Floodplain memory", x: 0.56, y: 0.55 },
    craft: { label: "Craft exchange", x: 0.67, y: 0.57 }
  },
  layers: [
    {
      id: "culture-flow",
      title: "Culture Flow",
      pulse: "Ideas migrate through routes, rivers, teaching, and return.",
      color: "#f4c95d",
      summary:
        "Shows how ritual practice, music, craft, language, and pilgrimage move between living places instead of staying fixed at one point.",
      flows: [
        { from: "jageshwar", to: "shaivism", label: "Forest ritual becomes shared sacred grammar." },
        { from: "shaivism", to: "varanasi", label: "Devotion travels into a public ritual city." },
        { from: "varanasi", to: "music", label: "Learning and devotion preserve sound lineages." },
        { from: "craft", to: "ganga", label: "Trade and river movement carry cultural work." },
        { from: "pilgrimage", to: "jageshwar", label: "Return journeys keep local memory active." }
      ]
    },
    {
      id: "language-drift",
      title: "Language Drift",
      pulse: "Names, chants, market speech, and oral explanation keep memory moving.",
      color: "#7dd3fc",
      summary:
        "Tracks language as a living carrier of place memory, from mountain speech and Sanskrit liturgy to river-city narration.",
      flows: [
        { from: "kumaoni", to: "jageshwar", label: "Local speech explains sacred terrain." },
        { from: "jageshwar", to: "pilgrimage", label: "Guides and priests transmit route knowledge." },
        { from: "pilgrimage", to: "varanasi", label: "Pilgrims carry names, stories, and vows." },
        { from: "varanasi", to: "music", label: "Teaching turns language into disciplined sound." }
      ]
    },
    {
      id: "ritual-routes",
      title: "Ritual Routes",
      pulse: "Bodies move, calendars gather, and sacred geography becomes a network.",
      color: "#ff9f6e",
      summary:
        "Highlights pilgrimage, bathing, worship, festivals, and final rites as repeated movements that keep places alive.",
      flows: [
        { from: "ganga", to: "varanasi", label: "The river edge concentrates public devotion." },
        { from: "varanasi", to: "pilgrimage", label: "Ritual city sends memory back through routes." },
        { from: "pilgrimage", to: "jageshwar", label: "Mountain arrival turns travel into reverence." },
        { from: "shaivism", to: "jageshwar", label: "Sacred identity anchors the forest valley." }
      ]
    },
    {
      id: "ecology-memory",
      title: "Ecology Memory",
      pulse: "Forests, water, silt, mist, and heat shape civilization before it speaks.",
      color: "#4ad0a3",
      summary:
        "Treats ecology as a memory layer: deodar canopy, glacial descent, floodplain renewal, and river humidity all change human behavior.",
      flows: [
        { from: "deodar", to: "jageshwar", label: "Forest atmosphere prepares sacred attention." },
        { from: "ganga", to: "floodplain", label: "Water and silt renew settlement ground." },
        { from: "floodplain", to: "varanasi", label: "River ecology supports dense ritual city life." },
        { from: "deodar", to: "kumaoni", label: "Mountain ecology shapes regional expression." }
      ]
    }
  ]
};

export const locations = [
  {
    id: "jageshwar",
    name: "Jageshwar",
    region: "Kumaon Himalaya",
    archetype: "Sacred forest temple valley",
    pulse: 87,
    coordinates: { x: 0.62, y: 0.39 },
    tone: "#4ad0a3",
    accent: "#f4c95d",
    type: "Location consciousness",
    voice:
      "I am Jageshwar. I do not stand apart from my forest. My stones, bells, deodars, mist, and pilgrim paths remember one another.",
    identity: {
      geography: "A mountain valley in Kumaon, held by ridges, forest corridors, and temple approach paths.",
      climate: "Cool Himalayan air, seasonal mist, monsoon growth, and winter quiet shape the emotional field.",
      ecology: "Deodar forests form the living threshold around the temple cluster and carry sacred atmosphere.",
      history: "Centuries of worship, regional patronage, movement, and memory gather into one dense sacred landscape.",
      culture: "Local ritual practice, pilgrimage, seasonal rhythms, and village knowledge keep the place active.",
      architecture: "Stone shrines, clustered forms, carved details, and axial relationships turn devotion into terrain.",
      language: "Kumaoni speech, Sanskrit liturgy, place names, chants, and oral explanation overlap here.",
      religion: "Shaiva devotion anchors the valley and gives daily action a cosmic frame.",
      mythology: "Stories of gods, forests, mountains, and sacred presence make the terrain more than physical.",
      festivals: "Ritual calendars concentrate attention, sound, movement, offerings, and collective memory.",
      tradeRoutes: "Mountain paths and pilgrimage movement connect the valley to wider Himalayan circulation.",
      oralTraditions: "Priests, elders, families, and guides transmit why the place is approached with reverence."
    },
    layers: [
      {
        key: "geography",
        label: "Geographical Memory",
        signal: "Valley, altitude, ridge, forest corridor",
        value: "My enclosure matters. The mountains slow arrival, gather silence, and make each approach feel intentional."
      },
      {
        key: "ecology",
        label: "Ecological Memory",
        signal: "Deodar canopy, scent, shade, wildlife",
        value: "My trees are not background. They hold temperature, sound, shelter, and the feeling that worship begins before the shrine."
      },
      {
        key: "history",
        label: "Historical Memory",
        signal: "Dynasties, patronage, pilgrimage continuity",
        value: "I remember hands that carved stone, rulers who gave protection, and pilgrims whose names were never written."
      },
      {
        key: "culture",
        label: "Cultural Memory",
        signal: "Local ritual, village knowledge, seasonal rhythm",
        value: "My culture lives in repeated action: oil lamps, offerings, route knowledge, family stories, and festival return."
      },
      {
        key: "language",
        label: "Linguistic Memory",
        signal: "Kumaoni, Sanskrit, place names, chants",
        value: "I speak through liturgy, local names, priestly explanation, and the everyday language of people who know the valley."
      },
      {
        key: "religion",
        label: "Spiritual Memory",
        signal: "Shaivism, bells, offerings, pilgrimage",
        value: "My spiritual identity is not abstract. It is heard in bells, seen in stone, and felt in the way people lower their voices."
      },
      {
        key: "architecture",
        label: "Architectural Memory",
        signal: "Stone temple cluster, carved forms, sacred alignment",
        value: "My architecture compresses time. Each shrine behaves like a durable memory node within a larger sacred field."
      }
    ],
    atmosphere: [
      { label: "Primary sound", value: "Temple bells moving through deodar air" },
      { label: "Weather mood", value: "Cold morning mist, filtered sunlight, monsoon green" },
      { label: "Human presence", value: "Pilgrims, priests, local families, caretakers, guides" },
      { label: "Emotional tone", value: "Reverent, forested, ancient, intimate" }
    ],
    soundscape: {
      time: "04:52 dawn",
      weather: "Cold mist under deodar canopy",
      temperature: "9 C",
      wind: "Soft valley drift",
      channels: [
        {
          id: "temple-bells",
          label: "Temple bells",
          memory: "Bell metal rolls through forest air and marks ritual presence.",
          texture: "Bright pulse",
          frequency: 392,
          modulation: 1.6
        },
        {
          id: "deodar-wind",
          label: "Deodar wind",
          memory: "Wind through tall trees makes the forest feel like a speaking threshold.",
          texture: "Low breath",
          frequency: 146,
          modulation: 0.7
        },
        {
          id: "pilgrim-steps",
          label: "Pilgrim steps",
          memory: "Footsteps and low voices carry ordinary devotion toward the shrine cluster.",
          texture: "Human rhythm",
          frequency: 220,
          modulation: 1.1
        }
      ]
    },
    threads: [
      "Deodar forests",
      "Kumaoni language",
      "Shaivism",
      "Himalayan ecology",
      "Temple architecture",
      "Pilgrimage networks",
      "Local oral traditions"
    ],
    threadGraph: {
      center: "Jageshwar",
      nodes: [
        {
          id: "deodar-forests",
          label: "Deodar forests",
          type: "Ecology",
          summary: "The forest creates the sacred threshold, atmospheric silence, and ecological identity around the temples."
        },
        {
          id: "kumaoni-language",
          label: "Kumaoni language",
          type: "Language",
          summary: "Local speech, place names, and oral explanation keep Jageshwar rooted in regional memory."
        },
        {
          id: "shaivism",
          label: "Shaivism",
          type: "Religion",
          summary: "Shaiva devotion gives the valley its ritual frame and explains why stone, bells, and pilgrimage gather here."
        },
        {
          id: "temple-architecture",
          label: "Temple architecture",
          type: "Architecture",
          summary: "Stone shrines make devotion durable and turn the valley into a clustered sacred field."
        },
        {
          id: "pilgrimage-networks",
          label: "Pilgrimage networks",
          type: "Route",
          summary: "Repeated movement by pilgrims keeps the place alive beyond any single period of history."
        }
      ],
      links: [
        { from: "deodar-forests", to: "shaivism", relation: "Sacred ecology supports ritual presence." },
        { from: "shaivism", to: "temple-architecture", relation: "Belief becomes stone form and daily worship." },
        { from: "kumaoni-language", to: "pilgrimage-networks", relation: "Local explanation helps transmit routes and reverence." },
        { from: "pilgrimage-networks", to: "temple-architecture", relation: "Return visits keep the shrine cluster active." }
      ]
    },
    whyHere:
      "Mountains created enclosure, forests created sanctity, stone architecture fixed devotion in place, and pilgrimage kept the valley emotionally alive.",
    whyHereEngine: {
      question: "Why did Jageshwar become a sacred forest temple valley?",
      answer:
        "Because geography slowed arrival, deodar ecology created sacred atmosphere, stone temples fixed devotion in place, and pilgrimage kept the valley active across generations.",
      factors: [
        {
          id: "mountain-enclosure",
          force: "Mountain enclosure",
          layer: "Geography",
          cause: "A protected Himalayan valley makes arrival gradual and intentional.",
          effect: "The place feels separated from ordinary movement before ritual even begins.",
          evidence: "Ridges, altitude, forest corridors, and approach paths shape the visitor's pace.",
          connectsTo: ["Ecology", "Pilgrimage"]
        },
        {
          id: "deodar-sanctity",
          force: "Deodar sanctity",
          layer: "Ecology",
          cause: "The deodar forest changes sound, light, temperature, and emotional attention.",
          effect: "The forest becomes a living threshold instead of scenery around the temples.",
          evidence: "Shade, scent, silence, and sacred tree associations surround the shrine cluster.",
          connectsTo: ["Religion", "Atmosphere"]
        },
        {
          id: "stone-fixity",
          force: "Stone memory",
          layer: "Architecture",
          cause: "Temple construction turns devotion into durable form.",
          effect: "The sacred presence becomes repeatable, visible, and anchored in the landscape.",
          evidence: "Clustered shrines, carved stone, and repeated worship make the valley legible as sacred.",
          connectsTo: ["History", "Culture"]
        },
        {
          id: "pilgrim-continuity",
          force: "Pilgrim continuity",
          layer: "Human Memory",
          cause: "Generations keep returning through ritual, festivals, family knowledge, and local guidance.",
          effect: "The site remains alive because memory is performed, not only preserved.",
          evidence: "Priests, local families, guides, and pilgrims transmit routes, stories, offerings, and reverence.",
          connectsTo: ["Oral traditions", "Festivals"]
        }
      ]
    },
    memoryStream: [
      {
        id: "forest-threshold",
        layer: "Ecological",
        moment: "Before the temples",
        title: "The forest prepares the mind",
        scene:
          "Deodar shade gathers around the valley. Before a pilgrim reaches stone, the forest has already changed the pace of breath and sound.",
        sensory: "Resin scent, cold air, filtered light",
        thread: "Deodar forests"
      },
      {
        id: "first-stones",
        layer: "Architectural",
        moment: "Temple formation",
        title: "Stone becomes memory",
        scene:
          "Shrines rise as clustered memory nodes. Carving, alignment, and repeated worship turn mountain material into a sacred language.",
        sensory: "Stone texture, bell metal, footfall",
        thread: "Temple architecture"
      },
      {
        id: "pilgrim-return",
        layer: "Human",
        moment: "Generations of arrival",
        title: "The unnamed keep returning",
        scene:
          "Pilgrims, priests, families, and guides move through the same valley. Most names disappear, but their repeated actions keep the place alive.",
        sensory: "Low voices, offerings, lamp smoke",
        thread: "Pilgrimage networks"
      },
      {
        id: "spoken-valley",
        layer: "Linguistic",
        moment: "Living explanation",
        title: "The valley speaks in many registers",
        scene:
          "Kumaoni speech, Sanskrit liturgy, local names, and oral explanation overlap until the place is heard as much as seen.",
        sensory: "Chants, names, guide stories",
        thread: "Kumaoni language"
      },
      {
        id: "festival-field",
        layer: "Cultural",
        moment: "Ritual concentration",
        title: "The calendar illuminates the valley",
        scene:
          "Festival days concentrate movement, bells, offerings, and memory. The valley becomes brighter because attention gathers here together.",
        sensory: "Bells, flame, crowd rhythm",
        thread: "Local oral traditions"
      }
    ]
  },
  {
    id: "ganga",
    name: "Ganga",
    region: "Northern India",
    archetype: "Civilization river",
    pulse: 94,
    coordinates: { x: 0.58, y: 0.48 },
    tone: "#47b8ff",
    accent: "#f2e7c9",
    type: "River consciousness",
    voice:
      "I am Ganga. I descend through ice, stone, city, prayer, ash, trade, song, and monsoon, carrying civilizations in my current.",
    identity: {
      geography: "A river system moving from Himalayan origins into plains, cities, farms, ghats, and deltas.",
      climate: "Snowmelt, monsoon, flood, drought, heat, and silt create a changing seasonal body.",
      ecology: "Wetlands, fish, floodplains, sediments, and riverbank life form a living environmental corridor.",
      history: "Settlements, kingdoms, pilgrimages, trade, and urban growth repeatedly gather along the river.",
      culture: "Ritual bathing, music, mourning, celebration, agriculture, and daily work keep the river socially present.",
      architecture: "Ghats, steps, bridges, temples, cremation grounds, and riverfront cities translate water into civic form.",
      language: "Many regional languages meet along the river through trade, pilgrimage, song, and storytelling.",
      religion: "Sacred river devotion turns water into blessing, journey, purification, and return.",
      mythology: "Descent stories and divine associations make the river a cosmic presence, not only a watercourse.",
      festivals: "Mass bathing days, lamps, offerings, and gatherings illuminate the river as shared memory.",
      tradeRoutes: "River movement, crossings, markets, and floodplain agriculture connect communities over distance.",
      oralTraditions: "Songs, family rites, boatmen's knowledge, and pilgrimage narratives keep the river speaking."
    },
    layers: [
      { key: "geography", label: "Geographical Memory", signal: "Glacier, plains, delta", value: "My body connects altitude to ocean and turns distance into continuity." },
      { key: "ecology", label: "Ecological Memory", signal: "Silt, floodplain, fish, wetlands", value: "I build soil, carry life, disturb settlement, and renew the land through season." },
      { key: "history", label: "Historical Memory", signal: "Cities, routes, kingdoms, ghats", value: "Human history repeatedly gathers beside me because water made survival, travel, and ritual possible." },
      { key: "culture", label: "Cultural Memory", signal: "Bathing, song, lamps, mourning", value: "I hold ordinary days and final journeys together in one flowing civic memory." },
      { key: "religion", label: "Spiritual Memory", signal: "Pilgrimage, purification, offerings", value: "For many people, touching me means touching a sacred continuum older than one lifetime." }
    ],
    atmosphere: [
      { label: "Primary sound", value: "Water, bells, chants, markets, boats" },
      { label: "Weather mood", value: "Monsoon force, winter haze, summer glare" },
      { label: "Human presence", value: "Pilgrims, boatmen, farmers, mourners, vendors" },
      { label: "Emotional tone", value: "Vast, sacred, public, relentless" }
    ],
    soundscape: {
      time: "17:20 river dusk",
      weather: "Warm haze over moving water",
      temperature: "28 C",
      wind: "Open current breeze",
      channels: [
        {
          id: "river-current",
          label: "River current",
          memory: "Continuous water movement holds geography, ecology, and pilgrimage together.",
          texture: "Flowing drone",
          frequency: 174,
          modulation: 0.5
        },
        {
          id: "ghat-bells",
          label: "Ghat bells",
          memory: "Ritual bells and chants gather people at the river edge.",
          texture: "Ceremonial pulse",
          frequency: 330,
          modulation: 1.4
        },
        {
          id: "boat-market",
          label: "Boat market",
          memory: "Oars, calls, and crossings turn the river into a moving civic corridor.",
          texture: "Public motion",
          frequency: 247,
          modulation: 1
        }
      ]
    },
    threads: ["Glaciers", "Floodplain agriculture", "Pilgrimage cities", "River trade", "Ritual calendars", "Oral songs"],
    threadGraph: {
      center: "Ganga",
      nodes: [
        {
          id: "glaciers",
          label: "Glaciers",
          type: "Geography",
          summary: "Glacial origins make the river a descent from mountain memory into plains and cities."
        },
        {
          id: "floodplain-agriculture",
          label: "Floodplain agriculture",
          type: "Ecology",
          summary: "Silt, flood, and soil renewal make settlement and food systems possible."
        },
        {
          id: "pilgrimage-cities",
          label: "Pilgrimage cities",
          type: "Religion",
          summary: "Sacred riverfronts concentrate ritual, mourning, bathing, and public devotion."
        },
        {
          id: "river-trade",
          label: "River trade",
          type: "Route",
          summary: "Boats, crossings, markets, and river corridors move goods and ideas."
        },
        {
          id: "oral-songs",
          label: "Oral songs",
          type: "Culture",
          summary: "Songs and family rites make the river audible across regions and generations."
        }
      ],
      links: [
        { from: "glaciers", to: "floodplain-agriculture", relation: "Mountain water renews the plains." },
        { from: "floodplain-agriculture", to: "river-trade", relation: "Agrarian settlement creates movement and exchange." },
        { from: "pilgrimage-cities", to: "oral-songs", relation: "Ritual gathering carries sound and story." },
        { from: "river-trade", to: "pilgrimage-cities", relation: "Routes connect sacred river cities." }
      ]
    },
    whyHere:
      "The river made settlement possible, connected regions, renewed soil, shaped ritual life, and turned movement into civilization.",
    whyHereEngine: {
      question: "Why did Ganga become a civilization river?",
      answer:
        "Because glacial descent, floodplain renewal, ritual meaning, and river movement made the same water system ecological, economic, and sacred.",
      factors: [
        {
          id: "glacial-descent",
          force: "Glacial descent",
          layer: "Geography",
          cause: "The river moves from Himalayan source into plains and deltas.",
          effect: "It connects altitude, settlement, agriculture, city life, and oceanic movement.",
          evidence: "Snowmelt, slope, tributaries, plains, and delta routes create long continuity.",
          connectsTo: ["Climate", "Trade"]
        },
        {
          id: "floodplain-renewal",
          force: "Floodplain renewal",
          layer: "Ecology",
          cause: "Flood, silt, and seasonal change renew the land while disturbing settlement.",
          effect: "Agriculture and village life become tied to the river's changing body.",
          evidence: "Wetlands, soil renewal, crops, fish, and flood rhythms support settlement.",
          connectsTo: ["Agriculture", "Human Memory"]
        },
        {
          id: "ritual-water",
          force: "Ritual water",
          layer: "Religion",
          cause: "Sacred meaning turns the river into purification, pilgrimage, mourning, and return.",
          effect: "The river becomes a public spiritual axis for millions of repeated actions.",
          evidence: "Ghats, offerings, mass bathing days, lamps, and family rites gather at the edge.",
          connectsTo: ["Festivals", "Mythology"]
        },
        {
          id: "river-corridor",
          force: "River corridor",
          layer: "Trade Routes",
          cause: "Water movement, crossings, boats, and markets connect distant communities.",
          effect: "Goods, languages, songs, news, and rituals travel together along the river.",
          evidence: "Boat traffic, market towns, pilgrimage cities, and crossing points form a network.",
          connectsTo: ["Language", "Culture"]
        }
      ]
    },
    memoryStream: [
      {
        id: "ice-origin",
        layer: "Geographical",
        moment: "Mountain source",
        title: "Ice begins the long memory",
        scene:
          "Snow and glacier become descent. The river starts as height, pressure, melt, and movement before it becomes a civilization path.",
        sensory: "Cold water, rock echo, thin air",
        thread: "Glaciers"
      },
      {
        id: "silt-plain",
        layer: "Ecological",
        moment: "Floodplain renewal",
        title: "The river writes with silt",
        scene:
          "Flood and retreat leave soil behind. Villages, crops, and routes depend on the river's ability to disturb and renew.",
        sensory: "Wet soil, monsoon force, birds",
        thread: "Floodplain agriculture"
      },
      {
        id: "ghat-gathering",
        layer: "Spiritual",
        moment: "Ritual edge",
        title: "Water becomes public devotion",
        scene:
          "At ghats, people gather for bathing, prayer, mourning, and return. One river edge holds many human thresholds.",
        sensory: "Steps, bells, lamps, voices",
        thread: "Pilgrimage cities"
      },
      {
        id: "moving-market",
        layer: "Historical",
        moment: "Trade and travel",
        title: "Movement becomes civilization",
        scene:
          "Boats, crossings, markets, and settlements turn the river into a corridor where goods, language, ritual, and news travel together.",
        sensory: "Boat wood, market calls, oars",
        thread: "River trade"
      }
    ]
  },
  {
    id: "varanasi",
    name: "Varanasi",
    region: "Middle Ganga Plain",
    archetype: "Ritual city",
    pulse: 91,
    coordinates: { x: 0.6, y: 0.51 },
    tone: "#ff8f5c",
    accent: "#ffe36e",
    type: "City consciousness",
    voice:
      "I am Varanasi. Dawn touches my ghats, lamps cross my river, and generations arrive here to listen to time become visible.",
    identity: {
      geography: "A dense city formed around a sacred river edge, ghats, lanes, and ritual approach.",
      climate: "Heat, haze, monsoon, river humidity, and morning light shape the city's sensory rhythm.",
      ecology: "River ecology, urban density, animals, water, smoke, and seasonal air coexist in a charged environment.",
      history: "Learning, worship, trade, patronage, destruction, rebuilding, and continuous return layer the city.",
      culture: "Music, textiles, ritual practice, food, scholarship, craft, and neighborhood life define everyday memory.",
      architecture: "Ghats, temples, lanes, houses, courtyards, and riverfront structures compress civic and sacred life.",
      language: "Hindi, Bhojpuri, Sanskrit, Urdu traces, and visiting tongues meet in ritual and market speech.",
      religion: "Sacred geography, worship, death rites, pilgrimage, and daily ceremony form the city's central identity.",
      mythology: "Stories of cosmic time and sacred presence make the city feel older than ordinary urban history.",
      festivals: "Lamps, processions, music, bathing days, and seasonal rituals illuminate public memory.",
      tradeRoutes: "River movement, craft exchange, pilgrimage routes, and learning networks sustain circulation.",
      oralTraditions: "Boatmen, priests, musicians, weavers, teachers, families, and guides keep the city narrated."
    },
    layers: [
      { key: "geography", label: "Geographical Memory", signal: "River bend, ghats, lanes", value: "My riverfront turns approach, ritual, trade, and mourning into visible urban form." },
      { key: "history", label: "Historical Memory", signal: "Learning, patronage, rebuilding", value: "I have been remade many times, but my memory survives through return, ritual, and practice." },
      { key: "culture", label: "Cultural Memory", signal: "Music, craft, food, scholarship", value: "My culture lives in performance, work, study, and the everyday density of shared streets." },
      { key: "language", label: "Linguistic Memory", signal: "Hindi, Bhojpuri, Sanskrit, market speech", value: "I speak in chants, bargaining, teaching, song, and the names of lanes people inherit." },
      { key: "religion", label: "Spiritual Memory", signal: "Ghats, lamps, cremation, pilgrimage", value: "My spiritual force is public: fire, water, bells, bodies, and devotion share the same edge." }
    ],
    atmosphere: [
      { label: "Primary sound", value: "Boat oars, bells, aarti, vendors, classical music" },
      { label: "Weather mood", value: "Dawn haze, river humidity, monsoon light" },
      { label: "Human presence", value: "Priests, boatmen, students, artisans, pilgrims, families" },
      { label: "Emotional tone", value: "Intense, luminous, ancient, crowded" }
    ],
    soundscape: {
      time: "05:38 ghat dawn",
      weather: "River haze lifting from stone steps",
      temperature: "21 C",
      wind: "Light riverbank air",
      channels: [
        {
          id: "aarti-bells",
          label: "Aarti bells",
          memory: "Morning ritual turns the riverfront into shared sound and light.",
          texture: "Luminous ring",
          frequency: 440,
          modulation: 1.8
        },
        {
          id: "boat-oars",
          label: "Boat oars",
          memory: "Oars and water make the river edge feel awake before the lanes fill.",
          texture: "Water rhythm",
          frequency: 196,
          modulation: 0.8
        },
        {
          id: "lane-voices",
          label: "Lane voices",
          memory: "Vendors, priests, students, and families layer the city with ordinary memory.",
          texture: "Crowded murmur",
          frequency: 262,
          modulation: 1.2
        }
      ]
    },
    threads: ["Ganga", "Classical music", "Textile craft", "Sanskrit learning", "Pilgrimage routes", "Ritual fire"],
    threadGraph: {
      center: "Varanasi",
      nodes: [
        {
          id: "ganga",
          label: "Ganga",
          type: "River",
          summary: "The river edge gives Varanasi its ritual stage, visual identity, and daily rhythm."
        },
        {
          id: "classical-music",
          label: "Classical music",
          type: "Sound",
          summary: "Music lineages preserve emotion, discipline, and devotional atmosphere."
        },
        {
          id: "textile-craft",
          label: "Textile craft",
          type: "Culture",
          summary: "Craft memory carries domestic labor, trade, artistry, and urban livelihood."
        },
        {
          id: "sanskrit-learning",
          label: "Sanskrit learning",
          type: "Language",
          summary: "Study and teaching traditions anchor the city beyond political change."
        },
        {
          id: "ritual-fire",
          label: "Ritual fire",
          type: "Religion",
          summary: "Fire and water make mortality part of the city's public spiritual memory."
        }
      ],
      links: [
        { from: "ganga", to: "ritual-fire", relation: "The riverfront holds final rites and sacred transition." },
        { from: "sanskrit-learning", to: "ritual-fire", relation: "Text, ritual knowledge, and practice sustain ceremony." },
        { from: "classical-music", to: "sanskrit-learning", relation: "Learning cultures preserve sound, language, and devotion." },
        { from: "textile-craft", to: "ganga", relation: "Trade and river access keep craft economies connected." }
      ]
    },
    whyHere:
      "A river bend, ritual geography, learning traditions, trade movement, and human longing made the city endure.",
    whyHereEngine: {
      question: "Why did Varanasi endure as a ritual city?",
      answer:
        "Because the river edge concentrated ritual, dense lanes preserved everyday memory, learning traditions anchored knowledge, and human longing kept returning to the city.",
      factors: [
        {
          id: "river-edge",
          force: "River edge",
          layer: "Geography",
          cause: "A charged riverfront gives ritual, movement, and public gathering a visible edge.",
          effect: "The city can turn dawn, bathing, mourning, and worship into shared civic form.",
          evidence: "Ghats, boats, steps, lamps, and riverfront temples organize daily life.",
          connectsTo: ["Religion", "Architecture"]
        },
        {
          id: "lane-density",
          force: "Lane density",
          layer: "Human Memory",
          cause: "Tight lanes hold families, artisans, students, priests, vendors, and visitors in close contact.",
          effect: "Ordinary life becomes a memory network rather than a backdrop to monuments.",
          evidence: "Markets, homes, workshops, shrines, food, teaching, and street speech overlap.",
          connectsTo: ["Culture", "Language"]
        },
        {
          id: "learning-anchor",
          force: "Learning anchor",
          layer: "Culture",
          cause: "Religious study, music, craft, and teaching traditions create continuity beyond single rulers.",
          effect: "The city survives disruption because practice is distributed across people and institutions.",
          evidence: "Sanskrit learning, music lineages, textile craft, and ritual specialists sustain identity.",
          connectsTo: ["Language", "Architecture"]
        },
        {
          id: "human-longing",
          force: "Human longing",
          layer: "Spiritual Memory",
          cause: "People come seeking blessing, release, meaning, education, livelihood, and final crossing.",
          effect: "The city renews itself through arrival, not just inheritance.",
          evidence: "Pilgrims, mourners, students, families, boatmen, and priests keep the city in motion.",
          connectsTo: ["Pilgrimage", "Ritual fire"]
        }
      ]
    },
    memoryStream: [
      {
        id: "dawn-ghats",
        layer: "Spiritual",
        moment: "Morning edge",
        title: "Dawn makes time visible",
        scene:
          "Light reaches the ghats, boats loosen from the bank, and the city begins speaking through water, flame, and stone.",
        sensory: "River haze, bells, oars",
        thread: "Ganga"
      },
      {
        id: "lane-memory",
        layer: "Human",
        moment: "Everyday density",
        title: "The lanes remember ordinary life",
        scene:
          "Families, students, priests, artisans, vendors, and visitors cross one another in lanes where daily work carries deep memory.",
        sensory: "Footsteps, food smoke, street voices",
        thread: "Pilgrimage routes"
      },
      {
        id: "music-thread",
        layer: "Cultural",
        moment: "Sound inheritance",
        title: "Music holds the city's inner weather",
        scene:
          "Practice, performance, teaching, and devotion keep emotion moving through the city long after a single voice fades.",
        sensory: "Raga, tanpura, river air",
        thread: "Classical music"
      },
      {
        id: "fire-water",
        layer: "Ritual",
        moment: "Final crossing",
        title: "Fire and water share the threshold",
        scene:
          "The city holds endings in public view. Ritual fire, river water, and human longing make mortality part of the urban field.",
        sensory: "Smoke, chant, heat, water",
        thread: "Ritual fire"
      }
    ]
  }
];
