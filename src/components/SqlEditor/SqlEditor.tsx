import React from 'react'

import { Dispatcher } from '~/store'
import { QueryState } from '~/reducers/query'
import QueryInput from '~/components/SqlEditor/QueryInput'
import QueryResults from '~/components/SqlEditor/QueryResults'

const styles = require( './SqlEditor.sass' )


type Props = {
  dispatch: Dispatcher,
  query: QueryState
}

const SqlEditor: React.StatelessComponent<Props> = ( { dispatch, query: { statement, request } } ) =>
  <div className={ styles.container }>
    <QueryInput dispatch={ dispatch } statement={ statement } pending={ request.pending } />
    { request.submitted && <QueryResults request={ request } /> }
  </div>


export default SqlEditor
