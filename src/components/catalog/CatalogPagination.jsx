import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function CatalogPagination({ page, pageCount, onChange }) {
  if (pageCount <= 1) return null

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1)

  return (
    <nav aria-label="Catalog pages" className="mt-10 flex items-center justify-center gap-1">
      <Button variant="outline" className="size-10" aria-label="Previous page" disabled={page === 1} onClick={() => onChange(page - 1)}>
        <ChevronLeftIcon />
      </Button>
      {pages.map((number) => (
        <Button
          key={number}
          className="size-10 tabular-nums"
          variant={number === page ? 'default' : 'ghost'}
          aria-label={`Page ${number}`}
          aria-current={number === page ? 'page' : undefined}
          onClick={() => onChange(number)}
        >
          {number}
        </Button>
      ))}
      <Button variant="outline" className="size-10" aria-label="Next page" disabled={page === pageCount} onClick={() => onChange(page + 1)}>
        <ChevronRightIcon />
      </Button>
    </nav>
  )
}
