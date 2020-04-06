import React from 'react'

import RubixCubeBlock from './RubixCubeBlock'

const RubixCubeSide = ({ index, seq }) => {
  return (
    <div className={`rubix-cube__side rubix-cube__side--${index}`}>
      {seq.map((col, i) => (
        <RubixCubeBlock key={`rc-block__${i}`} col={col} />
      ))}
    </div>
  )
}

export default RubixCubeSide
