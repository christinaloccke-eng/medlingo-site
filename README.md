# MedLingo — marketing site

A single-page, static marketing site for **MedLingo**, an interactive, gamified
health-literacy and patient-education platform. Plain HTML, CSS, and vanilla
JavaScript — no framework, no build step.

## Structure

```
.
├── index.html          # The one-page site (hero, problem, approach, demos, team, contact)
├── styles.css          # All styling ("clinical warmth" design system)
├── script.js           # Mobile nav toggle + footer year
├── gh-test/
│   └── index.html      # "GH Test" patient module, served at /gh-test/
├── assets/
│   ├── medlingo-mark.svg       # Logo mark (cross / speech-bubble)
│   ├── medlingo-logo.svg       # Full lockup — dark backgrounds
│   ├── medlingo-logo-ink.svg   # Full lockup — light backgrounds
│   ├── favicon.svg             # Browser tab icon (the mark)
│   ├── apple-touch-icon.png    # iOS home-screen icon (180×180)
│   ├── og-image.png / .svg     # Social share preview (1200×630)
│   └── christina.jpg           # Founder headshot (Christina)
├── netlify.toml        # Deploy config (no build; security + cache headers)
└── README.md
```

## Brand

| Token    | Hex       | Use                                   |
|----------|-----------|---------------------------------------|
| Lavender | `#7C8CF8` | Logo mark, decorative fills           |
| Lavender (deep) | `#4856D4` | Buttons & links (accessible)   |
| Mint     | `#3FCFB1` | Accent                                |
| Amber    | `#F4B860` | Accent                                |
| Ink      | `#0E1116` | Text                                  |
| Paper    | `#F2F4F7` | Background                            |

Headings: **Newsreader** · Body/labels: **DM Sans** (both Google Fonts).
Tagline: *"Clinical fluency, by design."*

## Preview locally

No tooling required. Either open `index.html` directly, or serve the folder so
the `/gh-test/` route resolves cleanly:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to Netlify

**Option A — drag & drop:** zip this folder (or drag the folder) into the
Netlify dashboard (Sites → *Add new site* → *Deploy manually*). Done.

**Option B — connect the Git repo (recommended):**
1. Netlify → *Add new site* → *Import an existing project*.
2. Pick this repository and branch.
3. Build command: *(leave blank)* · Publish directory: `.`
4. Deploy. `netlify.toml` already encodes these settings.

## Photos

Founder headshots live in `assets/`. The Team section is **self-healing**:
each founder shows an initials monogram until a real photo is supplied.

- **Christina:** ✅ `assets/christina.jpg` is in place and showing.
- **Missy / Karen:** currently monograms ("MS" / "KC") by design. To add photos
  later, drop `assets/missy.jpg` / `assets/karen.jpg` in and, in `index.html`,
  add inside each `.avatar` div:
  `<img src="assets/missy.jpg" alt="Melissa Skolnik" onerror="this.remove()">`

## Adding more demo modules

The **Demos** section is grouped by user (Everyone / Patients / Caregivers /
Providers) and built to be copy-paste repeatable. To add a module, duplicate a
`<a class="demo-card">…</a>` block inside the relevant `.demo-grid`, or add a
new `.demo-group`. External links use `target="_blank" rel="noopener"`;
internal subpages (like `/gh-test/`) do not.

## Notes / placeholders to finalize

- **Problem stats** (88% · 40–60% · $349B) come from MedLingo's research review;
  swap in your final cited sources where the `.source-note` line appears.
- The product mockup in the hero is drawn in CSS/SVG (no external assets).
