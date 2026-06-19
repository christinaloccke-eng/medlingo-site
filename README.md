# HealthLit — marketing site

A single-page, static marketing site for **HealthLit**, an interactive, gamified
health-literacy and patient-education platform. Plain HTML, CSS, and vanilla
JavaScript — no framework, no build step.

## Structure

```
.
├── index.html          # The one-page site (hero, problem, approach, demos, team, contact)
├── styles.css          # All styling ("clinical warmth" design system)
├── script.js           # Mobile nav toggle + footer year
├── gh-test/
│   └── index.html      # "GH Test" patient module, served at /gh-test
├── favicon/            # Brand-kit favicons (svg + 16/32/48/180/192/512 + maskable)
├── social/             # Brand-kit social images (og 1200×630 + 1200×1200)
├── wordmark/           # Brand-kit wordmark (svg/png + reversed)
├── site.webmanifest    # PWA manifest (from the brand kit)
├── assets/             # Founder headshots + hero fallback
│   ├── christina.jpg / melissa.jpg / karen.jpg
│   └── hero-module-fallback.png
├── netlify.toml        # Deploy config (no build; security + cache headers)
└── README.md
```

> **Brand assets:** `/favicon/`, `/social/`, `/wordmark/`, and `site.webmanifest`
> ship from `healthlit-brand-kit.zip` — unzip its contents at the web root. The
> markup references these files; they are not generated in the repo.

## Brand

| Token  | Hex       | Use                                      |
|--------|-----------|------------------------------------------|
| Ink    | `#1D2A2F` | Headings, wordmark "Health", primary text |
| Clay   | `#C2734E` | Wordmark "Lit", links, buttons, accent   |
| Paper  | `#F4EEE3` | Background                               |
| Card   | `#EDE5D6` | Tinted section surface                   |
| Body   | `#46403A` | Body copy                                |
| Muted  | `#8A7E6C` | Muted labels / captions                  |
| Green  | `#3F5C49` | Secondary accent                         |
| Gold   | `#B8892C` | Secondary accent                         |

Display headings/tagline: **Playfair Display** · UI/body: **DM Sans** ·
Labels/eyebrows: **DM Mono** (all Google Fonts).
Tagline: *"Become fluent in your own care."*

The header/footer wordmark is live two-tone HTML text (`.wm-health` ink +
`.wm-lit` clay); add `wordmark--reversed` on dark backgrounds.

## Preview locally

No tooling required. Either open `index.html` directly, or serve the folder so
the `/gh-test` route resolves cleanly:

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
internal subpages (like `/gh-test`) do not.

## Notes / placeholders to finalize

- **Problem stats** (88% · 40–80% · $349B) come from HealthLit's research review;
  swap in your final cited sources where the `.stat__src` line appears.
- The hero shows a live preview of the pediatric heart module
  (`https://heart.healthlit.ai/`) with a static image fallback.
</content>
</invoke>
