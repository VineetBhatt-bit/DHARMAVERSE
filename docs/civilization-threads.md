# Civilization Threads

Milestone 6 turns place connections into a graph model.

## Thread Graph

Each location has `threadGraph`:

- `center`: The selected place.
- `nodes`: Connected entities such as ecology, language, religion, architecture, routes, craft, and sound.
- `links`: Relationships between nodes.

## Node

Each node contains:

- `id`: Stable identifier.
- `label`: User-facing name.
- `type`: Category such as Ecology, Language, Route, Religion, Architecture, Sound, or Culture.
- `summary`: Why the node matters to the place.

## Link

Each link contains:

- `from`: Source node id.
- `to`: Target node id.
- `relation`: Human-readable explanation of the connection.

## Product Rule

Threads should make the user feel that a place belongs to a living network, not an isolated marker.
