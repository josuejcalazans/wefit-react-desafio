import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
  justify-content: space-between;
  margin-bottom: 4rem;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
  }
`
export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  cursor: pointer;
  border: 0;
  color: inherit;
  background: transparent;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
      font-size: 1.2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.white};
    }

    span {
      font-size: 1.2rem;
      font-weight: 600;
      text-align: right;
      line-height: 1.92rem;
      color: ${({ theme }) => theme.colors.gray300};
    }
  }
`
