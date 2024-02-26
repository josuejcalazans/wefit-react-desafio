import { Product } from '../../@types/products.types'
import { useProductStore } from '../../store/productsStore'
import { Card } from '../card'
import { CardsListContainer } from './styles'

export function CardsList() {
  const { products } = useProductStore()

  return (
    <CardsListContainer>
      {products.map((prod: Product) => (
        <Card key={prod.id} product={{ ...prod, quantity: 0, subtotal: 0 }} />
      ))}
    </CardsListContainer>
  )
}
