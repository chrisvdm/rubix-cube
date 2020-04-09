import React from 'react'

import RubixCubeBlock from './RubixCubeBlock'

const RubixCubeSide = ({ position, seq }) => {
  return (
    <div className={`rubix-cube__side rubix-cube__side--${position}`}>
      {seq.map((col, i) => (
        <RubixCubeBlock key={`rc-block__${i}`} col={col} />
      ))}
    </div>
  )
}

export default RubixCubeSide
