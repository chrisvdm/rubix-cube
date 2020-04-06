import React from 'react'
import ReactDOM from 'react-dom'

import { Root } from './containers'

import './styles'

ReactDOM.render(<Root />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./containers/Root.js', function () {
    ReactDOM.render(<Root />, document.getElementById('root'))
  })
}
