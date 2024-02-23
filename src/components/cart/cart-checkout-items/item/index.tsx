import { Product } from '../../../../@types/products.types'
import { useCartStore } from '../../../../store/cartStore'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { TrashButton } from '../../../ui/trash-button'
import { Description } from './description'
import { Quantity } from './quantity'

import { ItemContainer, Subtotal } from './styles'

interface ItemProps {
  product: Product
}

export function Item({ product }: ItemProps) {
  const { removeAllById } = useCartStore()
  return (
    <ItemContainer>
      <img src={product.image} alt="" width={89} height={114} />

      <div>
        <Description
          title={product.title}
          price={product.price}
          id={product.id}
        />

        <div>
          <Quantity product={product} />
          <Subtotal>
            <span>Subtotal</span>
            {formatCurrency(product.subtotal)}
          </Subtotal>
        </div>

        <TrashButton type="button" onClick={() => removeAllById(product.id)} />
      </div>
    </ItemContainer>
  )
}
