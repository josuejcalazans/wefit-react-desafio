import { create } from 'zustand'

import { Product } from '../@types/products.types'
import { ProductsService } from '../service/productsService'

export interface ProductsStae {
  products: Product[]
  loading: boolean
}

type ProductActions = {
  fetchProducts: () => Promise<void>
}

export type ProductStore = ProductActions & ProductsStae

const initialState: ProductsStae = {
  loading: true,
  products: [],
}

export const useProductStore = create<ProductStore>((set) => ({
  ...initialState,
  fetchProducts: async () => {
    const response = await ProductsService.getAll()
    await timeout(1200)
    const products = response.data

    set((state) => ({
      ...state,
      products,
      loading: false,
    }))
  },
}))

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
