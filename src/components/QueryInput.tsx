import React from 'react'

import { Dispatcher } from '~/actions'
import { setStatement, sendQuery } from '~/actions/query'
import { QueryState } from '~/reducers/query'

const styles = require( './QueryInput.sass' )


type Props = {
  dispatch: Dispatcher,
  query: QueryState
}

const QueryInput: React.StatelessComponent<Props> = ( { dispatch, query: { statement } } ) => {
  const click = () => {
    dispatch( sendQuery( statement ) )
  }
  const handleInputChange = ( event: React.FormEvent<HTMLInputElement> ) => {
    dispatch( setStatement( event.currentTarget.value ) )
  }

  return (
    <div>
      <input type='text' placeholder='Enter a SQL statement' onChange={ handleInputChange } />
      <button className={ styles.button } onClick={ click }>
        Send
      </button>
    </div>
  )
}


export default QueryInput
