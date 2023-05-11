import React from 'react';
import "./rightnavbar.scss";
import { Link } from 'react-router-dom';

const Rightnavbar = () => {
  return (
    <div className='rightnavbar'>
      <div className="rightnavbar-wrap">
        <ul className="nav-menu">
          <li className="circle"></li>
          <li className='links'><Link>Contact</Link></li>
          <li className='links'><Link>Services</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Rightnavbar;