import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
        <div className="navs">
          <ul className='n'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Films</a></li>
            <li><a href="#">Series</a></li>
            <li><a href="#">Latest</a></li>
            <li><a href="#">My List</a></li>

          </ul>
        </div>
    </div>
  )
}

export default Navbar 