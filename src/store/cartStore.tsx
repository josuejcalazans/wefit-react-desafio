import { create } from 'zustand'
import { produce } from 'immer'
import { Product } from '../@types/products.types'

interface CartItem extends Product {
  id: number
  quantity: number
  subtotal: number
}

interface CartStore {
  cart: CartItem[]
  addToCart: (product: CartItem) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
  removeAllById: (productId: number) => void
}

export const useCartStore = create<CartStore>((set) => {
  const savedCart = localStorage.getItem('cart')
  const initialCart = savedCart ? JSON.parse(savedCart) : { cart: [] }

  return {
    ...initialCart,
    addToCart: (product: Product) => {
      set(
        produce((state) => {
          const existingItem = state.cart.find(
            (item: Product) => item.id === product.id,
          )

          if (existingItem) {
            existingItem.quantity += 1
            existingItem.subtotal = existingItem.quantity * existingItem.price
          } else {
            state.cart.push({
              ...product,
              quantity: 1,
              subtotal: product.price,
            })
          }
        }),
      )
    },
    removeFromCart: (productId: number) => {
      set(
        produce((state) => {
          const itemIndex = state.cart.findIndex(
            (item: Product) => item.id === productId,
          )

          if (itemIndex !== -1) {
            const item = state.cart[itemIndex]

            if (item.quantity > 1) {
              item.quantity -= 1
              item.subtotal = item.quantity * item.price
            } else {
              state.cart.splice(itemIndex, 1)
            }
          }
        }),
      )
    },
    removeAllById: (productId: number) => {
      set(
        produce((state) => {
          // Filtrar os itens do carrinho, removendo aqueles com o ID especificado
          state.cart = state.cart.filter(
            (item: Product) => item.id !== productId,
          )
        }),
      )
    },
    clearCart: () => {
      set({ cart: [] })
    },
  }
})

useCartStore.subscribe((cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
})
