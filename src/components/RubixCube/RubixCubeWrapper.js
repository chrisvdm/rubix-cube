import React from 'react'

const RubixCubeWrapper = React.forwardRef((props, ref) => (
  <div className='rubic-cube__scene'>
    <div className='rubix-cube--wrapper' ref={ref}>
      {props.children}
    </div>
  </div>
))

export default RubixCubeWrapper
