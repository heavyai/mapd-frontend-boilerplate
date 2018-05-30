import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '~/reducers'
import connector from '~/services/connector'


const composeEnhancers = ( window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancers = composeEnhancers(
  applyMiddleware(
    thunkMiddleware.withExtraArgument( connector )
  )
)

const store = createStore( rootReducer, enhancers )


export default store
