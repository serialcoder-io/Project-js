import { Link } from 'react-router'

import { Badge } from '@/components/ui/badge'
import { categories } from '@/data/categories'
import { formatPrice } from '@/lib/format'

export function ProductCard({ product }) {
  const category = categories.find((item) => item.id === product.category_id)
  const inStock = product.quantity > 0

  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:border-primary/40 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      <div className="relative bg-muted">
        <img className="aspect-square w-full object-contain p-6" src={product.image} alt={product.name} loading="lazy" />
        {!inStock && <Badge variant="secondary" className="absolute top-3 left-3">Out of stock</Badge>}
      </div>
      <div className="flex flex-1 flex-col border-t p-4">
        {category && <p className="text-xs font-medium tracking-wide text-primary uppercase">{category.name}</p>}
        <h3 className="mt-1 font-medium leading-snug group-hover:text-primary">{product.name}</h3>
        <p className="mt-auto pt-3 font-semibold tabular-nums">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
