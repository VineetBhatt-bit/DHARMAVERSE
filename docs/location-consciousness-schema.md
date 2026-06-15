# Location Consciousness Schema

Milestone 2 introduces the first data model for living-place identity. The schema is intentionally local and dependency-free so the product can evolve before adding an API or database.

## Location

Each location is an object with:

- `id`: Stable internal identifier.
- `name`: User-facing place name.
- `region`: Short regional readout.
- `archetype`: Emotional and cultural role of the place.
- `pulse`: World-heartbeat intensity value from 0 to 100.
- `coordinates`: Relative canvas coordinates used by the current prototype.
- `tone` and `accent`: Visual identity colors.
- `type`: Consciousness mode label.
- `voice`: First-person introduction.
- `identity`: Core consciousness facets.
- `layers`: Narrative memory layers.
- `atmosphere`: Sensory and emotional signals.
- `threads`: Civilization connections.
- `whyHere`: Causal explanation for why the place developed where it did.

## Identity Facets

Every location should eventually support these facets:

- Geography
- Climate
- Ecology
- History
- Culture
- Architecture
- Language
- Religion
- Mythology
- Festivals
- Trade routes
- Oral traditions

These are not encyclopedia headings. Each facet should explain how the place remembers itself.

## Memory Layer

A memory layer contains:

- `key`: Facet or system key.
- `label`: User-facing layer name.
- `signal`: Compressed sensory or causal signal.
- `value`: First-person or emotionally aware explanation.

## First Complete Sample

Jageshwar is the first complete sample. It includes all identity facets, seven memory layers, atmosphere signals, civilization threads, and a "Why here?" explanation.

The next milestone can use this structure to generate a Memory Stream from the same data.
