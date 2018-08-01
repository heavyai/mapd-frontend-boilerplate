import { reducerWithInitialState } from 'typescript-fsa-reducers'

import { setActiveTabIndex } from '~/actions/tabs'


export type TabsState = {
  activeTabIndex: number
}

const initial: TabsState = {
  activeTabIndex: 0
}


const reducer = reducerWithInitialState( initial )

  .case( setActiveTabIndex, ( state, activeTabIndex ) => ( {
    ...state,
    activeTabIndex
  } ) )


export default reducer
