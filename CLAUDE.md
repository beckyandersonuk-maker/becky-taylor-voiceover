# Becky Taylor Voiceover — Project Documentation

## Project Overview
A single-page scrolling voiceover website for Becky Taylor, a professionally trained British female voice actor with an authentic Yorkshire accent. Built with plain HTML, CSS, and vanilla JavaScript for maximum speed and simplicity.

## Live URL
Deployed via GitHub Pages: https://beckyandersonuk-maker.github.io/becky-taylor-voiceover/

## Folder Structure

```
becky-taylor-voiceover/
├── index.html              # Single-page HTML — all sections in one file
├── styles.css              # Complete stylesheet — no frameworks
├── script.js               # Vanilla JS — portfolio renderer, nav, audio players, scroll animations
├── favicon.svg             # SVG favicon with "BT" initials in terracotta
├── CLAUDE.md               # This file — project documentation
├── assets/
│   ├── audio/              # Audio demo reels go here (MP3 format)
│   │   └── (empty — add commercial-demo.mp3, corporate-demo.mp3, character-demo.mp3)
│   ├── images/
│   │   └── headshot.png    # Becky's headshot/profile image
│   └── logos/              # Client logos (PNG/JPEG)
│       ├── The works.png
│       ├── royal college of gps.png
│       ├── gorecery aid.png
│       ├── wellknown.png
│       ├── northern powergird.jpeg
│       ├── police treatment centres.png
│       ├── grow.png
│       ├── DEAF ADVICE SHEFFIELD.png
│       ├── foodcycle.png
│       ├── temple newsham.png
│       ├── the copper cow.png
│       ├── salford uni.png
│       ├── mitsubishi forklift truck.png
│       └── zest.png
```

## Design Choices

### Colour Palette
- **Primary (Terracotta):** #C4704B — warm, approachable, distinctive
- **Background (Cream):** #FAF5F0 — soft, warm off-white
- **Text (Charcoal):** #2D2D2D — never pure black, easier on the eyes
- **Accent (Sage):** #8B9D83 — muted green for subtle highlights
- **Accent (Gold):** #C9A96E — warm gold for additional accents
- All colours checked for WCAG AA contrast compliance

### Typography
- **Headings:** DM Serif Display — warm, modern serif with personality
- **Body:** Source Sans 3 — clean, readable humanist sans-serif
- Both loaded via Google Fonts with preconnect for performance

### Layout
- Single-page with smooth scroll navigation
- Mobile-first responsive design
- Sections alternate between cream and white backgrounds for visual rhythm
- Generous whitespace throughout
- Subtle fade-in scroll animations via Intersection Observer

### Sections (scroll order)
1. **Hero** — Name, tagline, intro, CTA buttons, headshot
2. **Demos** — Audio player cards (commercial, corporate, character) with custom-styled HTML5 players
3. **About** — Personal bio written in Becky's voice, with BRAVA training link
4. **Services** — 8 service cards in a responsive grid
5. **Portfolio** — Video/project cards rendered from a JS config array (easy to update)
6. **Clients** — Scrolling logo marquee with all client logos
7. **Testimonials** — 3 testimonial cards (placeholder text ready to be replaced)
8. **Contact** — Form + email + social links

## How to Update Content

### Adding Portfolio Videos
Edit the `PORTFOLIO_PROJECTS` array at the top of `script.js`. Each project is an object:
```js
{
    title: "Project Name",
    client: "Client Name",
    brief: "Description of the project.",
    style: "Voice style tags",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID"  // or null for placeholder
}
```

### Adding Audio Demos
1. Drop MP3 files into `assets/audio/`
2. Name them: `commercial-demo.mp3`, `corporate-demo.mp3`, `character-demo.mp3`
3. The players are already wired up — they'll work automatically
4. Remove the "Demo reel coming soon" note from each card in `index.html`

### Updating Testimonials
Find the `.testimonial-card` elements in `index.html` and replace the placeholder quote, name, and role.

### Updating Contact Email
Search for `hello@beckytaylorvoiceover.com` in `index.html` and replace with the real email address.

### Connecting the Contact Form
Replace the Formspree URL in the form's `action` attribute, or set up Netlify Forms / Formspree.

### Adding Social Links
Replace the `href="#"` values on the LinkedIn and Instagram links in the contact section.

## Technical Notes
- **No build step** — edit files directly, push to GitHub, changes go live automatically
- **SEO** — meta tags, Open Graph tags, and JSON-LD structured data are all set
- **Accessibility** — ARIA labels, keyboard navigation, sufficient contrast, prefers-reduced-motion support
- **Performance** — lazy loading images/iframes, no external JS dependencies, minimal CSS
- **Fonts** — Google Fonts loaded with `display=swap` for fast rendering

## Voice Profile
All website copy was written using VOICE_PROFILE_BECKY.md as the source of truth for tone and style. The voice is warm, conversational, genuinely British, and never corporate or generic.
