import React from 'react'
import './style.css'

function Header() {
  return (
    <div className='nav justify-content-between'>
        <h3>Get the App</h3>
        <ul className='nav'>
            <li><a href="#" className='nav-link'>Investor Relation</a></li>
            <li><a href="#" className='nav-link'>Add Restaurant</a></li>
            <li><a href="#" className='nav-link'>Login</a></li>
            <li><a href="#" className='nav-link'>Sign up</a></li>
        </ul>
    </div>
  )
}

export default Header