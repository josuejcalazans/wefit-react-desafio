import { useEffect } from 'react'
import { useProductStore } from '../../store/productsStore'
import { Loader } from '../../components/ui/loader/inde'

import { CardsList } from '../../components/cards-list'
export function Home() {
  const { fetchProducts, products, loading } = useProductStore()

  useEffect(() => {
    const getAllProducts = async () => {
      await fetchProducts()
    }
    getAllProducts()
  }, [fetchProducts])

  if (loading || products.length === 0) {
    return <Loader />
  }

  return <CardsList />
}
