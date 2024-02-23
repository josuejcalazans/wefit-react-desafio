import styled from 'styled-components'

export const CartContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.1rem;
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;

  img {
    object-fit: cover;
  }

  hr {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
  }

  @media (max-width: 650px) {
    width: 95%;
    margin-left: 1rem;
    min-height: 300px;
  }
`
export const CartWithItemsHeader = styled.header`
  width: 100%;
  display: flex;
  gap: 5.2rem;

  span: {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray300};
    text-transform: uppercase;
  }

  span:first-child {
    width: min(100%, calc(89px + 52px + 253px));
  }

  span:nth-child(2) {
    width: min(100%, 12rem);
  }

  span:nth-child(3) {
    width: min(100%, 28.4rem);
  }

  @media (max-width: 650px) {
    display: none;
  }
`

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  @media (max-width: 500px) {
    flex-grow: 1;
  }
`
export const Divider = styled.div`
  background-color: ${(props) => props.theme.colors.gray300};
  height: 1px;
  width: 100%;
`

export const CartHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 8.9rem 1fr 11.5rem 1fr 1.4rem;
  align-items: center;
  grid-gap: 5.2rem;
`

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  text-transform: uppercase;

  a,
  button {
    width: 23.542rem;
    font-size: 1.4rem;
  }

  section {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
      color: ${({ theme }) => theme.colors.gray300};
      font-size: 1.4rem;
      text-align: center;
    }

    span: {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.gray900};
      text-align: center;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 1.6rem;
    align-self: stretch;

    a,
    button {
      width: 100%;
    }

    section {
      p: {
        width: 6.147rem;
      }

      span: {
        width: 13.079rem;
      }
    }
  }
`
