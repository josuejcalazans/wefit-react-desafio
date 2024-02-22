import { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'active'> {
  active: boolean
  width?: string
  fontSize?: string
}

export function Button({
  width,
  fontSize,
  active = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton active={active} width={width} fontSize={fontSize} {...rest}>
      {children}
    </StyledButton>
  )
}

// import React, { ButtonHTMLAttributes } from 'react'
// import { StyledButton } from 'seu-caminho/StyledButton' // Importe o StyledButton ou ajuste conforme necessário

// interface ButtonProps
//   extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'active'> {
//   active: boolean
//   width?: string
//   fontSize?: string
// }

// export function Button({
//   width = '100%',
//   fontSize = '1.2rem',
//   active = false,
//   children,
//   ...rest
// }: ButtonProps) {
//   return (
//     <StyledButton active={active} width={width} fontSize={fontSize} {...rest}>
//       {children}
//     </StyledButton>
//   )
// }
