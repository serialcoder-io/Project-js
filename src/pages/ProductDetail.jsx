import { Link, useParams } from 'react-router'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { categories } from '@/data/categories'
import { products } from '@/data/products'
import { CURRENCY } from '@/lib/config'

function formatPrice(price) {
  return `${CURRENCY} ${price.toLocaleString('en-IN')}`
}

export default function ProductDetail() {
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
    // TODO: call addToCart(product.id) from the cart context once available.
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Link className="text-sm font-medium text-primary hover:underline" to="/catalog">Back to catalog</Link>
      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="overflow-hidden rounded-xl border bg-muted">
          <img className="aspect-square w-full object-cover" src={product.image} alt={product.name} />
        </div>
        <div className="flex flex-col items-start justify-center">
          {category && <Badge variant="secondary">{category.name}</Badge>}
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{product.description}</p>
          <p className="mt-7 text-2xl font-semibold text-primary">{formatPrice(product.price)}</p>
          <Button className="mt-7" onClick={handleAddToCart}>Add to cart</Button>
        </div>
      </div>
    </div>
  )
}
