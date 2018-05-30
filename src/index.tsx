import 'normalize.css'
import './index.scss'
import 'babel-polyfill'

import * as React from 'react'
import { render } from 'react-dom'

import App from '~/components/App'
import store from '~/store'


const root = document.getElementById( 'root' )

const renderApp = () => {
  render(
    <App dispatch={ store.dispatch } state={ store.getState() } />,
    root
  )
}


renderApp()

store.subscribe( renderApp )
