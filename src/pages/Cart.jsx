import { Link } from 'react-router'

import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { CURRENCY } from '@/lib/config'

const formatPrice = (price) => `${CURRENCY} ${price.toLocaleString('en-IN')}`

export default function Cart() {
  const { lines, itemCount, total, storageError, updateQuantity, removeFromCart, clearCart } = useCart()

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Your cart</h1>
      {storageError && <p role="alert" className="mt-4 text-sm text-destructive">Your browser could not save the cart. It will only be kept until you reload this page.</p>}
      {lines.length === 0 ? (
        <div className="mt-8 rounded-xl border bg-card p-6 sm:p-10">
          <h2 className="text-xl font-semibold">Your cart is empty</h2>
          <p className="mt-3 text-muted-foreground">Add a phone, PC or AirPods to get started.</p>
          <Button asChild className="mt-6"><Link to="/catalog">Browse the catalog</Link></Button>
          <Link to="/" className="mt-4 block text-sm text-primary hover:underline">View featured products</Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <section aria-label="Cart items" className="min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4">
              <p aria-live="polite">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
              <Button variant="ghost" onClick={clearCart}>Clear cart</Button>
            </div>
            {lines.map(({ product, quantity, subtotal }) => (
              <article key={product.id} className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 border-b py-6 sm:grid-cols-[6rem_minmax(0,1fr)]">
                <Link to={`/product/${product.id}`}><img src={product.image} alt={product.name} className="aspect-square w-full rounded-lg border bg-muted object-contain" /></Link>
                <div className="min-w-0">
                  <Link to={`/product/${product.id}`} className="font-semibold hover:underline">{product.name}</Link>
                  <p className="mt-2 text-sm text-muted-foreground">{formatPrice(product.price)} each</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                    <div role="group" aria-label={`Quantity for ${product.name}`} className="flex items-center gap-2">
                      <Button className="size-11" variant="outline" disabled={quantity <= 1} aria-label={`Decrease quantity of ${product.name}`} onClick={() => updateQuantity(product.id, quantity - 1)}>−</Button>
                      <span className="min-w-8 text-center tabular-nums" aria-label={`Quantity: ${quantity}`}>{quantity}</span>
                      <Button className="size-11" variant="outline" disabled={quantity >= product.quantity} aria-label={`Increase quantity of ${product.name}`} onClick={() => updateQuantity(product.id, quantity + 1)}>+</Button>
                    </div>
                    <p className="font-semibold tabular-nums">{formatPrice(subtotal)}</p>
                  </div>
                  {quantity >= product.quantity && <p className="mt-3 text-sm text-muted-foreground">Stock limit reached ({product.quantity}).</p>}
                  <Button variant="link" className="mt-2 px-0" aria-label={`Remove ${product.name} from cart`} onClick={() => removeFromCart(product.id)}>Remove</Button>
                </div>
              </article>
            ))}
            <Link to="/catalog" className="mt-6 inline-block text-sm font-medium text-primary hover:underline">Continue shopping</Link>
          </section>
          <aside aria-label="Cart summary" className="rounded-xl border bg-card p-6 lg:sticky lg:top-6">
            <h2 className="text-xl font-semibold">Summary</h2>
            <div className="mt-6 flex justify-between gap-4 border-t pt-5 font-semibold" aria-live="polite"><span>Total</span><span>{formatPrice(total)}</span></div>
            <Button asChild className="mt-6 w-full"><Link to="/checkout">Continue to checkout</Link></Button>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">Educational project. Checkout is simulated and no payment is processed.</p>
          </aside>
        </div>
      )}
    </div>
  )
}
