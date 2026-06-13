export interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: string;
  assetId?: keyof typeof import("./assets").images;
}

export interface MenuCategory {
  id: string;
  title: string;
  blurb: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: "signatures",
    title: "The OG Line",
    blurb:
      "Our daily staples — single-origin and hand-whisked to order. Hot or iced, with your choice of milk.",
    items: [
      {
        name: "OG Matcha",
        description:
          "Just matcha and milk. Smooth, grassy, and perfectly balanced — the one we built the shop on.",
        price: "$6",
        badge: "Fan favorite",
        assetId: "drinkOG",
      },
      {
        name: "OG Hojicha",
        description:
          "Roasted green tea with a warm, nutty, almost-caramel finish. Naturally low in caffeine.",
        price: "$6",
        assetId: "drinkHojicha",
      },
      {
        name: "OG Genmaicha",
        description:
          "Matcha blended with toasted brown rice. Toasty, comforting, and a little nostalgic.",
        price: "$6",
        assetId: "drinkGenmaicha",
      },
    ],
  },
  {
    id: "coffee",
    title: "Coffee & Crossovers",
    blurb: "For the days you want a little more kick.",
    items: [
      {
        name: "Dirty Matcha",
        description:
          "Our OG matcha pulled over a shot of espresso. The best of both worlds.",
        price: "$7",
        badge: "Best of both",
      },
      {
        name: "Viet Coffee",
        description:
          "Strong, sweet Vietnamese-style coffee with condensed milk. A house staple.",
        price: "$5.50",
      },
      {
        name: "Drip Coffee",
        description: "Simple, well-pulled, and always fresh.",
        price: "$4",
      },
    ],
  },
  {
    id: "seasonal",
    title: "Seasonal Rotations",
    blurb:
      "Three new flavors every two weeks, built around what's fresh. Here today, gone next week — come catch them while they last.",
    items: [
      {
        name: "Strawberry Shortcake Matcha",
        description:
          "House strawberry compote, whipped cream, and vivid matcha. Dessert in a glass.",
        price: "$7.50",
        badge: "Seasonal",
        assetId: "drinkSeasonal",
      },
      {
        name: "Coconut Matcha Cloud",
        description: "Creamy, dreamy, and a little tropical.",
        price: "$7.50",
        badge: "Seasonal",
        assetId: "drinkCoconut",
      },
      {
        name: "Banana Crème Brûlée Matcha",
        description: "Caramelized banana and custard notes folded into matcha.",
        price: "$7.50",
        badge: "Seasonal",
        assetId: "drinkBanana",
      },
    ],
  },
];

export const milks = ["Whole", "Oat", "Coconut", "Almond"];

export const pastFavorites = [
  "Dubai Matcha",
  "Pistachio Matcha",
  "Biscoff Matcha",
  "Maple Crème Matcha",
  "The Summer I Met Matcha",
  "Pumpkin Spice Matcha",
];
