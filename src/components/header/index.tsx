import { CartButton, HeaderContainer } from './styles'
import cartSvg from '../../assets/icons/cart.svg'
export function Header() {
  return (
    <HeaderContainer>
      <h1>WeMovies</h1>

      <CartButton>
        <div>
          <p>Meu Carrinho</p>
          <span>0 items</span>
        </div>
        <img src={cartSvg} alt="Meu carrinho" />
      </CartButton>
    </HeaderContainer>
  )
}
