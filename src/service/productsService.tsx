import { AxiosPromise } from 'axios'
import { api } from '../utils/api'

interface Products {
  id: number
  title: string
  price: number
  image: string
}

interface ProductsHttp {
  getAll: () => AxiosPromise<Products[]>
}
export const ProductsService: ProductsHttp = {
  getAll: () => api.get(`/products`),
}
