import React, { Component, Fragment } from 'react'

import { RubixCube, ViewControl, RubixCubeWrapper } from '../components'

class PlayScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visibleSides: [0, 1, 2],
      rotation: { y: 45, x: -15 }
    }

    this.onRotateLeftBtnClick = this.onRotateLeftBtnClick.bind(this)
    this.onRotateRightBtnClick = this.onRotateRightBtnClick.bind(this)
    this.onRotateUpBtnClick = this.onRotateUpBtnClick.bind(this)
    this.cube = React.createRef()
  }

  newRotation (dir, rotation, view) {
    if (dir !== 0) {
      const index = view.findIndex(deg => deg === rotation) + dir
      if (index === view.length) {
        return view[0]
      } else if (index < 0) {
        return view[view.length - 1]
      } else {
        return view[index]
      }
    }
    return rotation
  }

  rotateCube (h, v) {
    const {
      rotation: { y, x }
    } = this.state
    const hView = [45, 135, 225, 315]
    const vView = [-15, 15]
    const hValue = this.newRotation(h, y, hView)
    const vValue = this.newRotation(v, x, vView)
    const template = `translateZ(-400px) rotateY(${hValue}deg) rotateX(${vValue}deg) rotateZ(${vValue}deg)`

    this.setState(
      { rotation: { y: hValue, x: vValue } },
      () => (this.cube.current.style.transform = template)
    )
  }

  onRotateUpBtnClick () {
    this.rotateCube(0, 1)
  }

  onRotateLeftBtnClick () {
    this.rotateCube(1, 0)
  }

  onRotateRightBtnClick () {
    this.rotateCube(-1, 0)
  }

  render () {
    const { onStartBtnClick } = this.props
    const { visibleSides } = this.state
    return (
      <Fragment>
        <RubixCubeWrapper ref={this.cube}>
          <RubixCube />
        </RubixCubeWrapper>

        <ViewControl
          onRotateLeftBtnClick={this.onRotateLeftBtnClick}
          onRotateRightBtnClick={this.onRotateRightBtnClick}
        />
      </Fragment>
    )
  }
}

export default PlayScreen
