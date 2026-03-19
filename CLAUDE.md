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
├── blog.css                # Blog section & blog post page styles
├── script.js               # Vanilla JS — portfolio renderer, nav, audio players, scroll animations
├── favicon.svg             # SVG favicon with "BT" initials in terracotta
├── CLAUDE.md               # This file — project documentation
├── blog/                   # Individual blog post pages
│   ├── how-much-does-a-voiceover-cost-in-the-uk.html
│   ├── what-to-look-for-when-hiring-a-voiceover-artist.html
│   ├── why-a-regional-accent-works-for-your-brand.html
│   └── home-studio-vs-professional-studio.html
├── assets/
│   ├── audio/              # Audio demo reels go here (MP3 format)
│   │   └── (empty — add commercial-demo.mp3, corporate-demo.mp3, character-demo.mp3)
│   ├── images/
│   │   ├── headshot.png    # Becky's headshot (cropped waist-up)
│   │   └── studio-brava.jpg # Studio photo credited to Melissa Thom @ BRAVA
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
1. **Hero** — Name, subtitle ("Authentic. Professional. Unmistakably Northern."), intro, CTA buttons, headshot. "The Voice of Yorkshire" tagline was REMOVED.
2. **Demos** — Audio player cards (commercial, corporate, character) with custom-styled HTML5 players
3. **About** — Personal bio written in Becky's voice, with BRAVA training link. Second photo (studio-brava.jpg) credited to Melissa Thom @ BRAVA
4. **Services** — 8 service cards in a responsive grid
5. **Portfolio** — Video/project cards rendered from a JS config array (easy to update). "Coming soon" placeholder cards were REMOVED — only projects with real video URLs are shown
6. **Clients** — Scrolling logo marquee with all client logos
7. **Blog ("From the Booth")** — 4 blog post cards linking to individual post pages
8. **Contact** — Simple contact form only. Email display, social links, and "Based In" info block were REMOVED

### Sections that have been REMOVED
- **Testimonials / Kind Words** — removed entirely
- **"The Voice of Yorkshire"** tagline from hero section

## Blog Posts (SEO Strategy)
Four blog posts targeting high-value search queries, all written in Becky's voice:

1. **How Much Does a Voiceover Cost in the UK?** (`blog/how-much-does-a-voiceover-cost-in-the-uk.html`) — Targets pricing queries. Includes rough UK market rates by project type.
2. **What to Look for When Hiring a Voiceover Artist** (`blog/what-to-look-for-when-hiring-a-voiceover-artist.html`) — Targets hiring/booking queries. Practical guide covering demo reels, studio setup, communication, turnaround.
3. **Why a Regional Accent Works for Your Brand** (`blog/why-a-regional-accent-works-for-your-brand.html`) — Positions Yorkshire accent as competitive advantage. References real brands (Plusnet, Yorkshire Tea).
4. **Home Studio vs Professional Studio** (`blog/home-studio-vs-professional-studio.html`) — Addresses common objection. Builds trust in home studio setup.

Each post has its own page with consistent nav, styling, and a CTA footer linking to the contact form.

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

### Adding New Blog Posts
1. Create a new HTML file in `blog/` using an existing post as a template
2. Add a corresponding card in the blog section of `index.html`

### Connecting the Contact Form
Replace the Formspree URL in the form's `action` attribute, or set up Netlify Forms / Formspree.

## Technical Notes
- **No build step** — edit files directly, push to GitHub, changes go live automatically
- **SEO** — meta tags, Open Graph tags, JSON-LD structured data, and 4 blog posts targeting key search terms
- **Accessibility** — ARIA labels, keyboard navigation, sufficient contrast, prefers-reduced-motion support
- **Performance** — lazy loading images/iframes, no external JS dependencies, minimal CSS
- **Fonts** — Google Fonts loaded with `display=swap` for fast rendering

## Pending / Placeholder Items
- Audio demo reels not yet added (needs MP3s in assets/audio/)
- Contact form action is placeholder (needs Formspree/Netlify setup)
- Contact email placeholder needs replacing
- Social links (LinkedIn, Instagram) need real URLs

## Voice Profile
All website copy and blog posts were written using VOICE_PROFILE_BECKY.md as the source of truth for tone and style. The voice is warm, conversational, genuinely British, and never corporate or generic.
