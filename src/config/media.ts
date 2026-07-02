/**
 * Centralised media configuration.
 *
 * All large media (videos, big photographs, background footage) live on
 * Cloudinary and are referenced here by a meaningful key. Components consume
 * these URLs via `MEDIA.<key>` so a swap only requires editing this file.
 *
 * ── HOW TO ADD A NEW ASSET ─────────────────────────────────────────────
 * 1. Upload the file to the Cloudinary account (cloud name: `dhnssest7`)
 *    and note the resulting `public_id` (e.g. `MyPhoto_ab12cd`).
 * 2. Add a new entry below with a meaningful key:
 *       myPhoto: cldImage("MyPhoto_ab12cd"),
 *    or, for videos:
 *       myVideo: cldVideo("MyVideo_ab12cd"),
 * 3. Consume it in a component: `<img src={MEDIA.myPhoto} />` or
 *    `<video src={MEDIA.myVideo} />`.
 *
 * Small static assets (logo, UI icons, textures like menu-paper) stay local
 * in `src/assets/` because they are tiny and benefit from bundling.
 * ───────────────────────────────────────────────────────────────────────
 */

const CLOUD_NAME = "dhnssest7";
const BASE = `https://res.cloudinary.com/${CLOUD_NAME}`;

/** Build a Cloudinary image URL with auto format + quality (renders HEIC too). */
export const cldImage = (publicId: string, opts: string = "f_auto,q_auto") =>
  `${BASE}/image/upload/${opts}/${publicId}.jpg`;

/** Build a Cloudinary video URL with auto quality streaming. */
export const cldVideo = (publicId: string, opts: string = "q_auto") =>
  `${BASE}/video/upload/${opts}/${publicId}.mp4`;

export const MEDIA = {
  // ── Videos ───────────────────────────────────────────────────────────
  heroVideo: cldVideo("Site_background_high_res_q8imar"),
  pruningVideo: cldVideo("March_2026_-_Pruning_v8bhev"),
  newGrowthVideo: cldVideo("April_2026_-_First_stages_of_growth_qooe2p"),
  darlingBudsVideo: cldVideo("Darling_Buds_of_May_tltnj7"),
  tasterVideo: cldVideo("Terroir_Taster_1_osftfn"),

  // ── Photography (large hero / gallery images) ────────────────────────
  img_8254: cldImage("IMG_8254_lbvp11"),
  img_0568: cldImage("IMG_0568_iuh0rh"),
  img_1587: cldImage("IMG_1587_pswet8"),
  img_9230: cldImage("IMG_9230_sqwbmk"),
  img_3035: cldImage("IMG_3035_rzaigk"),
  img_2968: cldImage("IMG_2968_dhiskw"),
  img_5447: cldImage("IMG_5447_gmfylm"),
  img_7904: cldImage("IMG_7904_hett6a"),
  img_5391: cldImage("IMG_5391_b99uez"),
  img_4969: cldImage("IMG_4969_14.57.59_qdc75f"),
  img_8460: cldImage("IMG_8460_ozmmhy"),
  img_7315: cldImage("IMG_7315_kmqr3c"),
  img_5824: cldImage("IMG_5824_habb06"),
  img_4561: cldImage("IMG_4561_ivpsnt"),
  img_3793: cldImage("IMG_3793_ansv9j"),
  img_0692: cldImage("IMG_0692_dyztc3"),
  img_9197: cldImage("IMG_9197_x6pbwj"),
  img_7170: cldImage("IMG_7170_nckbft"),
  img_2646: cldImage("IMG_2646_m2cgf3"),
  img_8152: cldImage("IMG_8152_xqs6g8"),
  img_3022: cldImage("IMG_3022_gg4dez"),
  img_4310: cldImage("IMG_4310_uxfvkw"),
  img_8191: cldImage("IMG_8191_zznriv"),
  img_1586: cldImage("IMG_1586_exnvbn"),
  img_7985: cldImage("IMG_7985_shxg15"),
  img_5207: cldImage("IMG_5207_zq34rb"),
  carcassonne: cldImage("Carcassonne_nqblmy"),
  fontfroide: cldImage("fontfroide_t4rate"),
  autumnHarvest: cldImage("28_10_07_-_The_autumn_of_autumn_2007_098_hgzrd7"),
  image00013: cldImage("image00013_s3jdqp"),
  image00015: cldImage("image00015_v9mdzm"),
} as const;

export type MediaKey = keyof typeof MEDIA;
