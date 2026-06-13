import { images } from "./assets";

export interface Product {
  name: string;
  tagline: string;
  description: string;
  price: string;
  assetId: keyof typeof images;
  badge?: string;
}

export const products: Product[] = [
  {
    name: "Single-Origin Matcha",
    tagline: "Our house label",
    description:
      "Stone-milled ceremonial matcha from our family farm in Shizuoka. The exact tin we whisk behind the counter.",
    price: "$28",
    assetId: "productPowder",
    badge: "Shizuoka, Japan",
  },
  {
    name: "Bamboo Whisk · Chasen",
    tagline: "80-prong",
    description:
      "A traditional hand-cut bamboo chasen for a silky, even froth every time.",
    price: "$24",
    assetId: "productWhisk",
  },
  {
    name: "Ceramic Bowl · Chawan",
    tagline: "Wabi-sabi glaze",
    description:
      "A wide, hand-glazed sage bowl with just enough room to whisk. Every one is a little different.",
    price: "$38",
    assetId: "productBowl",
  },
  {
    name: "Home Ritual Kit",
    tagline: "Everything to begin",
    description:
      "Matcha tin, whisk, bowl, bamboo scoop, and a hand-sewn charm by Cindy — the whole ritual, boxed.",
    price: "$72",
    assetId: "productKit",
    badge: "Best value",
  },
];
