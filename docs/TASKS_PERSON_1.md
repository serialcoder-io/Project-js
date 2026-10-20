# Person 1 — Catalog and search

Implemented: shared `ProductCard`, the `/catalog` page with search by name,
category filter, pagination (8 products per page) and a "no results" message.
Product data comes from the existing `products` array in `src/data/products.js`
(not modified).

## Files

- `src/components/ProductCard.jsx` — image, category, name, price, out of stock badge, link to `/product/:id`
- `src/components/catalog/CatalogSearch.jsx` — search input
- `src/components/catalog/CategoryFilter.jsx` — "All" plus one button per category
- `src/components/catalog/CatalogPagination.jsx` — previous, page numbers, next
- `src/lib/format.js` — `formatPrice(price)` using `CURRENCY`
- `src/pages/Catalog.jsx` — replaces the empty placeholder

## Behaviour

The state lives in the URL: `/catalog?category=2&q=laptop&page=2`.
Search and filter combine. Changing either one goes back to page 1.
An unknown category or an out of range page falls back to a valid value.
Reloading the page or using the back button keeps the current view.

## Integration notes (other people's files, not changed)

- Home category tiles could link to `/catalog?category=<id>` to open the catalog filtered.
- `formatPrice` is duplicated in Home, Cart, Checkout and ProductDetail; they can import it from `@/lib/format`.

## Manual verification

1. `/catalog` shows 8 products and 3 pages; next, previous and page numbers work.
2. Choose PCs: 8 products, 1 page. Type "gaming": 2 products.
3. Choose All with "airpods pro": 2 products. Type "xyz": the no results message appears; "Clear search and filters" resets everything.
4. Go to page 3, then type in the search: the page goes back to 1.
5. Click a card: the product details page opens; back returns to the same catalog view.
6. Check at 375 px (2 columns) and on desktop (4 columns).
