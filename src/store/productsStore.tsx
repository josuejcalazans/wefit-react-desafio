import { create } from 'zustand'

import { ProductsService } from '../service/productsService'
import { Product } from '../@types/products.types'

export interface ProductsState {
  products: Product[]
  loading: boolean
}

type ProductActions = {
  fetchProducts: () => Promise<void>
}

export type ProductStore = ProductActions & ProductsState

const initialState: ProductsState = {
  loading: true,
  products: [],
}

export const useProductStore = create<ProductStore>((set) => ({
  ...initialState,
  fetchProducts: async () => {
    try {
      const response = await ProductsService.getAll()
      await timeout(1200)

      const products: Product[] = response.data

      set((state) => ({
        ...state,
        products,
        loading: false,
      }))
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  },
}))

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
