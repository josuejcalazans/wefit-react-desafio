import styled from 'styled-components'

interface StyledButtonProps {
  width?: string
  fontSize?: string
  active: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ width }) => width || '100%'};
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 0.8rem;
  cursor: pointer;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.green : theme.colors.blue};
  border: none;
  border-radius: 4px;

  font-size: ${({ fontSize }) => fontSize || '1.2rem'};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  text-transform: uppercase;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }

  div {
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;

    img {
      aspect-ratio: 1;
      object-fit: cover;
      width: auto;
    }
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  img {
    aspect-ratio: 1;
    object-fit: cover;
    width: auto;
  }
`
