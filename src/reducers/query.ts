import { handleActions } from 'redux-actions'
import { getType } from 'typesafe-actions'

import { QueryActions } from '~/actions'
import { setStatement, sendQueryAsync } from '~/actions/query'


export type QueryState = {
  statement: string,
  request: {
    pending: boolean,
    results?: Object[],
    error?: Error
  }
}

const initialState: QueryState = {
  statement: '',
  request: {
    pending: false
  }
}


export default handleActions<QueryState, QueryActions>( {

  [ getType( setStatement ) ]: ( state, action ) => ( {
    ...state,
    statement: action.payload
  } ),

  [ getType( sendQueryAsync.request ) ]: ( state ) => ( {
    ...state,
    request: {
      pending: true
    }
  } ),

  [ getType( sendQueryAsync.success ) ]: ( state, action ) => ( {
    ...state,
    request: {
      pending: false,
      results: action.payload
    }
  } ),

  [ getType( sendQueryAsync.failure ) ]: ( state, action ) => ( {
    ...state,
    request: {
      pending: false,
      error: action.payload
    }
  } )

}, initialState )
