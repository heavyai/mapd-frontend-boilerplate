import React from 'react'
import { render } from 'enzyme'

import LineChart from './LineChart'


test( 'Component renders as expected', () => {
  const component = render(
    <LineChart />
  )

  expect( component ).toMatchSnapshot()
} )
