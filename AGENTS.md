# AGENTS.md

Guidelines for any AI agent working on this repository. Keep this file short and up to date.

## Project

Group project (3 people): a front-end only online shop for computer peripherals (keyboards, mice, headsets, monitors). Pure React: **no backend, no database, no API**. Data lives in JavaScript arrays. The cart is persisted in `localStorage`. Checkout is simulated (no real payment, no order saved).

For the initial setup, see `SETUP.md`.

## Stack

- React + Vite, **JavaScript** (`.jsx`), no TypeScript
- Tailwind CSS v4
- shadcn/ui (components live in `src/components/ui`, add them with `npx shadcn@latest add <name>`, do not rewrite them by hand)
- react-router-dom

Do not add a dependency without a clear reason and without telling the user.

## Versions and documentation

- Always use the **latest stable version** of each library, as long as it is compatible with the others in the stack. No beta, alpha, RC or canary versions.
- Before installing, configuring or using a library or API, **check its official documentation** and follow the recommended practices. Do not rely on memory: these tools change often.
- Do not use deprecated APIs, options or patterns.
- If the docs contradict something written in this repository's guidelines, follow the docs and tell the user.
- When upgrading or adding a dependency, check compatibility with the rest of the stack first.

## Commands

```bash
npm run dev      # start the dev server
npm run build    # production build, must pass
npm run lint     # must report no errors
```

## Structure

```
src/
  components/   # shared components (Header, Footer, ProductCard...)
    ui/         # shadcn components
  context/      # shared React state (cart)
  data/         # categories.js, products.js
  lib/          # utils.js, config.js
  pages/        # one file per route
```

Use the `@/` alias for imports (`@/components/...`, `@/data/...`).

## Data contracts (shared agreements, do not change unilaterally)

Category: `{ id, name, image }`

Product: `{ id, name, description, price, quantity, image, category_id }`

- All `id` values are numbers. `price` is a number in rupees and `quantity` is a non-negative number of units in stock. A quantity of `0` means the product is out of stock.
- One single currency, defined in `src/lib/config.js` (`CURRENCY`).
- Product objects are **never duplicated** in `localStorage`.

Cart (state and `localStorage` key `cart`):

```js
[{ productId: 1, quantity: 2 }]
```

Cart functions exposed by the shared React Context:

```js
addToCart(productId)
updateQuantity(productId, quantity)   // minimum quantity is 1
removeFromCart(productId)
clearCart()
```

Cart rules: ignore ids that do not exist in `products`, and restore an empty cart if the saved data is invalid. Products are looked up from `products.js` using the saved ids.

## Routes

Defined together by the group. Use English paths (`/`, `/catalog`, `/product/:id`, `/cart`, `/checkout`).

## Code conventions

- Function components and hooks only.
- One component per file, file name in PascalCase (`ProductCard.jsx`).
- Keep components small and readable. Prefer simple code over clever code.
- Comment only when the intent is not obvious. No narrating comments.
- No unused imports, no dead code, no `console.log` left behind.
- Do not edit files outside your assigned scope without saying so (three people work in parallel, avoid merge conflicts on shared files such as `App.jsx`, `index.css`, `data/`).

## UI conventions

- Mobile first, must work on phones and desktops.
- Style with Tailwind utility classes and shadcn components. Colors come from the CSS variables in `index.css`, never hard-coded hex values in components.
- Sober and consistent look: one accent color, thin borders, light shadows, regular spacing.
- No emojis in the UI, no gradients, no marketing filler text. Short, natural English copy.

## Before finishing a task

1. `npm run build` and `npm run lint` pass.
2. The pages you touched work at ~375 px and on desktop.
3. Give a short summary of what changed and any decision the user should review.
