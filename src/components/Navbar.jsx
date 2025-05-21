import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-main-container'>
        <div className="nav-sections left-right left">
            <h1>Answerly</h1>
        </div>

        <div className="nav-sections middle">
            <p className='nav-elements'>Posts</p>
            <p className='nav-elements'>My-doubts</p>
            <p className='nav-elements'>Solved</p>
            <p className='nav-elements'>Answered</p>
        </div>

        <div className="nav-sections left-right right">
            <p className='nav-elements'>Sign Up</p>
            <p className='nav-elements'>Log In</p>
        </div>
    </div>
  )
}

export default Navbar