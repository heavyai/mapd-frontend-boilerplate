import React from 'react'
import { hot } from 'react-hot-loader'

import Header from '~/components/Header'
import SqlEditor from '~/components/SqlEditor/SqlEditor'

const styles = require( './App.sass' )


// Types
import { Dispatcher } from '~/actions'
import { RootState } from '~/reducers'

type Props = {
  dispatch: Dispatcher,
  state: RootState
}


const App: React.StatelessComponent<Props> = ( { dispatch, state: { query, tabs } } ) => {
  const activeTab = () => {
    switch ( tabs.activeTabIndex ) {
      case 1:
        return <div style={ { margin: '40px auto' } }>Future home of Chart</div>
      case 0:
      default:
        return <SqlEditor dispatch={ dispatch } query={ query } />
    }
  }

  return (
    <div className={ styles.container }>
      <Header dispatch={ dispatch } tabs={ tabs } />
      { activeTab() }
    </div>
  )
}


export default hot( module )( App )
