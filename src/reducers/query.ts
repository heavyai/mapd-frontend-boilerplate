import { reducerWithInitialState } from 'typescript-fsa-reducers'

import { setStatement, sendQuery } from '~/actions/query'


export type QueryRequest = {
  submitted: boolean,
  pending: boolean,
  result?: Object[],
  error?: Error
}

export type QueryState = {
  statement: string,
  request: QueryRequest
}

const initial: QueryState = {
  statement: '',
  request: {
    submitted: false,
    pending: false
  }
}


const reducer = reducerWithInitialState( initial )

  .case( setStatement, ( state, statement ) => ( {
    ...state,
    statement
  } ) )

  .case( sendQuery.async.started, ( state ) => ( {
    ...state,
    request: {
      submitted: true,
      pending: true
    }
  } ) )

  .case( sendQuery.async.failed, ( state, { error } ) => ( {
    ...state,
    request: {
      submitted: true,
      pending: false,
      error
    }
  } ) )

  .case( sendQuery.async.done, ( state, { result } ) => ( {
    ...state,
    request: {
      submitted: true,
      pending: false,
      result
    }
  } ) )


export default reducer
