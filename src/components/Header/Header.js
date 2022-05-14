import React from "react";
import {RiLoginBoxLine} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'
import { IoLogoModelS } from "react-icons/io";
import { HiDocumentAdd } from "react-icons/hi";
import { Link } from "react-router-dom";


import './Header.css'



const Header = () => {

    return(
        <>       
        <nav className="logo">
          <div className="nav-wrapper cyan darken-4">
            <span href="#" className="brand-logo "><Link to='/home'> <img className="img" width="150" height="150" src="expologo.jpeg"/> </Link> </span>
            <a href="#" data-target="slide" className="sidenav-trigger show-large" ></a>

            <ul id="nav-mobile" className="right hide-on-med-and-down menu">                
                <li className="tdtr m-1"><Link to="/login"><FaUserCircle className="icons"/> Login <RiLoginBoxLine className="icons"/></Link></li>                  
                <li className="tdtr m-1"><Link to="/add"><IoLogoModelS className="icons"/> Add Veículo <HiDocumentAdd className="icons"/></Link></li>
            </ul>

              <ul id="nav-mobile" className="left hide-on-large-only menu-sm-md tr blue-grey darken-4">             
                    <li className="tdtr"><Link to="/login"><FaUserCircle className=""/> <RiLoginBoxLine className="icons"/></Link></li>                      
              </ul>

              <ul id="nav-mobile" className="right hide-on-large-only menu-sm-md tr blue-grey darken-4">             
                    <li className="tdtr"><Link to="./add"><IoLogoModelS className=""/> <HiDocumentAdd className="icons"/></Link></li>                         
              </ul>

            </div>
        </nav>
       </>
    )
   
}

export default Header;