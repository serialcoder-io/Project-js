import { products } from '../data/products.js'

export function normalizeCart(entries) {
  if (!Array.isArray(entries)) return []
  if (entries.some((entry) => !entry || !Number.isSafeInteger(entry.productId) || !Number.isSafeInteger(entry.quantity) || entry.quantity < 1)) return []

  const cart = []
  for (const entry of entries) {
    const product = products.find((item) => item.id === entry.productId)
    if (!product || product.quantity === 0) continue
    const existing = cart.find((item) => item.productId === entry.productId)
    if (existing) existing.quantity = Math.min(product.quantity, existing.quantity + entry.quantity)
    else cart.push({ productId: product.id, quantity: Math.min(product.quantity, entry.quantity) })
  }
  return cart
}

export function readCart() {
  try {
    return normalizeCart(JSON.parse(localStorage.getItem('cart')))
  } catch {
    return []
  }
}

export function changeQuantity(cart, productId, quantity) {
  const product = products.find((item) => item.id === productId)
  if (!product || product.quantity === 0 || !Number.isSafeInteger(quantity)) return cart
  const nextQuantity = Math.max(1, Math.min(product.quantity, quantity))
  return cart.map((entry) => entry.productId === productId ? { productId, quantity: nextQuantity } : entry)
}

export function addItem(cart, productId) {
  const product = products.find((item) => item.id === productId)
  if (!product || product.quantity === 0) return cart
  const entry = cart.find((item) => item.productId === productId)
  return entry ? changeQuantity(cart, productId, entry.quantity + 1) : [...cart, { productId, quantity: 1 }]
}
