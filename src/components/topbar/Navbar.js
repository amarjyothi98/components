import React from 'react'
import { Link } from "react-router-dom"
import './navbar.css'

import HomeIcon from '@mui/icons-material/Home';
import NightlightIcon from '@mui/icons-material/Nightlight';
import WindowIcon from '@mui/icons-material/Window';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="left">  
            <Link to="/" style={{textDecoration: "none"}} >  
                <span className='logo-name'>Trendings</span>
            </Link>
            <HomeIcon/>
            <NightlightIcon/>
            <WindowIcon/>
            <div className="search">
                <SearchIcon/>
                <input type="text" placeholder='search' className='search-input-box' />
            </div>
        </div>
        <div className="right">
            <PersonIcon/>
            <EmailIcon/>
            <NotificationsIcon/>
            <div className="user">
                <img src="/assets/turtle.jpg" alt="" className='nav-logo-img'/>
                <span className='logo-user-name'>Amar Jyothi</span>
            </div>
        </div>
    </div>
  )
}
