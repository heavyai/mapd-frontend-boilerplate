import React from 'react'
import * as renderer from 'react-test-renderer'

import ClickButton from './ClickButton'


test( 'Component renders', () => {
  const component = renderer.create(
    <ClickButton dispatch={ jest.fn() } />
  )

  expect( component.toJSON() ).toMatchSnapshot()
} )
