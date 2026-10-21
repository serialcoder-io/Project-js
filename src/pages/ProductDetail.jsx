import { Link, useParams } from 'react-router'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { categories } from '@/data/categories'
import { products } from '@/data/products'
import { CURRENCY } from '@/lib/config'
import { useCart } from '@/context/CartContext'

function formatPrice(price) {
  return `${CURRENCY} ${price.toLocaleString('en-IN')}`
}

export default function ProductDetail() {
  const { addToCart, cart } = useCart()
  const [addedProductId, setAddedProductId] = useState(null)
  const { id } = useParams()
  const productId = Number(id)
  const product = Number.isInteger(productId) ? products.find((item) => item.id === productId) : undefined

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-semibold tracking-tight">Product not found</h1>
        <p className="mt-3 text-muted-foreground">The product you requested is not available.</p>
        <Link className="mt-5 inline-block text-primary hover:underline" to="/catalog">Back to catalog</Link>
      </div>
    )
  }

  const category = categories.find((item) => item.id === product.category_id)

  function handleAddToCart() {
    addToCart(product.id)
    setAddedProductId(product.id)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Link className="text-sm font-medium text-primary hover:underline" to="/catalog">Back to catalog</Link>
      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="overflow-hidden rounded-xl border bg-muted">
          <img className="aspect-square w-full object-contain p-6" src={product.image} alt={product.name} />
        </div>
        <div className="flex flex-col items-start justify-center">
          {category && <Badge variant="secondary">{category.name}</Badge>}
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{product.description}</p>
          <p className="mt-7 text-2xl font-semibold text-primary">{formatPrice(product.price)}</p>
          <p className="mt-4 text-sm text-muted-foreground">{product.quantity > 0 ? `${product.quantity} in stock` : 'Out of stock'}</p>
          <Button className="mt-7" disabled={product.quantity === 0 || (cart.find((entry) => entry.productId === product.id)?.quantity ?? 0) >= product.quantity} onClick={handleAddToCart}>Add to cart</Button>
          <p role="status" className="mt-3 text-sm text-primary">{addedProductId === product.id && <>Added to your cart. <Link to="/cart" className="underline">View cart</Link></>}</p>
        </div>
      </div>
    </div>
  )
}
