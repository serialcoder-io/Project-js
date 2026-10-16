import { SHOP_NAME } from '@/lib/config'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:px-8">
        {SHOP_NAME}
      </div>
    </footer>
  )
}
