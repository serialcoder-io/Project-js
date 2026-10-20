import { SearchIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function CatalogSearch({ value, onChange }) {
  return (
    <div className="w-full sm:max-w-xs">
      <Label htmlFor="catalog-search" className="sr-only">Search products</Label>
      <div className="relative">
        <SearchIcon aria-hidden="true" className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id="catalog-search"
          type="search"
          className="h-10 pl-8"
          placeholder="Search by name"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  )
}
