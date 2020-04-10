import React from 'react'

const RubixCubeWrapper = React.forwardRef(({ children }, ref) => (
  <div className='rubic-cube__scene'>
    <div className='rubix-cube--wrapper' ref={ref}>
      {children}
    </div>
  </div>
))

export default RubixCubeWrapper
