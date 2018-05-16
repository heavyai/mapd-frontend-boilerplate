import React from 'react'

import { ClicksState } from '~/reducers/clicks'


type Props = {
  clicks: ClicksState
}

const ClickDisplay: React.StatelessComponent<Props> = ( { clicks: { total } } ) =>
  <div>
    You have clicked the button { total } times
  </div>


export default ClickDisplay
