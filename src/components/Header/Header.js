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
            <spam href="#" className="brand-logo "><img width="150" height="150" src="logo expo.jpeg"/></spam>
            <a href="#" data-target="slide" className="sidenav-trigger show-large" ></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down menu">
              <tr>
                <td >
                    <li className="tdtr"><a href="./login"><FaUserCircle className="icons"/> Login <RiLoginBoxLine className="icons"/></a></li>                  
                </td>
                <td>
                    <li className="tdtr"><a href="./add"><IoLogoModelS className="icons"/> Add Veículo <HiDocumentAdd className="icons"/></a></li>
                </td>
              </tr>
              </ul>

              <ul id="nav-mobile" className="right hide-on-large-only menu-sm-md">             
                    <li className="tdtr"><a href="./login"><FaUserCircle className=""/> <RiLoginBoxLine className=""/></a></li>          
                    <li className="tdtr"><a href="./add"><IoLogoModelS className=""/> <HiDocumentAdd className=""/></a></li>
               
              </ul>
            </div>
        </nav>
   
           <ul id="slide" className="sidenav">
               <li>
                 <div className="user-view">
                   <div className="">
                     <img src="bgCompScience.jpg"/>
                   </div>
                   <a href="#user"><img className="circle" src="avatar.png"/></a>
                   <a href="#name"><span className="white-text name">Fulano de Tal</span></a>
                   <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                 </div>
               </li>
   
               <li><a href="#!"><i className="material-icons ">cloud</i><span className=''>Expo-Veículos 2022</span></a></li>
               <li><a href="./login">Login</a></li>
              <li><a href="./add">Adicionar Veículo</a></li>
   
               <li><div className="divider"></div></li>
               <li><a className="subheader">Desenvolvedores</a></li>
               <li><a className="waves-effect" href="#!">Rayldo Azevedo</a></li>
               <li><a className="waves-effect" href="#!">Gulherme BArros</a></li>
           </ul>
       </>
    )
   
}

export default Header;