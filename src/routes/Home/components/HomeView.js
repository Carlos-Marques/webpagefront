import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

/**
 * TODO
 * - make "slideshow" that is widespread and has progression bar and auto turns and stops if you hover it?
 *  - make to recieve image and tittle and make cards to be displayed
 * - make important links cards with appropriate descriptions and image
 *  - make component that recieves tittle + description + image and makes link cards
 * - make workshops horizontal cards
 *  - make component recieve image and tittle and make cards to be displayed
 *  - make map to all components and create horizontal list that doesn't show all
 * - make news horizontal cards (same as workshops)
 *  - make component recieve image and tittle and make cards to be displayed
 *  - make map to all components and create horizontal list that doesn't show all
 */

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
