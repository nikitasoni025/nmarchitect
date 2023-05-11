import React from 'react';
import "./leftnavbar.scss";
import { Link } from "react-router-dom";
import { BiDotsHorizontal } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Leftnavbar = () => {
  return (
    <div className='leftnavbar'>
      <div className="leftnavbar-wrap">
        <ul className='nav-menu'>
          <li className='icon-button circle'><Link to={"/"}><BiDotsHorizontal /></Link></li>
          <li className='icon-button'>
            <Link to={"/"}><FaInstagram /></Link>
            <Link to={"/"}><FaFacebook /></Link>
            <Link to={"/"}><FaWhatsapp /></Link>
          </li>
          <li className='linkss'><Link to={"/"}>Expertises</Link></li>
          <li className='linkss'><Link to={"/"}>References</Link></li>
          <li className='linkss'><Link to={"/"}>About</Link></li>
          <li className='line'></li>
        </ul>
      </div>
    </div>
  )
}

export default Leftnavbar;