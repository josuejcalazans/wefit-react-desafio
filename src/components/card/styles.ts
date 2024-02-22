import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;
  padding: 1rem 1.1rem;
  width: 100%;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    color: ${({ theme }) => theme.colors.gray500};

    p {
      text-align: center;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      img {
        aspect-ratio: 0.78;
        object-fit: cover;
        width: 147px;
        height: 188px;
      }

      img + p {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.gray900};
      }
    }

    div + p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.gray900};
    }
  }
`
