import React, { Component, Fragment } from 'react'

import { RubixCube, ViewControl } from '../components'

class PlayScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visibleSides: [0, 1, 2]
    }

    this.onRotateLeftBtnClick = this.onRotateLeftBtnClick.bind(this)
    this.onRotateRightBtnClick = this.onRotateRightBtnClick.bind(this)
  }

  onRotateLeftBtnClick () {
    // -1
    console.log('left')
    const vs = this.state.visibleSides
    const hb = vs.slice(1, 3)
    const newb = hb.map(b => (b - 1 < 1 ? 4 : b - 1))

    const foo = vs.slice(0, 1)
    const newVS = foo.concat(newb)
    this.setState({ visibleSides: newVS })
  }

  onRotateRightBtnClick () {
    // +1
    console.log('right')
    const vs = this.state.visibleSides
    const hb = vs.slice(1, 3)
    const newb = hb.map(b => (b + 1 > 4 ? 1 : b + 1))
    const foo = vs.slice(0, 1)
    const newVS = foo.concat(newb)
    this.setState({ visibleSides: newVS })
    // [0,1,2]
    // [0,2,3]
    // [0,3,4]
    // [0,4,1]
  }

  render () {
    const { onStartBtnClick } = this.props
    const { visibleSides } = this.state
    return (
      <Fragment>
        <RubixCube visibleSides={visibleSides} />
        <ViewControl
          onRotateLeftBtnClick={this.onRotateLeftBtnClick}
          onRotateRightBtnClick={this.onRotateRightBtnClick}
        />
      </Fragment>
    )
  }
}

export default PlayScreen
