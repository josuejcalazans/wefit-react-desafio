import { LoaderContainer } from './styles'
import loaderImage from '../../../assets/loader.png'

export function Loader() {
  return (
    <LoaderContainer>
      <img src={loaderImage} alt="Loading" />
    </LoaderContainer>
  )
}
