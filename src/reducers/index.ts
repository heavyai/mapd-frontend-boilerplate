import { combineReducers } from 'redux'

import { RootAction } from '~/actions'
import { default as query, QueryState } from '~/reducers/query'
import { default as tabs, TabsState } from '~/reducers/tabs'


export interface RootState {
  query: QueryState,
  tabs: TabsState
}


const rootReducer = combineReducers<RootState, RootAction>( {
  query,
  tabs
} )


export default rootReducer
