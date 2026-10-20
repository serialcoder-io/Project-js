import { CURRENCY } from '@/lib/config'

export function formatPrice(price) {
  return `${CURRENCY} ${price.toLocaleString('en-IN')}`
}
