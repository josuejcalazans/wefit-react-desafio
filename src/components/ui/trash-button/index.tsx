import trash from '../../../assets/icons/trash.svg'

import { ButtonHTMLAttributes } from 'react'
import { TrashButtonContainer } from './styles'

export const TrashButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <TrashButtonContainer {...props}>
    <img src={trash} alt="Button trash" width={18} height={18} />
  </TrashButtonContainer>
)
