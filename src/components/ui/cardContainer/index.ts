import styled from 'styled-components'

export const CardContainer = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray900};
  border-radius: 4px;
  padding: 6.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  overflow: hidden;

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 0 1.6rem;
    background-color: red;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 960px) {
    width: auto;
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 6.4rem;
  }
`
