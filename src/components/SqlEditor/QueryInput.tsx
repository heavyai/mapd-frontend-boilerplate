import React from 'react'
import { TextField } from 'rmwc/TextField'
import LinearProgress from 'rmwc/LinearProgress'

import { Dispatcher } from '~/store'
import { setStatement, sendQuery } from '~/actions/query'

const styles = require( './QueryInput.sass' )


type Props = {
  dispatch: Dispatcher,
  statement: string,
  pending: boolean
}

const QueryInput: React.StatelessComponent<Props> = ( { dispatch, statement, pending } ) => {
  const handleInputChange = ( event: React.FormEvent<HTMLInputElement> ) => {
    dispatch( setStatement( event.currentTarget.value ) )
  }

  const handleInputKeyPress = ( event: React.KeyboardEvent<HTMLInputElement> ) => {
    if ( event.key === 'Enter' ) {
      dispatch( sendQuery.action( statement ) )
    }
  }

  return (
    <div className={ styles.container }>
      <TextField
        className={ styles.input }
        label='Enter a SQL statement'
        spellCheck={ false }
        value={ statement }
        onChange={ handleInputChange }
        onKeyPress={ handleInputKeyPress }
      />
      { pending && <LinearProgress className={ styles.progress } determinate={ false } /> }
    </div>
  )
}


export default QueryInput
