import React from 'react'

const ViewControl = ({ onRotateLeftBtnClick, onRotateRightBtnClick }) => (
  <div className='view-control'>
    <button className='view-control__btn' onClick={onRotateLeftBtnClick}>
      Turn Left
    </button>
    <button className='view-control__btn' onClick={onRotateRightBtnClick}>
      Turn Right
    </button>
  </div>
)

export default ViewControl
