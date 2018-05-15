import React from 'react'
import { hot } from 'react-hot-loader'

import Hello from '~/components/Hello'


const App: React.StatelessComponent = () =>
  <Hello name='world' />


export default hot( module )( App )
