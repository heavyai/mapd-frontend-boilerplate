import { combineReducers } from 'redux'

import { RootAction } from '~/actions'
import { default as clicks, ClicksState } from '~/reducers/clicks'


export interface RootState {
  clicks: ClicksState
}


const rootReducer = combineReducers<RootState, RootAction>( {
  clicks
} )


export default rootReducer
