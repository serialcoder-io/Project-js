import { NavLink } from 'react-router'

import { SHOP_NAME } from '@/lib/config'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Catalog', to: '/catalog' },
  { label: 'Cart', to: '/cart' },
]

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:max-w-6xl lg:px-8">
        <NavLink className="font-heading text-lg font-semibold tracking-tight" to="/">
          {SHOP_NAME}
        </NavLink>
        <nav aria-label="Primary navigation" className="flex items-center gap-1">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm transition-colors ${isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`
              }
              to={item.to}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
