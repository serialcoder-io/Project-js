import { createContext, useContext, useEffect, useState } from 'react'

import { products } from '@/data/products'
import { addItem, changeQuantity, readCart } from '@/lib/cart'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState(readCart)
  const [storageError, setStorageError] = useState(false)

  useEffect(() => {
    try {
      if (cart.length) localStorage.setItem('cart', JSON.stringify(cart))
      else localStorage.removeItem('cart')
      setStorageError(false)
    } catch {
      setStorageError(true)
    }
  }, [cart])

  const lines = cart.map(({ productId, quantity }) => {
    const product = products.find((item) => item.id === productId)
    return { product, quantity, subtotal: product.price * quantity }
  })

  const value = {
    cart,
    lines,
    storageError,
    itemCount: cart.reduce((sum, entry) => sum + entry.quantity, 0),
    total: lines.reduce((sum, line) => sum + line.subtotal, 0),
    addToCart: (productId) => setCart((current) => addItem(current, productId)),
    updateQuantity: (productId, quantity) => setCart((current) => changeQuantity(current, productId, quantity)),
    removeFromCart: (productId) => setCart((current) => current.filter((entry) => entry.productId !== productId)),
    clearCart: () => setCart([]),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')
  return context
}
