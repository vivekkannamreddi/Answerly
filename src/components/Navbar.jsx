import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-main-container'>
        <div className="nav-sections left-right left">
            <h1>Answerly</h1>
        </div>

        <div className="nav-sections middle">
            <p>Posts</p>
            <p>My-doubts</p>
            <p>Solved</p>
            <p>Answered</p>
        </div>

        <div className="nav-sections left-right right">
            <p>Sign Up</p>
            <p>Log In</p>
        </div>
    </div>
  )
}

export default Navbar