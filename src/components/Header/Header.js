import React from "react";



const Header = () => {
    return(
        <>       
        <nav>
             <div className="nav-wrapper teal lighten-2">
               <spam href="#" className="brand-logo ">Expo Veículos</spam>
               <a href="#" data-target="slide" className="sidenav-trigger show-large" ><i className="material-icons">menu</i></a>
               <ul id="nav-mobile" className="right hide-on-med-and-down">
                 <li><a href="./login">Login</a></li>
                 <li><a href="./add">Adicionar Veículo</a></li>
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