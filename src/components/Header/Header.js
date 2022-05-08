import React from "react";
import {RiLoginBoxLine} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'
import { GiCarSeat } from "react-icons/gi";
import { IoLogoModelS } from "react-icons/io";
import { HiDocumentAdd } from "react-icons/hi";

import './Header.css'



const Header = () => {



    return(
        <>       
        <nav className="logo">
          <div className="nav-wrapper cyan darken-4">
            <spam href="#" className="brand-logo "><img className="img" width="150" height="150" src="logo expo.jpeg"/></spam>
            <a href="#" data-target="slide" className="sidenav-trigger show-large" ></a>

            <ul id="nav-mobile" className="right hide-on-med-and-down menu">
              <tr >
                  <td >
                      <li className="tdtr"><a href="./login"><FaUserCircle className="icons"/> Login <RiLoginBoxLine className="icons"/></a></li>                  
                  </td>
                  <td >
                      <li className="tdtr"><a href="./add"><IoLogoModelS className="icons"/> Add Veículo <HiDocumentAdd className="icons"/></a></li>
                  </td>
              </tr>

              </ul>

              <ul id="nav-mobile" className="left hide-on-large-only menu-sm-md tr blue-grey darken-4">             
                    <li className="tdtr"><a href="./login"><FaUserCircle className=""/> <RiLoginBoxLine className="icons"/></a></li>                      
              </ul>

              <ul id="nav-mobile" className="right hide-on-large-only menu-sm-md tr blue-grey darken-4">             
                    <li className="tdtr"><a href="./add"><IoLogoModelS className=""/> <HiDocumentAdd className="icons"/></a></li>                         
              </ul>

            </div>
        </nav>
       </>
    )
   
}

export default Header;