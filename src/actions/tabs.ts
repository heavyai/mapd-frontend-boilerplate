import actionCreatorFactory from 'typescript-fsa'

const createAction = actionCreatorFactory()


export const setActiveTabIndex = createAction<number>( 'SET_ACTIVE_TAB_INDEX' )
