import { createStore, applyMiddleware, compose, AnyAction } from 'redux'
import thunkMiddleware, { ThunkMiddleware, ThunkDispatch } from 'redux-thunk'

import rootReducer, { RootState } from '~/reducers'
import connector, { MapdConnector } from '~/services/connector'


const composeEnhancers = ( window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export type ThunkExtraArgument = {
  connector: MapdConnector
}

const extra: ThunkExtraArgument = {
  connector
}


const thunk: ThunkMiddleware<RootState, AnyAction> = thunkMiddleware.withExtraArgument( extra )

const enhancers = composeEnhancers(
  applyMiddleware(
    thunk
  )
)

const store = createStore( rootReducer, enhancers )


export type Dispatcher = ThunkDispatch<RootState, ThunkExtraArgument, AnyAction>


export default store
