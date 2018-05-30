import React from 'react'
import { render } from 'enzyme'

import QueryInput from './QueryInput'


test( 'Component renders', () => {
  const component = render(
    <QueryInput dispatch={ jest.fn() } statement={ '' } pending={ false } />
  )

  expect( component ).toMatchSnapshot()
} )

test( 'Component renders while pending', () => {
  const component = render(
    <QueryInput dispatch={ jest.fn() } statement={ '' } pending />
  )

  expect( component ).toMatchSnapshot()
} )
