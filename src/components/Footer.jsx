import { Link } from 'react-router'

import { SHOP_NAME } from '@/lib/config'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-muted-foreground">{SHOP_NAME}</p>
        <nav aria-label="Legal navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-muted-foreground">
          <Link className="hover:text-primary" to="/legal-notice">Legal Notice</Link>
          <Link className="hover:text-primary" to="/privacy-policy">Privacy Policy</Link>
          <Link className="hover:text-primary" to="/terms">Terms of Use</Link>
        </nav>
      </div>
    </footer>
  )
}
