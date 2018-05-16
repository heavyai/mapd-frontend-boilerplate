import React from 'react'

import { Dispatcher } from '~/actions'
import { addClick } from '~/actions/clicks'


type Props = {
  dispatch: Dispatcher
}

const ClickButton: React.StatelessComponent<Props> = ( { dispatch } ) => {
  const click = () => {
    dispatch( addClick() )
  }

  return (
    <button onClick={ click }>
      The Button
    </button>
  )
}


export default ClickButton
