import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';




import Auction1 from "../images/auction1.png";

import "./homestyle.scss";
import MetaData from '../MetaData/MetaData';
//import Product from "./Product";
import {getProduct} from "../../actions/productAction";
import {useSelector , useDispatch} from "react-redux";
import Loader from '../Loader/Loader';
import { useAlert } from 'react-alert';




const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading , error } = useSelector(
(state) => state.products
  );

useEffect(() => {
  

  if(error){
    return alert.error(error);
  }
dispatch(getProduct());
  
}, [dispatch , error , alert]);

// console.log(productCount);
  return (
    <>{loading ? (<Loader/>) :(
    <>
    <MetaData title="BidNow"></MetaData>
      <section id='header' className='d-flex align-items-center homepg'>


        <div className="container-fluid nav_bg">
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' data-aos="fade-up" data-aos-delay="300">
                <h1> Bid and sell items with <strong className='brand-name'><br/>BidNow</strong></h1>

                <h2 className="my-3">
                  An online auction is a service in which auction users or participants sell or bid for products or services via the Internet.
                </h2>
                <div className='mt-3'>
                  <NavLink to="/signup" className='btn-get-started'>
                    Get Started
                  </NavLink>
                </div>

              </div>

              <div className='col-lg-6 order-1 order-lg-2 header-img ' data-aos="fade-up" data-aos-delay="400">
                  <img src={Auction1} className='img-fluid animated hedrimg' alt="auction img" />

              </div>
              </div>

            </div>
          </div>
        </div>


      </section>







    </>
    ) }</>
    
    );
};

export default Home;
