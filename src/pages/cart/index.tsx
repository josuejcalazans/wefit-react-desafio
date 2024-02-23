import { CartCheckoutItems, EmptyCart } from '../../components/cart'
import { useCartStore } from '../../store/cartStore'

export function Cart() {
  const { cart } = useCartStore()
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return <>{totalItems > 0 ? <CartCheckoutItems /> : <EmptyCart />}</>
}
