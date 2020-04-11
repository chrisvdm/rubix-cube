import React, { Component, Fragment } from 'react'

import { RubixCube, ViewControl, RubixCubeWrapper } from '../components'

class PlayScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visibleSides: [0, 1, 2],
      rotation: { y: 45, x: -15, z: -15 }
    }

    this.onRotateLeftBtnClick = this.onRotateLeftBtnClick.bind(this)
    this.onRotateRightBtnClick = this.onRotateRightBtnClick.bind(this)
    this.onRotateUpBtnClick = this.onRotateUpBtnClick.bind(this)
    this.cube = React.createRef()
  }

  getIndex (rotation, dir, viewArray) {
    const index = viewArray.findIndex(view => view === rotation)
    if (dir !== 0) {
      const newIndex = index + dir
      if (newIndex === viewArray.length) {
        return 0
      } else if (newIndex < 0) {
        return viewArray.length - 1
      } else {
        return newIndex
      }
    }
    return index
  }

  rotateCube (h, v) {
    const {
      rotation: { y }
    } = this.state
    const hView = [45, 135, 225, 315]
    const vView = [-15, 15, 15, -15]
    const zView = [-15, -15, 15, 15]
    const index = this.getIndex(y, h, hView)
    const hValue = hView[index]
    const vValue = vView[index]
    const zValue = zView[index]
    const template = `translateZ(-400px) rotateY(${hValue}deg) rotateX(${vValue}deg) rotateZ(${zValue}deg)`

    this.setState(
      { rotation: { y: hValue, x: vValue, z: zValue } },
      () => (this.cube.current.style.transform = template)
    )
  }

  onRotateUpBtnClick () {
    this.rotateCube(0, 1)
  }

  onRotateLeftBtnClick () {
    this.rotateCube(-1, 0)
  }

  onRotateRightBtnClick () {
    this.rotateCube(1, 0)
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
