import { ButtonHTMLAttributes } from 'react'
import { Icon, StyledButton } from './styles'
import cartSvg from '../../../assets/icons/cart.svg'
interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'active'> {
  active?: boolean
  hasIcon?: boolean
  width?: string
  fontSize?: string
}

export function Button({
  width,
  fontSize,
  active = false,
  hasIcon = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton active={active} width={width} fontSize={fontSize} {...rest}>
      {hasIcon && (
        <Icon>
          <img src={cartSvg} alt="Meu carrinho" />
        </Icon>
      )}

      {children}
    </StyledButton>
  )
}
