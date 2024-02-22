import styled from 'styled-components'

interface StyledButtonProps {
  width?: string
  fontSize?: string
  active: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width || '100%'};
  font-size: ${({ fontSize }) => fontSize || '1.2rem'};
  border-radius: 4px;
  padding: 0 1.6rem;
  height: 4rem;
  text-transform: uppercase;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }

  background-color: ${({ theme, active }) =>
    active ? theme.colors.green : theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`
