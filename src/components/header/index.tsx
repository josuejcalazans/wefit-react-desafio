import { Link } from 'react-router-dom'
import { CartButton, HeaderContainer } from './styles'
import bagSvg from '../../assets/icons/bag.svg'
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
          <img src={bagSvg} alt="Meu carrinho" />
        </CartButton>
      </Link>
    </HeaderContainer>
  )
}
