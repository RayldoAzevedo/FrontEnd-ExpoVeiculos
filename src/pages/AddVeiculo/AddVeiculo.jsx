import React from "react";
import Cadastro from "../../components/CadastroVeiculos/Cadastro";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const AddVeiculo = () => {
  return (
    <>
    <div className="add">
      <Header/>
    </div>
    <div className="add">
      <Cadastro/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default AddVeiculo;
