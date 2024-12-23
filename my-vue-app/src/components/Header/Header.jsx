import React from 'react'
import { CiSearch } from "react-icons/ci";
import './header.css';
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
   <header>
     <div className="container">
       <nav className='header-nav'>
        <div className='bars-btn'>
        <FaBars />
        </div>
           <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
         </ul>
       </nav>
  <div className="search-icon">
  <CiSearch />
  </div>
 </div>
   </header>
  )
}

export default Header