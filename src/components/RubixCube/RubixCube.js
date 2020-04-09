import React, { Component, Fragment } from 'react'

import RubixCubeSide from './RubixCubeSide'

class RubixCube extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sequences: [
        [
          'white',
          'white',
          'white',
          'white',
          'white',
          'white',
          'white',
          'white',
          'white'
        ],
        ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
        [
          'green',
          'green',
          'green',
          'green',
          'green',
          'green',
          'green',
          'green',
          'green'
        ],
        [
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue'
        ],
        [
          'yellow',
          'yellow',
          'yellow',
          'yellow',
          'yellow',
          'yellow',
          'yellow',
          'yellow',
          'yellow'
        ],
        [
          'orange',
          'orange',
          'orange',
          'orange',
          'orange',
          'orange',
          'orange',
          'orange',
          'orange'
        ]
      ]
    }

    this.cube = React.createRef()
  }

  render () {
    const { sequences } = this.state
    return (
      <Fragment>
        <RubixCubeSide position='front' seq={sequences[0]} />
        <RubixCubeSide position='right' seq={sequences[1]} />
        <RubixCubeSide position='back' seq={sequences[2]} />
        <RubixCubeSide position='left' seq={sequences[3]} />
        <RubixCubeSide position='top' seq={sequences[4]} />
        <RubixCubeSide position='bottom' seq={sequences[5]} />
      </Fragment>
    )
  }
}

export default RubixCube
