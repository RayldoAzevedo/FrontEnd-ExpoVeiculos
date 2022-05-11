import React  from "react";
import {FaInstagram, FaGithub, FaFacebook} from 'react-icons/fa'

const Footer = () => {
    return(
        <>
        
         <footer className="page-footer blue-grey darken-4">
          <div className="container">
            <div className="row">
              <div className="col m4 l2 s12">
                <h5 className="white-text">CMP 1491</h5>
                <p className="grey-text text-lighten-4">
                  Expo Veiculos 2022
                </p>
              </div>
              <div className="col m4 l4 s12">
                <h5 className="white-text">Desenvolvimento</h5>
                <p className="grey-text text-lighten-4">
                  Rayldo Azevedo e Guilherme Barros
                </p>
              </div>
              <div className="col m4 l2  s12">
                <a
                  className="grey-text text-lighten-4"
                  href="https://github.com/Rayzev/FrontEnd-ExpoVeiculos"
                >
                  <h5 className="white-text mouse">
                    Código disponível no GitHub
                  </h5>
                </a>
              </div>
              <div className="col s4 l4 s12">
                <h5 className="white-text">Links de Contato</h5>
                <ul>
                  <div className="col s2 m2 l2">
                    <li>
                      <a
                        className="grey-text text-lighten-3"
                        href="https://www.instagram.com/rayrayazevedo/"
                      >
                        <FaInstagram className="icon-size"></FaInstagram>
                      </a>
                    </li>
                    <li>
                      <a
                        className="grey-text text-lighten-3"
                        href="https://www.facebook.com/rayldoazevedo"
                      >
                        <FaFacebook className="icon-size"></FaFacebook>
                      </a>
                    </li>
                  </div>
                  <div className="col s2 m2 l2">
                    <li>
                      <a
                        className="grey-text text-lighten-3"
                        href="https://github.com/Rayzev"
                      >
                        <FaGithub className="icon-size"></FaGithub>
                        
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="grey-text text-lighten-3 vercel"
                        href="https://vercel.com/"
                      >
                        Vercel
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">© 2022 Copyright Expo Veiculos</div>
          </div>
        </footer>
        
        </>
    )
}

export default Footer;