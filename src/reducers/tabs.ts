import { handleActions } from 'redux-actions'
import { getType } from 'typesafe-actions'

import { RootAction } from '~/actions'
import { setActiveTabIndex } from '~/actions/tabs'


export type TabsState = {
  activeTabIndex: number
}

const initialState: TabsState = {
  activeTabIndex: 0
}


export default handleActions<TabsState, RootAction>( {

  [ getType( setActiveTabIndex ) ]: ( state, action ) => ( {
    ...state,
    activeTabIndex: action.payload
  } )

}, initialState )
