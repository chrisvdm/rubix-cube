import React, { Component } from 'react'

class RubixCube extends Component {
  render () {
    return (
      <div className='rubix-cube--wrapper'>
        <div className='rubix-cube__side rubix-cube__side--1' />
        <div className='rubix-cube__side rubix-cube__side--2' />
        <div className='rubix-cube__side rubix-cube__side--3' />
        <div className='rubix-cube__side rubix-cube__side--4' />
        <div className='rubix-cube__side rubix-cube__side--5' />
        <div className='rubix-cube__side rubix-cube__side--6' />
      </div>
    )
  }
}

export default RubixCube
