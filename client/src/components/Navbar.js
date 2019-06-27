import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <Link to='/' ><img id="houseLogo" src="https://cdn.hipwallpaper.com/i/18/79/rFtbm9.png" alt="house"/></Link>
            <Link to='/about' id='about-link'>About</Link>
            <Link to='/postPage'>Post</Link>
        </div>
    )
}

export default Navbar
