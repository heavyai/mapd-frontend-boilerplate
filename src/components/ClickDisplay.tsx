import React from 'react'

import { ClicksState } from '~/reducers/clicks'

const styles = require( './ClickDisplay.sass' )


type Props = {
  clicks: ClicksState
}

const ClickDisplay: React.StatelessComponent<Props> = ( { clicks: { total } } ) =>
  <div className={ styles.text }>
    You have clicked the button { total } times
  </div>


export default ClickDisplay
