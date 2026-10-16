# SETUP.md — "Mini online shop" project initialization

This file describes **today's setup only**. Do not implement the project's features (catalog, cart, checkout): they will be split between three people later.

## Context

Group project: a front-end only online shop for computer peripherals. No backend, no database, no API. Categories and products are plain JavaScript arrays of objects. The cart will later be stored in `localStorage` (out of scope today).

## Required stack

- React (via Vite), in **JavaScript** (`.jsx`), no TypeScript
- Tailwind CSS (v4, Vite plugin)
- shadcn/ui
- react-router-dom (only the base is set up now; the group will complete the routing)

No other dependency without a clear reason.

## Versions and documentation

- Use the **latest stable version** of every tool and library, as long as they are all compatible with each other (React, Vite, Tailwind CSS, shadcn/ui, react-router-dom). No beta, alpha, RC or canary versions.
- If the latest version of one library is not compatible with another, pick the newest combination that works and mention it in the final summary.
- **Always check the official documentation** before installing or configuring anything, and follow its recommended practices: Vite, React, Tailwind CSS, shadcn/ui, React Router.
- The commands and config snippets in this file may be outdated (these tools change often). If the official docs differ from this file, **follow the docs** and note the difference in the final summary.
- Do not use deprecated APIs, options or patterns.

## Goals for today

1. Create the project and install the tools
2. Configure Tailwind CSS and shadcn/ui
3. Create the data (categories and products)
4. Build a temporary, understated home page
5. Check that everything starts and builds

## Step 1 — Project creation

The current folder is already the project folder (it contains `AGENTS.md` and `SETUP.md`). Create the project **in the current folder** (use `.` as the project name, do not nest another folder):

```bash
npm create vite@latest . -- --template react
```

Do not ask the user any question about this. Run the scaffolding non-interactively:

- Check the Vite docs for the non-interactive options (for example a `--no-interactive` flag, if it exists in the current version) and use them.
- If Vite still warns that the directory is not empty, choose **"Ignore files and continue"**. Never overwrite, move or delete `AGENTS.md` or `SETUP.md`.
- If the prompt cannot be avoided, scaffold in a temporary subfolder, move its contents to the project root (without touching `AGENTS.md` and `SETUP.md`), then delete the temporary folder.
- Use the same approach for any other interactive prompt (shadcn init, etc.): pick the choices specified in this file instead of asking the user.

Then install:

```bash
npm install
npm install react-router-dom
```

Clean up the Vite template: delete `App.css`, the demo assets (React/Vite logos), the demo content of `App.jsx`, and the default CSS in `index.css`.

## Step 2 — Tailwind CSS (v4)

```bash
npm install tailwindcss @tailwindcss/vite
```

`vite.config.js`:

```js
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

`jsconfig.json` at the project root (required for the `@` alias and for shadcn):

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

The first line of `src/index.css` must be:

```css
@import "tailwindcss";
```

## Step 3 — shadcn/ui

```bash
npx shadcn@latest init
```

Choose: JavaScript (no TSX), default style, neutral base color. Let the CLI configure `components.json` and the CSS variables in `index.css`.

Add only the components needed for now:

```bash
npx shadcn@latest add button card input badge
```

Other components (select, separator, etc.) will be added later by each person for their own part.

## Step 4 — Folder structure

```
src/
  components/      # shared components (Header, Footer...)
    ui/            # shadcn components (generated, do not rewrite by hand)
  data/
    categories.js
    products.js
  lib/
    utils.js       # provided by shadcn
    config.js      # shop constants (name, currency)
  pages/
    Home.jsx
  App.jsx
  main.jsx
  index.css
```

Do not create empty folders for future features (no `context/`, no catalog/cart pages). The group will add them.

`src/lib/config.js`:

```js
export const SHOP_NAME = "Placeholder name"
export const CURRENCY = "Rs"
```

One single currency across the whole project, and the shop name is defined in one place only.

## Step 5 — Data

### Format

Category:

```js
{ id: 1, name: "Keyboards", image: "https://..." }
```

Product:

```js
{
  id: 1,
  name: "...",
  description: "...",
  price: 2490,         // number, in rupees, no symbol
  image: "https://...",
  category_id: 1,
}
```

Rules:

- `id` values are **always numbers** (never a mix of numbers and strings).
- `price` is a number, never a string.
- `category_id` references the `id` of an existing category.
- Each file exports a named array: `export const categories = [...]` and `export const products = [...]`.

### Content

**4 categories**, with these ids and names:

| id | name |
|----|------|
| 1 | Keyboards |
| 2 | Mice |
| 3 | Headsets |
| 4 | Monitors |

**24 products**, 6 per category (24 products = 3 pages at 8 per page, enough to test pagination later).

- Believable product names that fit each category (switch types and layouts for keyboards, DPI and wired/wireless for mice, wired/wireless and microphone for headsets, size and resolution and refresh rate for monitors). Use generic or fictional brand names, no real brands.
- Descriptions of 1 to 2 sentences in natural English with real specs where relevant. No generic filler like "high quality product".
- Varied, realistic prices in rupees, roughly: keyboards 1,200–6,500, mice 400–4,500, headsets 900–9,000, monitors 8,000–35,000.
- Images: stable URLs from `https://picsum.photos/seed/<unique-word>/600/600` for products and `https://picsum.photos/seed/<unique-word>/800/500` for categories. Use a unique seed per item to avoid duplicates.

## Step 6 — Temporary home page

Goal: a clean, understated base, not a final storefront. The group will rework it.

Content:

- `App.jsx`: `BrowserRouter` with a single route `/` pointing to `Home`. The other routes will be defined together by the group.
- A simple `Header`: shop name on the left, navigation links (Home, Catalog, Cart) on the right. Links may point to `/catalog` and `/cart` even though those pages do not exist yet.
- `Home.jsx`:
  - a short intro section (title + one or two sentences + a "Browse the catalog" button)
  - a grid of the 4 categories read from `categories.js` (image, name)
  - 4 featured products read from `products.js` (use shadcn `Card`: image, name, price with `CURRENCY`)
- A minimal `Footer`.
- Responsive: one column on phones, 2 to 4 columns on larger screens.

### Visual direction — avoid the "AI-generated" look

Do:

- A restrained, consistent palette: a slightly warm light background (not pure white), near-black text, and **one single** accent color (for example a deep green or a muted blue). Define it in the shadcn CSS variables (`--primary`, etc.), not hard-coded in components.
- Simple typography (system font stack or one single Google Font), reasonable sizes.
- Regular spacing, slightly rounded corners, thin borders instead of heavy shadows.
- Short, precise, natural English copy.

Avoid:

- Purple/blue gradients, glassmorphism, glows, heavy shadows
- Emojis in the UI
- Hollow slogans ("Discover excellence", "Your one-stop shop")
- Invented badges, statistics or testimonials
- Gratuitous animations, a giant centered hero followed by three identical benefit cards
- Obvious or verbose code comments (write simple, readable code and comment only when useful)

## Out of scope today

Do not implement: catalog, details, cart or checkout pages, search, filters, pagination, the cart context, `localStorage`. Do not add a backend, tests, CI or a state library.

## Final checks

- `npm run dev` starts without errors or warnings in the console
- `npm run build` succeeds
- `npm run lint` reports no errors (fix unused imports)
- The home page renders correctly at ~375 px wide and on a large screen
- All images from the data files load
- Every product `category_id` matches an existing category

## Git

Initialize the repository if it does not exist yet and make a single commit: `Initialize project (Vite, Tailwind, shadcn, data, temporary home page)`. Do not configure a remote.

## Expected final summary

At the end, give a short recap: the commands to start the project, the resulting folder tree, and any choice or deviation from this file.
