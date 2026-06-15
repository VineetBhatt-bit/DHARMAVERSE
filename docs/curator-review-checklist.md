# Curator Review Checklist

The Curator Review Checklist turns a contribution draft into visible review decisions. It helps a curator see whether a memory record is ready, needs contextual review, or is blocked before publication.

## Status Types

- `pass`: The field is present and ready for curator review.
- `review`: The field is present or expected, but requires human judgment.
- `block`: The draft cannot move toward publication until this issue is resolved.

## Current Checks

The checklist evaluates:

- Working title: flags generic default titles for review.
- Keeper credit: blocks drafts without a keeper, source community, or responsible institution.
- Source note: blocks drafts without interview, recording, field note, archive, or placeholder source context.
- Consent and credit path: blocks drafts when consent is not identified.
- Required context: always requires review against the selected record type.
- Sensitivity rule: passes public records and flags community review or restricted records for human review.

## Packet Integration

The generated draft export packet includes the checklist inside `review.checklist`. This keeps the visible review state and the portable JSON contract aligned.

## Product Behavior

The checklist updates whenever the contribution draft changes. It summarizes total pass, review, and block counts so curators can quickly judge whether a record can proceed.
