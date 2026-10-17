# TASKS_PERSON_3.md — Home, product details, checkout, legal pages

You are implementing **Person 3's part** of the project. Read `../AGENTS.md` first and follow it (stack, conventions, data contracts, official docs, latest stable versions, no questions about things already specified here).

## Scope

Build:

1. Home page (finalize the temporary one)
2. Product details page
3. Simulated checkout page
4. Three legal pages: Legal Notice, Privacy Policy, Terms of Use
5. An **empty** catalog page (structure only)

Do **not** build, and do not create files for:

- The cart context, the cart page, the cart counter in the header, or any cart feature: no add logic, no quantity change, no removal, no persistence logic. This is Person 2's work.
- Anything in the catalog: no product list, no search, no filter, no pagination. This is Person 1's work.
- Do not modify `../src/data/products.js` or `../src/data/categories.js`.

Do not commit or push. Leave the changes in the working tree.

## Routes

Register these in `App.jsx` (English paths):

| Path | Page |
|------|------|
| `/` | Home |
| `/catalog` | Catalog (empty placeholder) |
| `/product/:id` | Product details |
| `/checkout` | Checkout |
| `/legal-notice` | Legal Notice |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms of Use |
| `*` | Minimal "Page not found" page with a link to Home |

There is no `/cart` route yet (Person 2 will add it). Keep the existing navigation links.

## 1. Home page

**Rewrite `../src/pages/Home.jsx` from scratch.** The current home page was only a throwaway test page and was not good. Do not base the new one on it: do not reuse its layout, markup, structure or copy. Delete its content first, then design a real home page for a computer peripherals shop (keyboards, mice, headsets, monitors).

Content, in this order:

1. **Hero.** Not a giant centered title over a blank background. Use an asymmetric layout on desktop: concise text and a button to `/catalog` on one side, strong visuals from the data on the other (for example a large featured product image, or a small mosaic of 2 to 3 category images). On phones, stack it with the text first. The headline and subtext must be specific to the products (desks, setups, gaming, work, what you actually sell), written in natural English, short, with no filler.
2. **Shop by category.** The 4 categories from `categories.js` (image, name), each linking to `/catalog` (no category filter, that belongs to Person 1). Do not make four identical boxes in a row: use a varied layout (for example one larger tile and three smaller ones on desktop, 2 columns on phones). Labels sit on a solid bar or beside the image, not on a gradient overlay.
3. **Featured products.** 4 to 6 products from `products.js`, chosen so that every category is represented: image, name, category, price with `CURRENCY`, link to `/product/:id`. Build the cards in a small local component under `src/components/home/`. Do **not** create or use a shared `ProductCard` (Person 1 owns it).
4. **About this project.** A short, honest strip saying this is an educational project made for academic purposes and nothing is sold, with a link to the Terms of Use. No invented claims, statistics, reviews, delivery promises or guarantees.

Design notes:

- The images come from picsum.photos, so they are random photos and will not match the products. The design must still look good with them: fixed aspect ratios, `object-cover`, a neutral background behind them, and do not let the layout depend on what is in the pictures.
- Strong visual hierarchy: a clear type scale, generous whitespace, consistent spacing between sections. Prefer a confident, editorial look over a template of repeated rounded cards.
- Header and Footer are shared: you may restyle them lightly so they match the new home page, but keep their structure and links, and add the three legal links to the footer.
- Responsive: designed for ~375 px first, then tablet and desktop. Follow the visual direction in `../AGENTS.md` (one accent color from the CSS variables, no emojis, no gradients).

## 2. Product details page (`/product/:id`)

- Read `id` from the URL, convert it to a number, find the product in `products.js`.
- Show: image, name, description, category name (looked up from `categories.js`, shown as a shadcn `Badge`), price with `CURRENCY`.
- An "Add to cart" button. Person 2's `addToCart(productId)` does not exist yet, so the button calls a single `handleAddToCart` function in the page that does nothing for now, with one short `TODO` comment saying to call `addToCart(product.id)` from the cart context once available. Do not write to `localStorage` here and do not add a quantity selector.
- If the id does not match any product (or is not a number): show a clear "Product not found" message with a link to `/catalog`.
- A "Back to catalog" link.
- Layout: image and info side by side on desktop, stacked on phones.

## 3. Checkout page (`/checkout`)

### Reading the cart (read-only)

The cart is stored in `localStorage` under the key `cart` as `[{ productId: 1, quantity: 2 }]`. The user will add test data manually, so the checkout reads it directly.

Create `src/lib/checkoutCart.js` (a temporary stand-in for Person 2's context) exporting:

- `getCartLines()`: reads and parses `cart` in a `try/catch`; if the data is missing, not valid JSON, or not an array, return an empty list. Skip any entry whose `productId` does not exist in `products.js` or whose `quantity` is not a positive integer. Return `[{ product, quantity, subtotal }]` with products looked up by id (never store product objects in `localStorage`).
- `getCartTotal(lines)`: sum of the subtotals.
- `clearStoredCart()`: removes the `cart` key from `localStorage`.

Add a short comment at the top of the file saying these functions will be replaced by the shared cart context and `clearCart()` when the branches are merged.

### Summary

Read-only recap of each line: image, name, quantity, unit price, line subtotal, and the cart total. **No buttons to change quantity or remove a line.** Add a link "Back to cart" pointing to `/cart`.

### Empty cart

If there are no valid lines, show an "empty cart" message with a link to `/catalog`, and do not show the form. The order cannot be submitted.

### Form

Fields (all required):

- Personal: first name, last name, email, phone, address
- Payment (fictitious): cardholder name, card number, expiry date (MM/YY), security code (3 digits)

Validation on submit, with an error message under each invalid field (use `noValidate` on the form and your own messages; add `aria-invalid` and link errors with `aria-describedby`; every input has a `<label>`; clear a field's error when the user edits it):

- Required fields: not empty after trimming.
- Email: simple format check (`something@something.something`).
- Phone: only digits, spaces, `+`, `-`, `(`, `)`, with 7 to 15 digits.
- Card number: 16 digits (spaces allowed). No Luhn check, the data is fictitious.
- Expiry: `MM/YY` format with a month from 01 to 12. Do not check that the date is in the future.
- Security code: exactly 3 digits.

Payment inputs: `autoComplete="off"`, `inputMode="numeric"` where relevant, so browsers do not suggest real card data.

### Educational notice (mandatory)

Create a shared component `src/components/AcademicNotice.jsx` (single source of the text) and use it on the checkout page, **above the payment fields and visible without scrolling past them**, as a shadcn `Alert`. The text, in natural English, must say:

- This website is an educational project made for academic purposes. Nothing is sold and no payment is processed.
- Please enter fictitious information only.
- Do not enter any real information from your bank card: not the name the account is registered under, not the card number, not the expiry date, and not the 3-digit security code. None of the values should match a real card.

Use the same component in the Legal Notice page and the Terms of Use page.

### After a valid submission

- Show a confirmation message instead of the form (thank the user by first name, say clearly that this was a simulated order, nothing was charged and nothing was saved), with links to Home and Catalog.
- Call `clearStoredCart()` so the cart is emptied in `localStorage`, and make the page state reflect the empty cart.
- **Never store, log or send form data anywhere**: no `localStorage`, no `console`, no network request. Discard it from state after confirmation.

## 4. Legal pages

Create `LegalNotice.jsx`, `PrivacyPolicy.jsx`, `TermsOfUse.jsx` in `../src/pages`, sharing a small layout component (title + readable text width).

- Content will be written later. For now each page has its title and one short placeholder sentence.
- **Exception**: Legal Notice and Terms of Use must include the `AcademicNotice` component (the educational/academic disclaimer) in their body.
- Link all three from the footer and, in the checkout page, link Terms of Use near the submit button.

## 5. Catalog page (structure only)

Create `src/pages/Catalog.jsx` rendering only a page title. Nothing else: no data, no logic, no placeholder content. Person 1 will fill it in.

## UI requirements

- Mobile first, works at ~375 px and on desktop.
- Use shadcn/ui components added with the CLI (check the docs for current usage). You may add `label`, `alert`, `separator` if needed. No new library (no form or validation library).
- Same visual direction as `../AGENTS.md`: sober, one accent color from the CSS variables, no emojis, no gradients, short natural English copy.

## How to test manually

Open the browser console and add cart data:

```js
localStorage.setItem("cart", JSON.stringify([{ productId: 1, quantity: 2 }, { productId: 5, quantity: 1 }]))
```

Then go to `/checkout`. For the details page, go to `/product/1`, `/product/24`, `/product/999`, `/product/abc`.

## Final checks

- `npm run build` and `npm run lint` pass; no console errors or warnings.
- Every product from `/product/1` to the last id renders correctly with its image; unknown or non-numeric ids show the "not found" message.
- Checkout with a valid cart, with an empty cart, with invalid JSON in `cart` (for example `"abc"`), and with unknown product ids (ignored).
- Each validation rule works and shows its message; a valid submission shows the confirmation and removes `cart` from `localStorage`.
- No form data appears in `localStorage`, the console or the network tab.
- All pages work at ~375 px and on desktop; footer links reach the three legal pages.
- Short final summary: files created or changed, decisions you took, and anything for Person 2 to wire in (`addToCart` in the details page, `clearCart` and the cart data in the checkout).
