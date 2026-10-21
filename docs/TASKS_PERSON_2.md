# Person 2 — Cart and persistence

Implemented: shared `CartProvider` and `useCart`, `/cart`, header item counter,
product detail add action, and checkout integration using the shared cart.

The context exposes `cart`, `lines`, `total`, `itemCount`, `storageError`,
`addToCart(productId)`, `updateQuantity(productId, quantity)`,
`removeFromCart(productId)`, and `clearCart()`.

Only `[{ productId, quantity }]` is saved under `cart` in localStorage.
Invalid saved data resets the cart. Unknown ids and unavailable products are
ignored. Duplicate lines are merged and quantities are limited to stock.
If browser storage fails, the cart still works in memory and the cart page
displays a message. Successful simulated checkout clears the shared state
and removes the saved cart. Form data is never persisted.

The requested shop categories are Phones, PCs and AirPods. Product prices are
demonstration data. Local SVG illustrations are shared by category.

Integration changed shared App, Header, Home, product details, checkout, data
and the HTML title. No catalog implementation was added: search, category
filtering, pagination and product cards remain Person 1's scope.

## Manual verification

1. Open `/product/1`, add twice, check the header shows 2.
2. Open `/cart`, check the line quantity is 2 and total is Rs 71,800.
3. Reload and check the cart is restored.
4. Decrease to 1; the decrease button must be disabled. Increase to stock;
   the increase button must be disabled.
5. Add another product and verify line subtotals and total; remove a line.
6. Complete `/checkout` using fictitious information only. The header must
   show 0, `/cart` must be empty and localStorage must contain no `cart` key.
7. Test invalid JSON, a non-array value, invalid quantities, unknown ids and
   duplicate ids in localStorage, then reload.
8. Check cart, details and checkout at 375 px and desktop width.

The installed stack requires Node >=22.22.0; use a supported Node LTS.
