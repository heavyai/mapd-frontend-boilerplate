import React from 'react'

import { Dispatcher } from '~/actions'
import { addClick } from '~/actions/clicks'

const styles = require( './ClickButton.css' )


type Props = {
  dispatch: Dispatcher
}

const ClickButton: React.StatelessComponent<Props> = ( { dispatch } ) => {
  const click = () => {
    dispatch( addClick() )
  }

  return (
    <button className={ styles.button } onClick={ click }>
      The Button
    </button>
  )
}


export default ClickButton
