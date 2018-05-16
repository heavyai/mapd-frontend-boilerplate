import React from 'react'
import * as renderer from 'react-test-renderer'

import ClickDisplay from './ClickDisplay'


test( 'Component renders', () => {
  const component = renderer.create(
    <ClickDisplay clicks={ { total: 1 } } />
  )

  expect( component.toJSON() ).toMatchSnapshot()
} )
