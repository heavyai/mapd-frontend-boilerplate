import { createStore } from 'redux'

import rootReducer from '~/reducers'


const reduxDevtoolsExtension = ( window as any ).__REDUX_DEVTOOLS_EXTENSION__

const middleware = reduxDevtoolsExtension && reduxDevtoolsExtension()


export default createStore( rootReducer, middleware )
