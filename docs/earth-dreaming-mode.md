# Earth Dreaming Mode

Earth Dreaming Mode is the experimental global layer of DHARMAVERSE. It shifts the interface from one selected place to a wider field of relationships between places, routes, languages, ecology, ritual, and cultural memory.

## Product Purpose

The mode should make Earth feel alive as a memory network. A user should be able to wake the layer, choose a movement pattern, and see connections flow across the globe instead of reading isolated place facts.

## Data Model

The model lives in `src/data/locations.js` as `earthDreaming`.

- `nodes` describe named memory points with normalized canvas coordinates.
- `layers` group the network into readable lenses.
- `flows` connect two nodes and explain the relationship in one sentence.

Current layers:

- `Culture Flow`: ritual, teaching, music, craft, and pilgrimage as moving culture.
- `Language Drift`: local speech, liturgy, guide knowledge, chants, and teaching lineages.
- `Ritual Routes`: pilgrim movement, bathing, worship, festivals, and final rites.
- `Ecology Memory`: forests, rivers, floodplains, mist, heat, and silt as forces that shape civilization.

## Interface Behavior

The Earth Dreaming panel appears inside the main living surface. It includes:

- Wake/sleep control for the global mode.
- Active layer title and summary.
- Pulse sentence describing the layer's movement.
- Flow count for the current layer.
- Layer buttons that immediately wake the mode and update the canvas.

When active, the canvas renders:

- Curved network flows between memory nodes.
- Moving particles along each flow.
- Node pulses and labels.
- The selected place marker and existing civilization thread lines.

## Acceptance Notes

This milestone is complete when the globe communicates relationships through motion. The layer should read as a living network, not a static map with points.
