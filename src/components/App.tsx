import React from 'react'
import { hot } from 'react-hot-loader'

import { Dispatcher } from '~/actions'
import QueryInput from '~/components/QueryInput'


// Types
import { RootState } from '~/reducers'

type Props = {
  dispatch: Dispatcher,
  state: RootState
}


const App: React.StatelessComponent<Props> = ( { dispatch, state: { query } } ) =>
  <div>
    <QueryInput dispatch={ dispatch } query={ query } />
  </div>


export default hot( module )( App )
