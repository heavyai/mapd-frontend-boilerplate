import { handleActions } from 'redux-actions'
import { getType } from 'typesafe-actions'

import { QueryActions } from '~/actions'
import { setStatement, sendQueryAsync } from '~/actions/query'


export type QueryRequest = {
  submitted: boolean,
  pending: boolean,
  results?: Object[],
  error?: Error
}

export type QueryState = {
  statement: string,
  request: QueryRequest
}

const initialState: QueryState = {
  statement: '',
  request: {
    submitted: false,
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
      submitted: true,
      pending: true
    }
  } ),

  [ getType( sendQueryAsync.success ) ]: ( state, action ) => ( {
    ...state,
    request: {
      submitted: true,
      pending: false,
      results: action.payload
    }
  } ),

  [ getType( sendQueryAsync.failure ) ]: ( state, action ) => ( {
    ...state,
    request: {
      submitted: true,
      pending: false,
      error: action.payload
    }
  } )

}, initialState )
