import styled from 'styled-components'

export const TrashButtonContainer = styled.button`
  border: none;
  background-color: transparent;
  line-height: 0;
  width: 1.6rem;
  img {
    aspect-ratio: 1;
    object-fit: cover;
    width: auto;
    height: auto;

    @media (max-width: 480px) {
      aspect-ratio: 0.89;
    }
  }
`
