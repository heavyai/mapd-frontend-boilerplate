import React from 'react'
import { render } from 'enzyme'

import Header from './Header'


test( 'Component renders', () => {
  const component = render(
    <Header dispatch={ jest.fn() } tabs={ { activeTabIndex: 0 } } />
  )

  expect( component ).toMatchSnapshot()
} )
