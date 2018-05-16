import React from 'react'
import { hot } from 'react-hot-loader'

import { Dispatcher } from '~/actions'
import ClickButton from '~/components/ClickButton'
import ClickDisplay from '~/components/ClickDisplay'


// Types
import { RootState } from '~/reducers'

type Props = {
  dispatch: Dispatcher,
  state: RootState
}


const App: React.StatelessComponent<Props> = ( { dispatch, state: { clicks } } ) =>
  <div>
    <ClickDisplay clicks={ clicks } />
    <ClickButton dispatch={ dispatch } />
  </div>


export default hot( module )( App )
