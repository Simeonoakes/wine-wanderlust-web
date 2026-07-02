Cloudinary listing now works (121 assets pulled from tag `iv-media`). Before I start writing files, please confirm scope — this touches ~15 files and pulls every image and video from Cloudinary.

## Order of work

### 1. Central media config
- Create `src/config/media.ts` — one export `MEDIA` keyed by meaningful name (`heroVideo`, `img_7466`, `img_8254`, `siteBackground`, `pruningVideo`, etc.). Values are Cloudinary URLs built from public IDs I've resolved. Add block comment on how to add a new asset.
- Create wrapper components: `src/components/media/HeroVideo.tsx`, `GalleryVideo.tsx`, `ResponsiveImage.tsx`. Each reads `MEDIA[key]` and passes props through.
- Rewrite every `import xImg from "@/assets/*"` in components to `MEDIA.xxx`.
- Delete the 4 remaining `.asset.json` video pointers + any now-unused `src/assets/*.jpg` that Cloudinary supersedes. **Small assets (logo, menu-paper texture) stay local.**

### 2. Typography
- **Titles** (`.font-display`): swap Marcellus → **Cinzel**.
- **"In Vino Veritas" wordmark** in Navbar/Footer: swap Italianno + serif-caps trick → **Pinyon Script** (free Zapfino-style).
- Keep Tangerine (menu day headings), Mrs Saint Delafield (Simeon signature), Italianno (hero "Truly Tasting Terroir" and "terroir" inline).

### 3. Content / layout edits
- **Home first section**: reorder to Terroir paragraph → "The Wild Corbières" heading → "Nestled between…" paragraph → "This is what awaits you…" tagline. Add comma after "ultimately". Tagline uses same font as "tread these soils…".
- **Ancient Vines card** → `img_7466`.
- **`/the-vineyards` (Centuries of Savoir-Faire)** → banner `img_8254` (top of barrels + grass visible via object-position); "rugged yet refined" → "robust yet refined"; 3-photo strip `img_0568`, `img_1587`, `img_9230`.
- **`/the-landscape`** → text "since the 8th century"; banner crop lowered slightly (mountain top + foreground vines); 3-photo strip `img_3035`, `img_2968`, + Carcassonne photo (already local).
- **`/the-culture`** → text edit ("determination and more than a hint of stubbornness…"); semicolon after "turns into dinner"; 3-photo strip: existing coffee-cup photo + `img_5447` + `img_7904`.
- **Bespoke journey**: remove "enquire" CTA duplicate.
- **Menu photo strips (ExpeditionsSection)**: exactly ONE 5-photo strip per journey, placed between "Book your…" and "Enquire about bespoke":
  - 1-Day Taster: `img_5391, img_4969, img_8460, img_7315, img_00015` (last as local fallback if not in Cloudinary).
  - 2-Day Intensive: `img_5824, img_4561, img_3793, img_0692, img_00013` (or the alt list `img_9197, img_5824, img_2646, img_8152, img_3022` from msg #85 — **conflict; pick one**).
  - 5-Day / 1-Week: `img_9197, img_7170, img_2646, img_8152, img_3022`.
  - Remove the olive-tree photo under 1-day. Remove leftover 3-photo strips under 2-day.
- **Accommodation tab**: banner `img_8191`, 3-photo strip `img_1586`, `img_7985`, `img_5207`.
- **Seasons**: Summer illustration → `img_4310` (warm evening grading via CSS `filter`, cropped table-centred, vines visible in background). Spring text update from msg #69.
- **Sim's Samples**: intro closing sentence → "until you are able to tread these soils yourself, here in person." No new spring video available on Cloudinary (only images tagged) — **flag as missing**.
- **Various crops** via `object-position` only (no image re-editing): 1-week glass+herbs, 1-day glass+olive centred, Gastronomic Discovery lowered.
- `img_8152` crop from neck down + t-shirt logo removal → this requires actual image edit (imagegen), will do a one-off edited variant stored locally.

### 4. Conflicts / gaps I need your call on
- **2-day strip conflict**: msg #69 says `img_9197, img_5824, img_2646, img_8152, img_3022`; msg #85 says `img_5824, img_4561, img_3793, img_0692, img_00013`. Which is final?
- **`img_00013`, `img_00015`, `img_5207`, `Carcassonne`, "spring video for Sim's Samples"**: not present in the Cloudinary listing. I'll fall back to nearest existing assets and flag them, unless you upload/re-tag first.
- **`img_8185` vs `img_8152`**: msg #85 mentions cutting "photo 8185 from the neck down" — only `img_8152` exists. I'll assume `img_8152`.

## Technical notes
- Cloudinary HEIC assets aren't natively rendered by Safari/Chromium in `<img>`. I'll append `.jpg` in the delivery URL (Cloudinary transcodes on the fly): `https://res.cloudinary.com/dhnssest7/image/upload/f_auto,q_auto/{public_id}.jpg`. Same for `f_auto,q_auto,w_1600,c_fill` variants where a fixed aspect helps.
- No `.asset.json` remains after this pass; the 4 hero/pruning videos migrate to Cloudinary too.
- Build must pass `bun run build`.

**Reply "go" (with a pick for the 2-day conflict) and I'll execute in one pass. Otherwise say what to change.**