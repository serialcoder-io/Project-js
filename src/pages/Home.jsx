import { Link } from 'react-router'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { categories } from '@/data/categories'
import { products } from '@/data/products'
import { CURRENCY } from '@/lib/config'

const featuredProducts = products.slice(0, 4)

function formatPrice(price) {
  return `${CURRENCY} ${price.toLocaleString('en-IN')}`
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section className="max-w-2xl border-l-2 border-primary pl-5 sm:pl-6">
        <p className="mb-3 text-sm font-medium text-primary">Computer peripherals</p>
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Practical gear for every desk.</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Browse dependable keyboards, mice, headsets, and monitors selected for focused work and everyday play.
        </p>
        <Button asChild className="mt-6" size="lg">
          <Link to="/catalog">Browse the catalog</Link>
        </Button>
      </section>

      <section aria-labelledby="categories-heading" className="mt-14">
        <div className="mb-5 flex items-baseline justify-between gap-4">
          <h2 id="categories-heading" className="font-heading text-2xl font-semibold tracking-tight">Categories</h2>
          <Link className="text-sm text-primary hover:underline" to="/catalog">View all</Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.id} to="/catalog" className="group overflow-hidden rounded-xl border bg-card">
              <img className="aspect-[8/5] w-full object-cover" src={category.image} alt={category.name} />
              <div className="flex items-center justify-between px-4 py-3">
                <h3 className="font-medium">{category.name}</h3>
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-primary">Browse</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="featured-heading" className="mt-14">
        <div className="mb-5 flex items-baseline justify-between gap-4">
          <h2 id="featured-heading" className="font-heading text-2xl font-semibold tracking-tight">Featured products</h2>
          <Link className="text-sm text-primary hover:underline" to="/catalog">View all</Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="gap-0 py-0">
              <img className="aspect-square w-full object-cover" src={product.image} alt={product.name} />
              <CardHeader className="px-4 pt-4">
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-3 text-sm font-medium text-primary">
                {formatPrice(product.price)}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
