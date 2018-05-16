import React from 'react'
import * as renderer from 'react-test-renderer'

import Hello from './Hello'


test( 'Component renders', () => {
  const component = renderer.create(
    <Hello name='world' />
  )

  expect( component.toJSON() ).toMatchSnapshot()
} )
