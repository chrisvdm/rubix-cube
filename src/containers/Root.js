import React, { Component } from 'react'

import { GameTitle } from '../components'
import GameContainer from './GameContainer'

class Root extends Component {
  render () {
    return (
      <div className='root-container'>
        <GameTitle />
        <GameContainer />
      </div>
    )
  }
}

export default Root
