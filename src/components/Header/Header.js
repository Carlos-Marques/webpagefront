import React from 'react'
import { IndexLink, Link } from 'react-router'
import NEECLogo from './assets/neecist.png'
import './Header.scss'

/**
 * TODO
 * - make top bar that follows sidebar or not?
 *  - NEEC logo that links to main page
 *  - make buttons to What's NEEC + Events + Workshops + Oportunities + Contacts and respective layouts
 */

export const Header = () => (
  <div>
    <IndexLink to='/' activeClassName='route--active'>
      <img
      alt='NEECIST Logo'
      className='neeclogo'
      src={NEECLogo} />
    </IndexLink>
    <Link to='/counter' activeClassName='route--active'>
      What's NEEC
    </Link>
    {' Events '}
    {' Workshops '}
    {' Oportunities '}
    {' Contacts '}
  </div>
)

export default Header
