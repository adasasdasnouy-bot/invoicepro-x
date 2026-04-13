# Design Brief: InvoicePro X

## Tone & Differentiation
Utilitarian precision with premium refinement. Business tool for accountants and freelancers. Navy conveys trust; green signals action and financial growth.

## Color Palette

| Token | Light | Dark | Purpose |
| --- | --- | --- | --- |
| Background | `0.99 0 0` | `0.06 0.01 259` (deep navy) | Page background |
| Card | `1.0 0 0` | `0.12 0.01 259` (navy) | Card surfaces |
| Foreground | `0.15 0 0` | `0.95 0 0` (white) | Text on background |
| Accent | `0.65 0.15 142` (vibrant green) | `0.65 0.15 142` | Action buttons, active states |
| Input | `0.9 0 0` | `0.15 0.01 0` (subtle grey) | Form input backgrounds |
| Border | `0.9 0 0` | `0.20 0.01 259` (subtle navy) | Dividers, edges |
| Destructive | `0.55 0.22 25` | `0.65 0.19 22` | Fee warnings, deletions |

## Typography
- **Display**: Space Grotesk (geometric, modern, technical)
- **Body**: DM Sans (neutral, clean, readable)
- **Mono**: system monospace (data display)
- **Scale**: 24px h2, 16px input/button, 14px labels, 13px output

## Elevation & Depth
Cards float above navy background via `shadow-card: 0 4px 12px rgba(0,0,0,0.15)`. Inputs use inset shadow for depth. Subtle borders on dividers separate sections.

## Structural Zones
| Zone | Treatment | Purpose |
| --- | --- | --- |
| Header | Brand + logout button, top spacing | Login state indicator |
| Main Content | Centered card (max-width 420px), 20px padding | All tools in single card |
| Sections | Divided by `<hr>` with subtle border-color | Invoice, POS, Profit Calculator |
| Footer | None | Single-page tool |

## Spacing & Rhythm
- Container padding: 20px
- Section margins: 10px (top/bottom)
- Input gaps: 10px
- HR margins: 15px (top/bottom)
- Field label margin: 8px

## Component Patterns
- **Inputs**: full-width, 12px padding, subtle grey/navy bg, no outline, white text
- **Buttons**: full-width, 12px padding, green accent, bold weight, rounded 10px, cursor-pointer
- **Output cards**: pre-line whitespace, grey/navy bg, subtle border, monospace font
- **Dividers**: `<hr>` with subtle border-color between sections

## Motion
Smooth transition on focus/hover states. No entrance animations—tool prioritizes clarity over decoration.

## Constraints
No gradients. No decoration. No floating elements. Focus on information density and functional clarity.
