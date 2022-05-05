import React from "react";


const Header = () => {
    return(
        <>       
        <nav>
             <div className="nav-wrapper">
               <a href="#" className="brand-logo logo-title">Materialize</a>
               <a href="#" data-target="slide" className="sidenav-trigger show-large" ><i className="material-icons">menu</i></a>
               <ul id="nav-mobile" className="right hide-on-med-and-down">
                 <li><a href="https://pt-br.reactjs.org">React</a></li>
                 <li><a href="https://spring.io/projects/spring-boot">Spring-Boot</a></li>
                 <li><a href="https://materializecss.com/getting-started.html">Materialize</a></li>
                 <li><a href="http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome">React-Materialize</a></li>
                 </ul>
               </div>
           </nav>
   
           <ul id="slide" className="sidenav">
               <li>
                 <div className="user-view">
                   <div className="background">
                     <img src="bgCompScience.jpg"/>
                   </div>
                   <a href="#user"><img className="circle" src="avatar.png"/></a>
                   <a href="#name"><span className="white-text name">Fulano de Tal</span></a>
                   <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                 </div>
               </li>
   
               <li><a href="#!"><i className="material-icons ">cloud</i><span className=''>Meu Aprendizado</span></a></li>
               <li><a href="https://pt-br.reactjs.org">React</a></li>
               <li><a href="https://spring.io/projects/spring-boot">Spring-Boot</a></li>
               <li><a href="https://materializecss.com/getting-started.html">Materialize</a></li>
               <li><a href="http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome">React-Materialize</a></li>
   
               <li><div className="divider"></div></li>
               <li><a className="subheader">Instrutores</a></li>
               <li><a className="waves-effect" href="#!">Rayldo Azevedo</a></li>
               <li><a className="waves-effect" href="#!">Estevão Sampaio</a></li>
           </ul>
       </>
    )
   
}

export default Header;