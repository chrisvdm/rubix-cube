import React, { Component } from 'react'

import { PlayScreen, StartScreen } from '../screens'

class GameContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mode: 'start'
    }

    this.onStartBtnClick = this.onStartBtnClick.bind(this)
    this.onCancelBtnClick = this.onCancelBtnClick.bind(this)
  }

  onStartBtnClick () {
    this.setState({ mode: 'play' })
  }

  onCancelBtnClick () {
    this.setState({ mode: 'start' })
  }

  render () {
    const { mode } = this.state
    return (
      <div className='game-container'>
        {mode === 'start' ? (
          <StartScreen onStartBtnClick={this.onStartBtnClick} />
        ) : (
          <PlayScreen onCancelBtnClick={this.onCancelBtnClick} />
        )}
      </div>
    )
  }
}

export default GameContainer
