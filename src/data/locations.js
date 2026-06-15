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
    threads: [
      "Deodar forests",
      "Kumaoni language",
      "Shaivism",
      "Himalayan ecology",
      "Temple architecture",
      "Pilgrimage networks",
      "Local oral traditions"
    ],
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
    threads: ["Glaciers", "Floodplain agriculture", "Pilgrimage cities", "River trade", "Ritual calendars", "Oral songs"],
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
    threads: ["Ganga", "Classical music", "Textile craft", "Sanskrit learning", "Pilgrimage routes", "Ritual fire"],
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
