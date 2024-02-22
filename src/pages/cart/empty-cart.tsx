import emptyImg from '../../assets/icons/empty.svg'
import { Button } from '../../components/ui/button'
import { useNavigate } from 'react-router-dom'
import { CardContainer } from '../../components/ui/cardContainer'
export function EmptyCart() {
  const navigate = useNavigate()
  return (
    <CardContainer>
      <h1>Parece que não há nada por aqui :(</h1>

      <img src={emptyImg} alt="" width={447} height={266} />

      <Button width="18rem" fontSize="1.4rem" onClick={() => navigate('/')}>
        Voltar
      </Button>
    </CardContainer>
  )
}
