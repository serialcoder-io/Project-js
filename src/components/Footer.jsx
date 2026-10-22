import { Link } from 'react-router'
import { SHOP_NAME } from '@/lib/config'

export function Footer() {
  return <footer className="border-t bg-background"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:justify-between lg:px-8"><p>{SHOP_NAME} · Educational project</p><nav aria-label="Legal navigation" className="flex flex-wrap gap-4"><Link to="/legal-notice">Legal Notice</Link><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms of Use</Link></nav></div></footer>
}
