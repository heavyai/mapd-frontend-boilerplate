import React from 'react'
import { render } from 'enzyme'

import SqlEditor from './SqlEditor'


test( 'Component renders', () => {
  const component = render(
    <SqlEditor
      dispatch={ jest.fn() }
      query={ { statement: '', request: { submitted: false, pending: false } } }
    />
  )

  expect( component ).toMatchSnapshot()
} )
