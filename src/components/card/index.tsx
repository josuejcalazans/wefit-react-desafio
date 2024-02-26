import { Product } from '../../@types/products.types'
import { useCartStore } from '../../store/cartStore'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../ui/button'
import { CardContainer, ProductQuantity } from './styles'

interface CardProps {
  product: Product & { quantity: number; subtotal: number }
}
export function Card({ product }: CardProps) {
  const { addToCart, cart } = useCartStore()
  const cartItem = cart.find((item) => item.id === product.id)
  const quantity = cartItem ? cartItem.quantity : 0

  const TextButton = quantity > 0 ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO'

  return (
    <CardContainer>
      <div>
        <div>
          <img src={product.image} alt="Descrição da imagem" />

          <p>{product.title}</p>
        </div>

        <p>{formatCurrency(product.price)}</p>
      </div>
      <Button
        type="button"
        hasIcon
        onClick={() => addToCart(product)}
        active={quantity > 0}
      >
        <ProductQuantity>{quantity}</ProductQuantity>
        {TextButton}
      </Button>
    </CardContainer>
  )
}
