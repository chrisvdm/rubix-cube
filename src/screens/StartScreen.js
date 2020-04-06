import React, { Fragment } from 'react'

const StartScreen = ({ onStartBtnClick }) => (
  <Fragment>
    <button onClick={e => onStartBtnClick(e)}>Play :)</button>
  </Fragment>
)

export default StartScreen
