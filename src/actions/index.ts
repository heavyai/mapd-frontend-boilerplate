import { Dispatch } from 'redux'
import { ActionsUnion } from 'typesafe-actions'

import * as clicks from '~/actions/clicks'


const actions = { clicks }


export type RootAction = ActionsUnion<typeof actions>
export type Dispatcher = Dispatch<RootAction>
