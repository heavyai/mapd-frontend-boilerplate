import actionCreatorFactory from 'typescript-fsa'
import { asyncFactory } from 'typescript-fsa-redux-thunk'

import { RootState } from '~/reducers'

const createAction = actionCreatorFactory()

const createAsyncAction = asyncFactory<RootState>( createAction )


export const setStatement = createAction<string>( 'SET_STATEMENT' )


export const sendQuery = createAsyncAction<string, Object[]>(
  'SEND_QUERY',
  async ( statement, _dispatch, _getState, getConnector ) => {
    const connector = await getConnector

    return await connector.queryAsync( statement )
  }
)
