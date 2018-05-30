import { Dispatch } from 'redux'
import { ActionType } from 'typesafe-actions'

import * as query from '~/actions/query'


export type QueryActions = ActionType<typeof query>

export type RootAction = QueryActions
export type Dispatcher = Dispatch<RootAction>
