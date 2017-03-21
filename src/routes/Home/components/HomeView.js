import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
      <div className='importantlinks'>
      <h5>Estagios</h5>
      <h5>NEECLab</h5>
      <h5>Salas</h5>
      <h5>Drive MEEC</h5>
      </div>
      <div className='Workshops'>
      <h4>Workshops</h4>
      </div>
      <div className='Events'>
      <h4>Events</h4>
      </div>
  </div>
)

export default HomeView
