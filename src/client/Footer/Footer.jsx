
import "./footer.scss";
import { NavLink } from 'react-router-dom';

import {AiOutlineRight } from 'react-icons/ai';


import 'font-awesome/css/font-awesome.min.css';



const Footer = () => {

  return (
    <>
    <div className="footercls">
    <footer id="footer">
  

<div className="footer-top">
  <div className="container">
    <div className="row">
      

      <div className="col-lg-3 col-md-6 footer-contact " >
        <h3>BidNow</h3>
        
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
        {/* <li><NavLink to="/addlot" excat className="nav-link">Add Lot</NavLink></li> */}
        <li><AiOutlineRight/> <NavLink to="/" excat className="nav-link">About us</NavLink></li>
        <li><AiOutlineRight/> <NavLink to="/service" excat className="nav-link">Services</NavLink></li>
        <li><AiOutlineRight/> <NavLink to="/contact" excat className="nav-link">Contact Us</NavLink></li>

          
          
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>

        <li><AiOutlineRight/> <NavLink to="/signin" excat className="nav-link">Sign In</NavLink></li>
        <li><AiOutlineRight/> <NavLink to="/signin" excat className="nav-link">Register</NavLink></li>
        <li><AiOutlineRight/> <NavLink to="/lot" excat className="nav-link">Active Auctions</NavLink></li>



          
        </ul>
      </div>

  

    </div>
  </div>
</div>


</footer>
</div>


    </>
  )
}

export default Footer