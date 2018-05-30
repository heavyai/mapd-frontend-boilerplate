import { combineReducers } from 'redux'

import { RootAction } from '~/actions'
import { default as query, QueryState } from '~/reducers/query'


export interface RootState {
  query: QueryState
}


const rootReducer = combineReducers<RootState, RootAction>( {
  query
} )


export default rootReducer
