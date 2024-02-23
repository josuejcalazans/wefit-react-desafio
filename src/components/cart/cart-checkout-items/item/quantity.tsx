import { Product } from '../../../../@types/products.types'
import minus from '../../../../assets/icons/minus.svg'
import plus from '../../../../assets/icons/plus.svg'
import { useCartStore } from '../../../../store/cartStore'
import { SectionQuantity } from './styles'

interface QuantityProps {
  product: Product
}

export function Quantity({ product }: QuantityProps) {
  const { removeFromCart, addToCart } = useCartStore()

  return (
    <SectionQuantity>
      <button type="button" onClick={() => removeFromCart(product.id)}>
        <img
          src={minus}
          alt="Circle with blue borders and the minus sign in the center"
          width={18}
          height={18}
        />
      </button>

      <span>{product.quantity}</span>

      <button type="button" onClick={() => addToCart(product)}>
        <img
          src={plus}
          alt="Circle with blue borders and the plus sign in the center"
          width={18}
          height={18}
        />
      </button>
    </SectionQuantity>
  )
}
