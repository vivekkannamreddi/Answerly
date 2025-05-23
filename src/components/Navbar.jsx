import React from 'react'
import './Navbar.css'
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
   const tokenAnswerly = localStorage.getItem('tokenAnswerly');
     const handleLogout = () => {
          localStorage.removeItem('tokenAnswerly')
          navigate('/')
        }
  return (
    <div className='navbar-main-container'>
        <div className="nav-sections left-right left">
            <h1 onClick={()=>{navigate('/')}}>Answerly</h1>
        </div>

        <div className="nav-sections middle">
            <p className='nav-elements'>Posts</p>
            <p className='nav-elements'>My-doubts</p>
            <p className='nav-elements'>Solved</p>
            <p className='nav-elements'>Answered</p>
        </div>

        <div className="nav-sections left-right right">
            {tokenAnswerly ? (
          <a className='nav-elements' onClick={handleLogout}>Log Out</a>
        ) : (
          <>
            <Link className='nav-elements' to="/signup">Sign Up</Link>
            <Link className='nav-elements' to="/login">Log In</Link>
          </>
        )}
            
        </div>
    </div>
  )
}

export default Navbar

