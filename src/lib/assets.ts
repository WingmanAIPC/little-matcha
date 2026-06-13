/**
 * Central asset manifest for Little Matcha.
 *
 * Every image/video on the site is declared here with the exact Higgsfield
 * prompt used to generate it. While `src` is null, components render an
 * on-brand gradient placeholder. Once a Higgsfield asset is saved into
 * /public/images or /public/videos, set `src` to its path and it appears.
 *
 * Aspect ratios map to Higgsfield's supported sizes (16:9, 9:16, 1:1, 4:5, 3:2).
 */

export type AssetKind = "image" | "video";
export type Tone = "matcha" | "hojicha" | "clay" | "cream" | "deep";

export interface BrandAsset {
  id: string;
  kind: AssetKind;
  /** Final public path once generated, e.g. "/videos/hero.mp4". null = placeholder. */
  src: string | null;
  /** Poster image for videos. */
  poster?: string | null;
  alt: string;
  /** Prompt fed to Higgsfield to generate this asset. */
  prompt: string;
  aspect: string;
  tone: Tone;
}

const A = <T extends Record<string, BrandAsset>>(a: T) => a;

export const videos = A({
  hero: {
    id: "hero",
    kind: "video",
    src: "/videos/hero.mp4",
    poster: "/images/story-whisk.jpg",
    alt: "Matcha being whisked in a ceramic bowl",
    aspect: "16/9",
    tone: "matcha",
    prompt:
      "Cinematic slow-motion close-up of vivid jade-green matcha being whisked with a bamboo chasen in a handmade ceramic bowl, fine emerald foam forming, soft steam rising, bright airy minimalist Japanese café, warm morning sunlight and gentle shadows, shallow depth of field, film grain, calm and meditative, 4k.",
  },
  ritual: {
    id: "ritual",
    kind: "video",
    src: "/videos/ritual.mp4",
    poster: "/images/gallery-foam.jpg",
    alt: "Macro of a bamboo whisk frothing matcha",
    aspect: "16/9",
    tone: "deep",
    prompt:
      "Extreme macro slow-motion of a bamboo chasen whisking bright green matcha, tiny bubbles and silky foam swirling, water droplets, dramatic soft side light on a dark stone surface, luxurious and tactile, cinematic, shallow focus.",
  },
  pour: {
    id: "pour",
    kind: "video",
    src: "/videos/pour.mp4",
    poster: "/images/drink-og.jpg",
    alt: "Matcha poured over ice with milk swirling",
    aspect: "9/16",
    tone: "matcha",
    prompt:
      "Slow-motion vertical shot of creamy oat milk swirling into a tall glass of iced matcha, jade-green and cream marbling together over clear ice cubes, condensation on glass, bright daylight, clean cream-colored background, satisfying and fresh, cinematic food cinematography.",
  },
  cafe: {
    id: "cafe",
    kind: "video",
    src: "/videos/cafe.mp4",
    poster: "/images/gallery-counter.jpg",
    alt: "Cozy matcha café interior",
    aspect: "16/9",
    tone: "cream",
    prompt:
      "Slow gentle pan across a cozy minimalist matcha café interior, warm wood, cream walls, hanging plants, ceramic cups on a counter, soft natural window light, a few patrons softly blurred in the background, inviting and tranquil, warm color grade, cinematic.",
  },
  seasonal: {
    id: "seasonal",
    kind: "video",
    src: "/videos/seasonal.mp4",
    poster: "/images/drink-seasonal.jpg",
    alt: "Seasonal matcha latte with cream",
    aspect: "16/9",
    tone: "clay",
    prompt:
      "Slow-motion close-up of a seasonal strawberry matcha latte being built in a clear glass, layers of pink strawberry, white cream, and green matcha, a swirl of foam on top, fresh strawberry garnish, soft pastel café lighting, dreamy and appetizing, cinematic.",
  },
});

export const images = A({
  storyWhisk: {
    id: "storyWhisk",
    kind: "image",
    src: "/images/story-whisk.jpg",
    alt: "Hands whisking matcha in a ceramic bowl",
    aspect: "4/5",
    tone: "matcha",
    prompt:
      "Editorial photograph of hands gently whisking bright green matcha with a bamboo chasen in a rustic glazed ceramic bowl, warm natural light, linen and wood tones, steam rising, intimate and artisanal, shallow depth of field, film look.",
  },
  farm: {
    id: "farm",
    kind: "image",
    src: "/images/farm.jpg",
    alt: "Tea fields in Shizuoka, Japan",
    aspect: "3/2",
    tone: "deep",
    prompt:
      "Misty early morning over neat rows of emerald green tea bushes on rolling hills in Shizuoka Japan, soft fog, distant mountains, golden sunrise light, serene and lush, fine-art landscape photography.",
  },
  drinkOG: {
    id: "drinkOG",
    kind: "image",
    src: "/images/drink-og.jpg",
    alt: "OG matcha latte",
    aspect: "1/1",
    tone: "matcha",
    prompt:
      "Top-tier product photo of an iced OG matcha latte in a clear glass, distinct layers of jade-green matcha and creamy white milk, ice cubes, condensation, clean cream-colored backdrop, soft studio light, minimal styling, crisp and appetizing.",
  },
  drinkHojicha: {
    id: "drinkHojicha",
    kind: "image",
    src: "/images/drink-hojicha.jpg",
    alt: "Hojicha latte",
    aspect: "1/1",
    tone: "hojicha",
    prompt:
      "Product photo of a hojicha latte in a clear glass, warm amber and toasted-caramel tones layered with cream, delicate foam, cozy warm light, cream backdrop, minimal styling, inviting and nutty.",
  },
  drinkGenmaicha: {
    id: "drinkGenmaicha",
    kind: "image",
    src: "/images/drink-genmaicha.jpg",
    alt: "Genmaicha latte",
    aspect: "1/1",
    tone: "matcha",
    prompt:
      "Product photo of a genmaicha latte in a clear glass, gentle green-gold tones with creamy milk, toasted rice garnish, soft natural light, cream backdrop, minimal styling, comforting and toasty.",
  },
  drinkSeasonal: {
    id: "drinkSeasonal",
    kind: "image",
    src: "/images/drink-seasonal.jpg",
    alt: "Strawberry shortcake matcha",
    aspect: "1/1",
    tone: "clay",
    prompt:
      "Product photo of a strawberry shortcake matcha latte in a clear glass, layers of pink strawberry compote, white whipped cream, and vivid green matcha, fresh strawberry on top, pastel styling, bright soft light, playful and decadent.",
  },
  drinkCoconut: {
    id: "drinkCoconut",
    kind: "image",
    src: "/images/drink-coconut.jpg",
    alt: "Coconut matcha cloud latte",
    aspect: "1/1",
    tone: "cream",
    prompt:
      "Product photo of a coconut matcha cloud latte in a clear glass, creamy white coconut foam piled high over jade-green matcha, toasted coconut flakes on top, tropical and dreamy, cream backdrop, soft natural light.",
  },
  drinkBanana: {
    id: "drinkBanana",
    kind: "image",
    src: "/images/drink-banana.jpg",
    alt: "Banana crème brûlée matcha",
    aspect: "1/1",
    tone: "hojicha",
    prompt:
      "Product photo of a banana crème brûlée matcha latte in a clear glass, layers of caramelized banana and custard cream over vivid green matcha, brûlée sugar crust on top, warm golden tones, cream backdrop, cozy soft light.",
  },
  productPowder: {
    id: "productPowder",
    kind: "image",
    src: "/images/product-powder.jpg",
    alt: "Tin of ceremonial matcha powder",
    aspect: "1/1",
    tone: "matcha",
    prompt:
      "Minimal product photo of a small kraft and sage-green tin of ceremonial-grade matcha powder with a spoonful of vivid green powder spilling beside it, cream paper background, soft daylight, premium boutique branding, crisp and clean.",
  },
  productWhisk: {
    id: "productWhisk",
    kind: "image",
    src: "/images/product-whisk.jpg",
    alt: "Bamboo chasen whisk and holder",
    aspect: "1/1",
    tone: "cream",
    prompt:
      "Minimal product photo of a handcrafted bamboo chasen matcha whisk resting on a ceramic whisk holder, cream paper background, soft daylight, gentle shadows, artisanal and elegant.",
  },
  productBowl: {
    id: "productBowl",
    kind: "image",
    src: "/images/product-bowl.jpg",
    alt: "Handmade ceramic matcha bowl",
    aspect: "1/1",
    tone: "cream",
    prompt:
      "Minimal product photo of a handmade matte sage-green ceramic chawan matcha bowl, subtle wabi-sabi texture, cream paper background, soft daylight, fine craft, elegant minimalism.",
  },
  productKit: {
    id: "productKit",
    kind: "image",
    src: "/images/product-kit.jpg",
    alt: "Home matcha starter kit flatlay",
    aspect: "1/1",
    tone: "matcha",
    prompt:
      "Overhead flatlay of a complete home matcha starter kit on cream linen: tin of matcha powder, bamboo whisk, ceramic bowl, bamboo scoop, and a hand-sewn fabric charm, soft natural light, neatly arranged, boutique product photography.",
  },
  classTable: {
    id: "classTable",
    kind: "image",
    src: "/images/class-table.jpg",
    alt: "Matcha class table setup",
    aspect: "3/2",
    tone: "matcha",
    prompt:
      "Overhead photograph of a matcha class table set for four, ceramic bowls, bamboo whisks, tins of matcha, small dishes of green powder, warm wood table, hands of participants mid-whisk, bright natural light, community and craft, editorial.",
  },
  galleryFoam: {
    id: "galleryFoam",
    kind: "image",
    src: "/images/gallery-foam.jpg",
    alt: "Close-up of matcha foam",
    aspect: "1/1",
    tone: "matcha",
    prompt:
      "Macro photograph of the silky surface of freshly whisked matcha, fine emerald foam and micro-bubbles, soft directional light, abstract and luxurious, vivid green.",
  },
  galleryCounter: {
    id: "galleryCounter",
    kind: "image",
    src: "/images/gallery-counter.jpg",
    alt: "Café counter with drinks",
    aspect: "1/1",
    tone: "cream",
    prompt:
      "Warm lifestyle photo of a café counter with two iced matcha lattes, a small vase of dried flowers, ceramic cups, cream and sage palette, soft window light, cozy and inviting.",
  },
});

export const allAssets: BrandAsset[] = [
  ...Object.values(videos),
  ...Object.values(images),
];
