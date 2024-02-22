import { Product } from '../../@types/products.types'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../ui/button'
import { CardContainer } from './styles'

interface CardProps {
  product: Product
}
export function Card({ product }: CardProps) {
  return (
    <CardContainer>
      <div>
        <div>
          <img src={product.image} alt="Descrição da imagem" />

          <p>{product.title}</p>
        </div>

        <p>{formatCurrency(product.price)}</p>
      </div>

      <Button
        type="button"
        active={false}
        hasIcon
        // onClick={handleAddProduct}
        // disabled={hasCurrentProduct !== 0}
      >
        Adicionar ao carrinho
      </Button>
    </CardContainer>
  )
}
