import styled from 'styled-components'

export const ItemContainer = styled.section`
  width: 100%;
  color: ${({ theme }) => theme.colors.gray900};

  display: flex;
  align-items: center;
  gap: 5.2rem;

  align-self: stretch;

  & > img {
    aspect-ratio: 0.78;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5.2rem;

    > div {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 5.2rem;
    }
  }

  @media (max-width: 650px) {
    align-items: flex-start;
    flex-wrap: nowrap;
    gap: 1.6rem;

    div {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1.6rem;

      > div {
        flex-direction: row;
        justify-content: space-between;
        gap: 1.6rem;
      }

      > button {
        display: none;
      }
    }
  }
`

export const SectionDescription = styled.section`
  width: max(100%, 25.3rem);
  max-width: 253px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  p {
    font-size: 1.4rem;
  }

  span {
    font-size: 1.6rem;
  }

  button {
    display: none;
  }

  @media (max-width: 650px) {
    max-width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
    align-self: stretch;

    button {
      display: initial;
    }
  }
`

export const SectionQuantity = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;

  button {
    border: none;
    background-color: transparent;
    line-height: 0;

    img {
      aspect-ratio: 1;
      width: auto;
      height: auto;
    }
  }

  span {
    width: 6.2rem;
    display: flex;
    align-items: flex-start;
    padding: 0.35rem 1.6rem;

    border: 1px solid ${({ theme }) => theme.colors.gray100};
    border-radius: 4px;

    font-weight: 400;
    font-size: 1.4rem;
    text-align: center;
  }

  @media (max-width: 650px) {
    width: 11.7rem;

    span {
      width: 100%;
      padding: 0.35rem 1.2rem;
    }
  }
`

export const Subtotal = styled.p`
  width: min(100%, 21.369rem);
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.gray900};

  span {
    display: none;
  }

  @media (max-width: 650px) {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    span {
      display: inherit;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.gray300};
      text-transform: uppercase;
    }
  }
`
