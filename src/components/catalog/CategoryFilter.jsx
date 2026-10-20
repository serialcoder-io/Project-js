import { Button } from '@/components/ui/button'
import { categories } from '@/data/categories'

export function CategoryFilter({ selectedId, onSelect }) {
  const options = [{ id: null, name: 'All' }, ...categories]

  return (
    <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = option.id === selectedId

        return (
          <Button
            key={option.name}
            type="button"
            className="h-10 px-4"
            variant={isSelected ? 'default' : 'outline'}
            aria-pressed={isSelected}
            onClick={() => onSelect(option.id)}
          >
            {option.name}
          </Button>
        )
      })}
    </div>
  )
}
