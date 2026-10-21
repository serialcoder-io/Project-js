import { Link } from 'react-router'

import { Button } from '@/components/ui/button'
import { categories } from '@/data/categories'
import { products } from '@/data/products'
import { CURRENCY } from '@/lib/config'

function formatPrice(price) {
  return `${CURRENCY} ${price.toLocaleString('en-IN')}`
}

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured)
  const [leadProduct, ...otherFeaturedProducts] = featuredProducts

  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Phones, PCs and AirPods.</h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">Explore phones, computers and wireless audio in our educational electronics shop.</p>
          <Button asChild className="mt-6" size="lg">
            <Link to="/catalog">Browse the catalog</Link>
          </Button>
        </div>
        <img className="aspect-[4/3] w-full rounded-xl border bg-muted object-cover" src={categories[0].image} alt={categories[0].name} />
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight">Shop by category</h2>
            </div>
            <Link className="text-sm font-medium text-primary hover:underline" to="/catalog">See everything</Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.id} to="/catalog" className="group overflow-hidden rounded-xl border bg-background">
                <img className="aspect-[4/3] w-full bg-muted object-cover" src={category.image} alt={category.name} />
                <div className="flex items-center justify-between border-t bg-background px-3 py-3 sm:px-4">
                  <h3 className="font-medium">{category.name}</h3>
                  <span className="text-sm text-muted-foreground group-hover:text-primary">View</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">Featured products</h2>
        </div>
        {leadProduct && (
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
            <Link to={`/product/${leadProduct.id}`} className="overflow-hidden rounded-xl border bg-card">
              <img className="aspect-[5/4] w-full bg-muted object-cover" src={leadProduct.image} alt={leadProduct.name} />
              <div className="p-5 sm:p-6">
                <p className="text-sm font-medium text-primary">{categories.find((category) => category.id === leadProduct.category_id)?.name}</p>
                <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight">{leadProduct.name}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{leadProduct.description}</p>
                <p className="mt-5 font-semibold text-primary">{formatPrice(leadProduct.price)}</p>
              </div>
            </Link>
            <div className="border-y">
              {otherFeaturedProducts.map((product) => {
                const category = categories.find((item) => item.id === product.category_id)

                return (
                  <Link key={product.id} to={`/product/${product.id}`} className="flex gap-4 border-b py-4 last:border-b-0 sm:gap-5 sm:py-5">
                    <img className="size-24 shrink-0 rounded-lg bg-muted object-cover sm:size-28" src={product.image} alt={product.name} />
                    <div className="flex min-w-0 flex-1 flex-col justify-center">
                      <p className="text-sm font-medium text-primary">{category?.name}</p>
                      <h3 className="mt-1 font-heading text-lg font-semibold leading-snug">{product.name}</h3>
                      <p className="mt-2 text-sm font-medium text-muted-foreground">{formatPrice(product.price)}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </section>

      <section className="border-y bg-muted/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="font-heading text-xl font-semibold tracking-tight">About this project</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">This website is an educational project made for academic purposes. Nothing is sold through this site.</p>
          </div>
          <Link className="shrink-0 text-sm font-medium text-primary hover:underline" to="/terms">Read the terms of use</Link>
        </div>
      </section>
    </div>
  )
}
