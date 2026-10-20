import { useSearchParams } from 'react-router'

import { CatalogPagination } from '@/components/catalog/CatalogPagination'
import { CatalogSearch } from '@/components/catalog/CatalogSearch'
import { CategoryFilter } from '@/components/catalog/CategoryFilter'
import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { categories } from '@/data/categories'
import { products } from '@/data/products'

const PAGE_SIZE = 8

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('q') ?? ''
  const categoryParam = Number(searchParams.get('category'))
  const categoryId = categories.some((category) => category.id === categoryParam) ? categoryParam : null

  const normalizedQuery = query.trim().toLowerCase()
  const filteredProducts = products.filter((product) =>
    (categoryId === null || product.category_id === categoryId) &&
    product.name.toLowerCase().includes(normalizedQuery)
  )

  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE))
  const requestedPage = Number(searchParams.get('page'))
  const page = Number.isInteger(requestedPage) ? Math.min(Math.max(requestedPage, 1), pageCount) : 1
  const visibleProducts = filteredProducts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  // Changing the search or the category always goes back to page 1.
  function updateParams(changes, options) {
    const nextParams = new URLSearchParams(searchParams)
    Object.entries(changes).forEach(([key, value]) => {
      if (value === null || value === '') nextParams.delete(key)
      else nextParams.set(key, String(value))
    })
    if (!('page' in changes)) nextParams.delete('page')
    setSearchParams(nextParams, options)
  }

  function handlePageChange(nextPage) {
    updateParams({ page: nextPage === 1 ? null : nextPage })
    window.scrollTo({ top: 0 })
  }

  function clearFilters() {
    setSearchParams({})
  }

  const firstShown = (page - 1) * PAGE_SIZE + 1
  const lastShown = firstShown + visibleProducts.length - 1

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Catalog</h1>

      <div className="mt-8 flex flex-col gap-4 border-b pb-6 lg:flex-row lg:items-center lg:justify-between">
        <CategoryFilter selectedId={categoryId} onSelect={(id) => updateParams({ category: id })} />
        <CatalogSearch value={query} onChange={(value) => updateParams({ q: value }, { replace: true })} />
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-muted-foreground">
        {filteredProducts.length === 0
          ? 'No products found'
          : `Showing ${firstShown}–${lastShown} of ${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'}`}
      </p>

      {filteredProducts.length === 0 ? (
        <div className="mt-6 rounded-xl border bg-card p-6 sm:p-10">
          <h2 className="text-xl font-semibold">No products match your search</h2>
          <p className="mt-3 text-muted-foreground">Try another name or choose a different category.</p>
          <Button className="mt-6 h-10 px-4" variant="outline" onClick={clearFilters}>Clear search and filters</Button>
        </div>
      ) : (
        <>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          <CatalogPagination page={page} pageCount={pageCount} onChange={handlePageChange} />
        </>
      )}
    </div>
  )
}
