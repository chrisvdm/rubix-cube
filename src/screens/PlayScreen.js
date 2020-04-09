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
    // +1
    // const vs = this.state.visibleSides
    // const hb = vs.slice(1, 3)
    // const newb = hb.map(b => (b + 1 > 4 ? 1 : b + 1))
    // const foo = vs.slice(0, 1)
    // const newVS = foo.concat(newb)
    //
    // this.setState({ visibleSides: newVS })
    console.log('left:', this.cube)
  }

  onRotateRightBtnClick () {
    // -1
    // const vs = this.state.visibleSides
    // const hb = vs.slice(1, 3)
    // const foo = vs.slice(0, 1)
    // const newb = hb.map(b => (b - 1 < 1 ? 4 : b - 1))
    // const newVS = foo.concat(newb)
    //
    // this.setState({ visibleSides: newVS })
    console.log('right:', this.cube)
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
