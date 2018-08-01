import React from 'react'
import { render } from 'enzyme'

import QueryResults from './QueryResults'


test( 'Component renders results', () => {
  const component = render(
    <QueryResults request={ { submitted: true, pending: false, result: [ { col: 'val' } ] } } />
  )

  expect( component ).toMatchSnapshot()
} )

test( 'Component renders error', () => {
  const component = render(
    <QueryResults request={ { submitted: true, pending: false, error: new Error( 'bad' ) } } />
  )

  expect( component ).toMatchSnapshot()
} )
