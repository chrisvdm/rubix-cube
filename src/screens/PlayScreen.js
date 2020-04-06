import React, { Component, Fragment } from 'react'

import { RubixCube } from '../components'

class PlayScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visibleSides: [0, 1, 2]
    }
  }
  render () {
    const { onStartBtnClick } = this.props
    const { visibleSides } = this.state
    return (
      <Fragment>
        <RubixCube visibleSides={visibleSides} />
      </Fragment>
    )
  }
}

export default PlayScreen
