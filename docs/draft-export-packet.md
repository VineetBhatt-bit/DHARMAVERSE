# Draft Export Packet

The Draft Export Packet turns the Contribution Intake Console into a portable review object. It is not a backend submission yet; it is a visible JSON contract that can later be sent to storage, moderation, or a curator queue.

## Packet Shape

Each packet includes:

- `id`: Draft identifier generated from active place and working title.
- `status`: Current lifecycle state, currently `draft`.
- `place`: Place id, name, and region.
- `record`: Record type, title, keeper, source, and required context.
- `review`: Sensitivity, review rule, consent path status, and next action.

## Review Logic

The packet derives its status label from the consent path field:

- If consent and credit path is identified, the packet is ready for curator review.
- If it is not identified, the packet needs consent and credit work before it can move forward.

## Product Behavior

The export panel updates when the intake preview updates. The Refresh control regenerates the packet from the current draft state. This keeps the packet visible to curators and makes the future backend contract easy to inspect.
