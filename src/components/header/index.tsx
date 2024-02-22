import { Link } from 'react-router-dom'
import { CartButton, HeaderContainer } from './styles'
import cartSvg from '../../assets/icons/cart.svg'
export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>WeMovies</h1>
      </Link>

      <Link to="/cart">
        <CartButton>
          <div>
            <p>Meu Carrinho</p>
            <span>0 items</span>
          </div>
          <img src={cartSvg} alt="Meu carrinho" />
        </CartButton>
      </Link>
    </HeaderContainer>
  )
}
