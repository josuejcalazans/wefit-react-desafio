import { useNavigate } from 'react-router-dom'

import {
  CartContainer,
  CartWithItemsHeader,
  Divider,
  FooterContainer,
} from './styles'
import { useCartStore } from '../../../store/cartStore'
import { Button } from '../../ui/button'
import { formatCurrency } from '../../../utils/formatCurrency'
import { Item } from './item'

export function CartCheckoutItems() {
  const { cart, clearCart } = useCartStore()
  const navigate = useNavigate()

  const totalValue = cart.reduce((total, item) => total + item.subtotal, 0)

  return (
    <CartContainer>
      <CartWithItemsHeader>
        <span>Produto</span>
        <span>Qtd</span>
        <span>Subtotal</span>
      </CartWithItemsHeader>

      {cart.map((item) => (
        <Item product={item} key={item.id} />
      ))}

      <Divider />
      <FooterContainer>
        <Button
          fontSize="1.4rem"
          width="23.5rem"
          onClick={() => {
            navigate('/success')
            clearCart()
          }}
        >
          Finalizar Pedido
        </Button>

        <section>
          <p>Total</p>
          <span>{formatCurrency(totalValue)}</span>
        </section>
      </FooterContainer>
    </CartContainer>
  )
}
