# DHARMAVERSE Implementation Plan

This plan keeps the build incremental. Each milestone should end with a working commit.

## Milestone 0: Repository Foundation

Goal: Create a clean project base and capture the source vision.

Deliverables:

- README
- Vision document
- Step-by-step implementation plan
- Git remote connected to GitHub

Status: Complete.

## Milestone 1: App Shell

Goal: Build the first usable interface.

Deliverables:

- Frontend app scaffold
- Full-screen Earth or map-inspired exploration surface
- Location search or sample-location selector
- Responsive desktop and mobile layout

Acceptance:

- The app runs locally.
- A user can open the first screen and select a sample place.

Status: Complete.

Implementation notes:

- Static app with no package dependency requirement.
- Animated canvas Earth surface.
- Sample locations: Jageshwar, Ganga, and Varanasi.
- Interactive place selector, first-person signal, memory layers, and "Why here?" reasoning panel.

## Milestone 2: Location Consciousness Prototype

Goal: Create the first structured location identity model.

Deliverables:

- Location schema
- Sample data for Jageshwar
- First-person place introduction
- Memory layers for geography, ecology, history, culture, language, religion, and architecture

Acceptance:

- Selecting Jageshwar shows a place identity that feels narrative, not encyclopedic.

Status: Complete.

Implementation notes:

- Added `docs/location-consciousness-schema.md`.
- Expanded location data into identity facets, memory layers, atmosphere signals, and civilization threads.
- Made Jageshwar the first complete consciousness sample.
- Updated the app to render structured identity data from the model.

## Milestone 3: Memory Stream

Goal: Let a place unfold as a sequence of memories.

Deliverables:

- Timeline or cinematic sequence UI
- Memory cards or scenes
- Layer filters
- Narrative progression

Acceptance:

- A user can move through a location's memories in a coherent order.

Status: Complete.

Implementation notes:

- Added `memoryStream` scenes to each sample location.
- Added previous and next controls, scene indicators, and layer filters.
- Rendered each scene with moment, narrative, sensory signal, and civilization thread.

## Milestone 4: Why Here Engine

Goal: Explain why a place exists and why it matters.

Deliverables:

- Reasoning model for geography, ecology, migration, religion, trade, politics, and culture
- "Why here?" panel
- Causal connections between location facts

Acceptance:

- The app explains why the sample place developed where it did.

Status: Complete.

Implementation notes:

- Added `whyHereEngine` causal models for each sample location.
- Rendered selectable causal factors with cause, effect, evidence, and connected layers.
- Replaced static "Why here?" copy with a structured reasoning panel.

## Milestone 5: Sound and Atmosphere

Goal: Make locations feel alive through ambient presentation.

Deliverables:

- Sound-memory data model
- Ambient audio controls or placeholders
- Weather, time, and atmosphere presentation

Acceptance:

- A user can experience a location through visual and sound cues.

Status: Complete.

Implementation notes:

- Added `soundscape` data to each sample location.
- Added weather, time, temperature, wind, and sound-memory channel display.
- Added atmosphere start/stop and intensity controls using browser-generated ambient audio.

## Milestone 6: Civilization Threads

Goal: Show how places connect to larger human systems.

Deliverables:

- Graph model for locations, cultures, languages, rivers, forests, routes, and traditions
- Visual connection view
- Example network around Jageshwar

Acceptance:

- A user can see how one place connects to ecology, religion, language, architecture, and routes.

Status: Complete.

Implementation notes:

- Added `threadGraph` node and link data for each sample location.
- Replaced static thread chips with an interactive connection graph.
- Added graph node detail and relation summaries.

## Milestone 7: Earth Dreaming Mode

Goal: Create an experimental global exploration mode.

Deliverables:

- Animated Earth/network view
- Flowing connections
- High-level cultural and historical movement layers

Acceptance:

- The globe feels alive and shows relationships, not only points.

Status: Complete.

Implementation notes:

- Added `earthDreaming` global network data with culture, language, ritual, and ecology layers.
- Added an Earth Dreaming control panel with wake/sleep mode, layer switching, pulse copy, and flow counts.
- Added animated canvas flows and moving particles between high-level civilization memory nodes.
- Documented the model in `docs/earth-dreaming-mode.md`.

## Milestone 8: Archive Layer

Goal: Preserve cultural memory as structured content.

Deliverables:

- Archive schema for oral histories, songs, folklore, languages, local knowledge, and narratives
- Contribution workflow design
- Source and provenance fields

Acceptance:

- Cultural knowledge can be stored with enough context to remain useful in the future.

Status: Complete.

Implementation notes:

- Added `archiveRecords` with cultural memory, oral tradition, sound, local knowledge, ritual, and music examples.
- Added keeper, provenance, source, context, rights, confidence, facet, and tag fields.
- Rendered archive records inside the active place memory panel.
- Documented the schema and contribution workflow in `docs/archive-layer.md`.

## Milestone 9: Contribution Intake Console

Goal: Turn archive preservation into a guided contribution workflow.

Deliverables:

- Intake schema for record type and sensitivity review
- Active-place contribution draft UI
- Consent, keeper, source, and review preview fields

Acceptance:

- A curator can prepare a draft archive submission with enough context to decide whether it is ready for review.

Status: Complete.

Implementation notes:

- Added `contributionGuidelines` for record types, required context, and sensitivity levels.
- Added a contribution intake console below the archive records.
- Added live draft preview for place, keeper, source, context requirements, consent status, and review rule.
- Documented the workflow in `docs/contribution-intake.md`.

## Milestone 10: Draft Export Packet

Goal: Make contribution drafts portable for future review and backend workflows.

Deliverables:

- Structured draft packet generated from the intake console
- Review status derived from consent path
- Refresh control for packet regeneration
- Documentation for packet fields

Acceptance:

- A curator can see a JSON draft packet that preserves place, record, and review context.

Status: Complete.

Implementation notes:

- Added a Draft Export panel below the intake console.
- Added generated JSON with `place`, `record`, and `review` sections.
- Added stable draft IDs from place and title.
- Documented the packet contract in `docs/draft-export-packet.md`.

## Milestone 11: Curator Review Checklist

Goal: Convert contribution drafts into visible review decisions.

Deliverables:

- Readiness checklist derived from the active contribution draft
- Pass, review, and block states for curator action
- Checklist embedded in the draft export packet
- Documentation for review rules

Acceptance:

- A curator can see which fields are ready, which need review, and which block publication.

Status: Complete.

Implementation notes:

- Added a Curator Review panel below the draft export.
- Added checklist rules for title, keeper credit, source note, consent path, required context, and sensitivity.
- Added checklist summary counts and embedded checklist data into the generated JSON packet.
- Documented the rules in `docs/curator-review-checklist.md`.

## Milestone 12: Completion Handoff

Goal: Make the repository clearly complete and handoff-ready.

Deliverables:

- Updated README reflecting the actual completed system
- Final completion report
- Verification checklist for local review
- Clear production notes for future expansion

Acceptance:

- A reviewer can open the repo and immediately understand what is complete, how to run it, and what remains future production work.

Status: Complete.

Implementation notes:

- Updated `README.md` from early-phase wording to current prototype status.
- Added `docs/project-completion-report.md`.
- Recorded verification commands and completed feature inventory.
- Clarified that the current repo is a static prototype, with backend persistence and deployment as future production work.

## Working Rules

- Keep each milestone small enough to review.
- Commit every meaningful step.
- Prefer real working screens over mock descriptions.
- Avoid encyclopedia-style copy in user-facing experiences.
- Treat narrative, atmosphere, and emotional memory as first-class product requirements.
