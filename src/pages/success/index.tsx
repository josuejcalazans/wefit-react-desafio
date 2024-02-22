import { useNavigate } from 'react-router-dom'
import { CardContainer } from '../../components/ui/cardContainer'
import { Button } from '../../components/ui/button'
import confirmSvg from '../../assets/icons/confirm.svg'
export function Success() {
  const navigate = useNavigate()
  return (
    <CardContainer>
      <h1>Compra realizada com sucesso!</h1>

      <img src={confirmSvg} alt="" width={295} height={307} />

      <Button width="18rem" fontSize="1.4rem" onClick={() => navigate('/')}>
        Voltar
      </Button>
    </CardContainer>
  )
}
