# Archive Layer

The Archive Layer preserves cultural memory with enough context to remain useful, respectful, and traceable. It is the first contribution workflow foundation for oral histories, songs, folklore, language memory, ritual notes, ecological knowledge, and local narratives.

## Record Schema

Archive records live in `src/data/locations.js` as `archiveRecords`.

Each record includes:

- `id`: Stable record identifier.
- `placeId`: Location that owns the record.
- `type`: Record category, such as oral tradition, song, ritual note, sound memory, local knowledge, or music lineage.
- `title`: Human-readable record title.
- `keeper`: Person, group, or role connected to the memory.
- `provenance`: How the memory was obtained, interpreted, or framed.
- `source`: Source placeholder or reference.
- `context`: Why the record matters and how it should be understood.
- `rights`: Consent, credit, privacy, and reuse constraints.
- `confidence`: Current status, such as observed, interpretive, needs source, or protocol.
- `facets`: Consciousness facets linked to the record.
- `tags`: Searchable keywords.

## Contribution Workflow

Future archive contributions should follow this flow:

1. Identify the place and memory type.
2. Record the keeper, source, consent status, and cultural sensitivity.
3. Capture context before summarizing the memory.
4. Link the record to facets and tags.
5. Mark confidence honestly.
6. Review rights before making any record public.

## Handling Rules

- Do not treat community memory as anonymous raw content.
- Keep consent and provenance visible.
- Mark placeholders clearly until sources are added.
- Preserve local terms, language attribution, and keeper credit when available.
- Avoid exposing sensitive ritual, family, livelihood, or ecological knowledge without explicit permission.

## Current UI

The app renders archive records in the active place memory panel. Each record shows type, title, context, keeper, provenance, source, rights, confidence, facets, and tags.
