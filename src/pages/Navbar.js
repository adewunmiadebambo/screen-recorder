import React from 'react';
import {Link} from 'react-router-dom';
import logo from './../assets/img/icon.png';
import './Navbar.css'; 

function Navbar() {
  return (
<div className="navbar">
<div className="leftSide">
      <Link to='/'><img src={logo} alt="Logo"  /></Link>
      {/* <span>
      <Link to="/">Home </Link>
      <Link to="./Works.js">How it works</Link>
      <Link to="./Start.js">Start Recording</Link>
      <Link to="./Testimonial.js">Testimonial</Link>

      </span> */}</div>

<div className="rightSide">
      {/* <ul className='links'>
          <li><Link to="/">Home </Link></li>
          <li><Link to="./Works.js">How it works</Link></li>
          <li><Link to="./Start.js">Start Recording</Link></li>
          <li><Link to="./Testimonial.js">Testimonial</Link></li>
      </ul> */}
            <Link to="/">Home </Link>
      <Link to="./Works">How It Works</Link>
      <Link to="/screenRecording">Start Recording</Link>
      <Link to="./Testimonial">Testimonial</Link>
      </div>
      </div>  

  ) 
}

export default Navbar