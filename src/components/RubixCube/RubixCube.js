import React, { Component } from 'react'

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
  }

  render () {
    const { sequences } = this.state
    return (
      <div className='rubic-cube__scene'>
        <div className='rubix-cube--wrapper'>
          <RubixCubeSide position='front' seq={sequences[0]} />
          <RubixCubeSide position='right' seq={sequences[1]} />
          <RubixCubeSide position='back' seq={sequences[2]} />
          <RubixCubeSide position='left' seq={sequences[3]} />
          <RubixCubeSide position='top' seq={sequences[4]} />
          <RubixCubeSide position='bottom' seq={sequences[5]} />
        </div>
      </div>
    )
  }
}

export default RubixCube
