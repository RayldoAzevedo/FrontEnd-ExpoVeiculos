import React from "react";
import "./Home.css";
import ListVeiculos from "../../components/ListarVeiculos/ListVeiculos";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PagesHome = () => (
  
    <div className="row">
      <div className="row"><Header /></div>
      <div className="row"><ListVeiculos /></div>
      <div className="row"><Footer /></div>
    </div>
 
);

export default PagesHome;
