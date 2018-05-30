import { createAsyncAction, createStandardAction } from 'typesafe-actions'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { Dispatcher } from '~/actions'
import { RootState } from '~/reducers'
import { MapdConnector } from '~/services/connector'


export const setStatement = createStandardAction( 'SET_STATEMENT' )<string>()


export const sendQueryAsync = createAsyncAction(
  'SEND_QUERY_REQUEST',
  'SEND_QUERY_SUCCESS',
  'SEND_QUERY_FAILURE'
)<void, Object[], Error>()

export const sendQuery: ActionCreator<ThunkAction<Promise<any>, RootState, Promise<MapdConnector>, Action>> =
  ( statement: string ) =>
    ( dispatch: Dispatcher, _, getConnector ) =>
      getConnector.then( ( connector ) => {
        dispatch( sendQueryAsync.request() )

        return connector.queryAsync( statement )
          .then( ( results: Object[] ) => dispatch( sendQueryAsync.success( results ) ) )
          .catch( ( error: Error ) => dispatch( sendQueryAsync.failure( error ) ) )
      } )
