import React from 'react'


//imports
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { userIsAuthenticated } from './helpers/auth'


const PageNavBar = () => {

  const handleLogout = () => {
    window.localStorage.removeItem('mMusic-app')
    Navigate('/')
  }

  return (
    <>
      <nav>
        <div className='logo'>
          <Link className='nav-link' to="/"><h1>mMusic.app</h1></Link>
        </div>
        {userIsAuthenticated() ?
          <div className='nav-link-box'>
            <Link className='nav-link' onClick={handleLogout} to='/' >Logout</Link>
            <Link className='nav-link' to="/profile">Profile</Link>
          </div>
          :
          <div className='nav-link-box'>
            <Link className='nav-link' to="/register">Register</Link>
            <Link className='nav-link' to="/login">Login</Link>
          </div>
        }
      </nav>

    </>
  )
}

export default PageNavBar