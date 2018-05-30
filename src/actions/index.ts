import { Dispatch } from 'redux'
import { ActionType } from 'typesafe-actions'

import * as query from '~/actions/query'
import * as tabs from '~/actions/tabs'


export type QueryActions = ActionType<typeof query>
export type TabsActions = ActionType<typeof tabs>

export type RootAction = QueryActions | TabsActions
export type Dispatcher = Dispatch<RootAction>
