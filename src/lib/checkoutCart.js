// Temporary checkout helpers to be replaced by the shared cart context and clearCart() when branches merge.
import { products } from '@/data/products'

export function getCartLines() {
  try {
    const savedCart = localStorage.getItem('cart')
    const entries = JSON.parse(savedCart)

    if (!Array.isArray(entries)) return []

    return entries.reduce((lines, entry) => {
      const product = products.find((item) => item.id === entry?.productId)
      const quantity = entry?.quantity

      if (product && Number.isInteger(quantity) && quantity > 0) {
        lines.push({ product, quantity, subtotal: product.price * quantity })
      }

      return lines
    }, [])
  } catch {
    return []
  }
}

export function getCartTotal(lines) {
  return lines.reduce((total, line) => total + line.subtotal, 0)
}

export function clearStoredCart() {
  localStorage.removeItem('cart')
}
