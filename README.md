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

Founder headshots live in `assets/` and are all in place. Each avatar is wired
to a photo and falls back to an initials monogram (via `onerror`) if a file is
ever missing.

- **Christina:** `assets/christina.jpg` ✅
- **Melissa:** `assets/melissa.jpg` ✅
- **Karen:** `assets/karen.jpg` ✅ (full photo; avatar focal point set via
  inline `object-position` so both faces stay in the circle)

Photos are downscaled to 640px wide with EXIF/GPS metadata stripped. To swap a
photo, replace the file (same name) and, if needed, tweak its
`object-position` in `index.html`.

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
