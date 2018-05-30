import { createStandardAction } from 'typesafe-actions'


export const setActiveTabIndex = createStandardAction( 'SET_ACTIVE_TAB_INDEX' )<number>()
