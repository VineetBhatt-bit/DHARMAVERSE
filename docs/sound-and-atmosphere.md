# Sound and Atmosphere

Milestone 5 adds a sound-memory layer to each location.

## Soundscape Model

Each location has `soundscape`:

- `time`: The atmospheric moment being represented.
- `weather`: Weather or environmental condition.
- `temperature`: Display temperature for the scene.
- `wind`: Wind or air movement.
- `channels`: Selectable sound-memory channels.

## Sound Channel

Each channel contains:

- `id`: Stable identifier.
- `label`: User-facing sound name.
- `memory`: Why the sound matters to the place.
- `texture`: Short sonic quality.
- `frequency`: Synth tone used by the prototype.
- `modulation`: Slow movement applied to the generated tone.

## Prototype Behavior

The app uses browser-generated ambient audio rather than bundled sound files. Audio starts only after the user presses the atmosphere control.

## Product Rule

Sound should reveal memory. It should not be treated as background decoration.
