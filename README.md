# Little Matcha

A new marketing site for **Little Matcha** — a hand-whisked, single-origin matcha café in Covington, KY.

Built with **Next.js 16 (App Router) + React 19 + Tailwind CSS v4**, deployed on **Vercel**.

- **Live:** https://little-matcha.vercel.app

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Deploy

The project is linked to the Vercel project `little-matcha`.

```bash
npx vercel deploy --prod --yes --scope jakeos-projects-5bdc407b
```

## Project structure

```
src/
  app/
    layout.tsx        # fonts (Fraunces + Manrope), metadata
    globals.css       # brand tokens, colors, animations
    page.tsx          # composes all sections
  components/
    Nav, Logo, Marquee, Media, Reveal, NewsletterForm
    sections/         # Hero, Story, Ritual, Menu, Seasonal,
                      # Shop, Classes, Social, Visit, Footer
  lib/
    assets.ts         # asset manifest + Higgsfield prompts
    menu.ts           # drink menu data
    products.ts       # retail products
public/
  images/             # Higgsfield-generated images
  videos/             # Higgsfield-generated videos
```

## Image & video pipeline (Higgsfield)

Every photo/video is declared in [`src/lib/assets.ts`](src/lib/assets.ts) with the
exact prompt used to generate it. Until a real file is added, each slot renders an
on-brand gradient placeholder — so the layout always looks finished.

**To drop in a generated asset:**

1. Generate it in Higgsfield using the `prompt` + `aspect` from `assets.ts`.
2. Save the file to `public/images/<id>.jpg` or `public/videos/<id>.mp4`.
3. Set that asset's `src` in `assets.ts`, e.g.:

   ```ts
   hero: { ...; src: "/videos/hero.mp4"; poster: "/images/hero-poster.jpg" }
   ```

4. Redeploy.

### Asset slots

| Type   | ID             | Used in            | Aspect |
| ------ | -------------- | ------------------ | ------ |
| video  | `hero`         | Hero background    | 16/9   |
| video  | `ritual`       | "The craft" band   | 16/9   |
| video  | `pour`         | Social reel        | 9/16   |
| video  | `cafe`         | Visit ambiance     | 16/9   |
| video  | `seasonal`     | Seasonal spotlight | 16/9   |
| image  | `storyWhisk`   | Story              | 4/5    |
| image  | `farm`         | Story (Shizuoka)   | 3/2    |
| image  | `drinkOG`      | Menu               | 1/1    |
| image  | `drinkHojicha` | Menu               | 1/1    |
| image  | `drinkGenmaicha`| Menu              | 1/1    |
| image  | `drinkSeasonal`| Menu / Social      | 1/1    |
| image  | `productPowder`| Shop               | 1/1    |
| image  | `productWhisk` | Shop               | 1/1    |
| image  | `productBowl`  | Shop               | 1/1    |
| image  | `productKit`   | Shop / Social      | 1/1    |
| image  | `classTable`   | Classes            | 3/2    |
| image  | `galleryFoam`  | Social             | 1/1    |
| image  | `galleryCounter`| Social            | 1/1    |

## Content sources

- Order online / retail: https://littlematchacincy.square.site/
- Instagram: https://www.instagram.com/littlematcha.cincy/
- Location: 332 Scott St, Covington, KY 41011

Menu prices and seasonal flavors are representative and rotate every two weeks —
update them in `src/lib/menu.ts`.
