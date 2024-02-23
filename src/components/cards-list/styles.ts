import styled from 'styled-components'

export const CardsListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30.9rem, 1fr));
  gap: 1.6rem;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 7.6rem;

  @media (max-width: 480px) {
    padding: 0 1.6rem;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 960px) {
    padding: 0 1rem;
  }
`
