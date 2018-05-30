import React from 'react'
import * as renderer from 'react-test-renderer'

import QueryInput from './QueryInput'


const queryState = {
  statement: '',
  request: {
    pending: false
  }
}

test( 'Component renders', () => {
  const component = renderer.create(
    <QueryInput dispatch={ jest.fn() } query={ queryState } />
  )

  expect( component.toJSON() ).toMatchSnapshot()
} )
