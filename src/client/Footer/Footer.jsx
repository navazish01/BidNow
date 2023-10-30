import React, { useEffect, useState } from 'react';
import "./footer.scss";
import { NavLink, useHistory } from 'react-router-dom';

import {AiOutlineRight } from 'react-icons/ai';


import 'font-awesome/css/font-awesome.min.css';



const Footer = () => {

  // const [userData, setUserData] = useState({ name: "", email: "", subject: "", message: "" });
  // const [showButton, setShowButton] = useState(true);
  // const history = useHistory();
  // const userContact = async () => {

  //   try {
  //     const res = await fetch('/getdata', {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //     });
  //     const data = await res.json();
  //     // console.log(data);
  //     setUserData({ ...userData, name: data.name, email: data.email });
  //     // console.log(`data send to backend`);

  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;

  //     }


  //   } catch (err) {
  //     console.log(err);
  //   }

  // }
  // /*  USEEFFECT HOOK -> RUN ONLY ONE TIME WHEN FUNCTION IS CALLED -> ARRAY DENOTES -> NO OF TYMS USEEFFECT CALLLS -> callProfilePage is async function -> so we can not use it inside useEffect */
 
  // useEffect(() => {

  //   userContact();
  // }, []);

  // const newsLetterSubmitHandler = () => {
  //   console.log("Handler called");
  //   history.push('/');
  //       setShowButton(false);

  // }




  return (
    <>
    <div className="footercls">
    <footer id="footer">
    {/* {showButton && (
<div className="footer-newsletter">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h4>Join Our Newsletter</h4>
        <p>Be the first to know about exciting new Auctions , special events and much more</p>
        <form    onSubmit={newsLetterSubmitHandler}>
          <input type="email" name="email" value={userData.email}/><input type="submit" value="Subscribe"/>
        </form>
      </div>
    </div>
  </div>
</div>
)} */}

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