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
    const { visibleSides } = this.props
    return (
      <div className='rubix-cube--wrapper'>
        {/* Only show 3 sides of the cube which is visible */}
        {visibleSides.map((side, i) => (
          <RubixCubeSide
            key={`rc-side__${side}`}
            index={i}
            seq={sequences[side]}
          />
        ))}
      </div>
    )
  }
}

export default RubixCube
