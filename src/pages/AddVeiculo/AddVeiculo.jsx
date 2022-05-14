import React from "react";
import Cadastro from "../../components/CadastroVeiculos/Cadastro";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const AddVeiculo = () => {

  return (

    <div className="row">
        <div className="add row">
          <Header/>
        </div>
        <div className="add row">
          <Cadastro/>
        </div>
        <div className="row">
          <Footer/>
        </div>
    </div>
   
  );
};

export default AddVeiculo;
