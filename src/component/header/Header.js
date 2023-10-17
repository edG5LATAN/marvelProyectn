import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
       <img className='header-img' src='/logo.png' alt='logo marvel' />
      </Link>
      <h1 className='header-h1'>api de marvel</h1>
    </div>
  )
}

export default Header
