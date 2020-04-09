import React, { Component, Fragment } from 'react'

import { RubixCube, ViewControl, RubixCubeWrapper } from '../components'

class PlayScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visibleSides: [0, 1, 2]
    }

    this.onRotateLeftBtnClick = this.onRotateLeftBtnClick.bind(this)
    this.onRotateRightBtnClick = this.onRotateRightBtnClick.bind(this)
    this.cube = React.createRef()
  }

  onRotateLeftBtnClick () {
    const rotations = [
      'translateZ(-150px) rotateY(90deg)',
      'translateZ(-150px) rotateY(180deg)',
      'translateZ(-150px) rotateY(270deg)',
      'translateZ(-150px) rotateY(0deg)'
    ]

    const inline = this.cube.current.style.transform
    const i = rotations.findIndex(r => {
      return r === inline
    })
    const next = i === 3 ? 0 : i + 1

    this.cube.current.style.transform = rotations[next]
  }

  onRotateRightBtnClick () {
    const rotations = [
      'translateZ(-150px) rotateY(-90deg)',
      'translateZ(-150px) rotateY(180deg)',
      'translateZ(-150px) rotateY(90deg)',
      'translateZ(-150px) rotateY(0deg)'
    ]

    const inline = this.cube.current.style.transform
    const i = rotations.findIndex(r => {
      return r === inline
    })
    const next = i === 3 ? 0 : i + 1

    this.cube.current.style.transform = rotations[next]
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
