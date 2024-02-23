import { Link } from 'react-router-dom'
import { CartButton, HeaderContainer } from './styles'
import bagSvg from '../../assets/icons/bag.svg'
import { useCartStore } from '../../store/cartStore'
export function Header() {
  const { cart } = useCartStore()
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  const items = totalItems === 1 ? 'item' : 'itens'

  return (
    <HeaderContainer>
      <Link to="/">
        <h1>WeMovies</h1>
      </Link>

      <Link to="/cart">
        <CartButton>
          <div>
            <p>Meu Carrinho</p>
            <span>
              {totalItems} {items}
            </span>
          </div>
          <img src={bagSvg} alt="Meu carrinho" />
        </CartButton>
      </Link>
    </HeaderContainer>
  )
}
