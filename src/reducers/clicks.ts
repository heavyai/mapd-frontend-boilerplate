import { handleActions } from 'redux-actions'
import { getType } from 'typesafe-actions'

import { addClick, resetClicks } from '~/actions/clicks'


export type ClicksState = {
  total: number
}

const initialState: ClicksState = {
  total: 0
}

export default handleActions( {

  [ getType( addClick ) ]: ( state ) => ( {
    total: state.total + 1
  } ),

  [ getType( resetClicks ) ]: () => initialState

}, initialState )
