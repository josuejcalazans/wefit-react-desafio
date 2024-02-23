import { useCartStore } from '../../../../store/cartStore'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { TrashButton } from '../../../ui/trash-button'
import { SectionDescription } from './styles'

interface DescriptionProps {
  title: string
  price: number
  id: number
}

export function Description({ title, price, id }: DescriptionProps) {
  const { removeAllById } = useCartStore()
  return (
    <SectionDescription>
      <p>{title}</p>
      <span>{formatCurrency(price)}</span>

      <TrashButton type="button" onClick={() => removeAllById(id)} />
    </SectionDescription>
  )
}
