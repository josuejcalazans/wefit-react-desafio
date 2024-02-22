import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoaderContainer = styled.div`
  position: absolute;
  top: calc(50% - 4.2rem);
  left: calc(50% - 4.2rem);

  img {
    width: 8.3rem;
    z-index: 10;
    opacity: 1;

    animation: ${rotate} 500ms infinite;
  }
`
