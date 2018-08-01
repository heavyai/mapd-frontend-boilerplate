import React from 'react'
import Elevation from 'rmwc/Elevation'
import { TabBar, Tab, TabBarEventDetailT } from 'rmwc/Tabs'
import { CustomEventT } from 'rmwc/Base'

import Logo from '~/assets/logo.svg'
import { setActiveTabIndex } from '~/actions/tabs'

const styles = require( './Header.sass' )


// Types
import { Dispatcher } from '~/store'
import { TabsState } from '~/reducers/tabs'

type Props = {
  dispatch: Dispatcher,
  tabs: TabsState
}


const Header: React.StatelessComponent<Props> = ( { dispatch, tabs: { activeTabIndex } } ) => {
  const onChangeTab = ( event: CustomEventT<TabBarEventDetailT> ) =>
    dispatch( setActiveTabIndex( event.detail.activeTabIndex ) )

  return (
    <Elevation z={ 1 } className={ styles.container }>
      <Logo className={ styles.logo } />
      <TabBar className={ styles.tabBar } activeTabIndex={ activeTabIndex } onChange={ onChangeTab }>
        <Tab>SQL Editor</Tab>
        <Tab>Chart</Tab>
      </TabBar>
    </Elevation>
  )
}


export default Header
