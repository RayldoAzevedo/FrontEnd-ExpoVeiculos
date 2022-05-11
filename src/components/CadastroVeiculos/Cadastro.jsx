import React, { useEffect, useState } from "react";
import { Container, Button, TextField, Grid } from "@mui/material";
import apiService from '../../service/apiService'

import {
  AiTwotoneCalendar,
  AiOutlineSend,
  AiOutlineRollback,
} from "react-icons/ai";
import { IoLogoModelS } from "react-icons/io";
import { MdModelTraining } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa";
import { GiCarSeat } from "react-icons/gi";
import "./Cadastro.css";

const Cadastro = () => {

  const [proprietario, setProprietario] = useState();
  // const [modelo, setModelo] = useState();
  // const [marca, setMarca] = useState();
  // const [ano, setAno] = useState();
  // const [valor, setValor] = useState();
  // const [veiculo, setVeiculo] = useState(['']);

  const handleProprietario = (event)=> {
    setProprietario = EventTarget.value;
    console.log('digitando algo:');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviando dados');
    console.log('1', proprietario);
  }

  const saveVeiculo = (e) => {

    alert("Usuário Salvo!");
  };

  

  // useEffect ( ()=> {
  //     apiService.salvarVeiculo().then( (response)=> {
  //         setVeiculo(response.data)
  //     });
  // }, []);

  //modifica o valor do state do campo alterado
  // const onChange = (e) => {};

  return (
    <div className="corpo">
      <Grid className="container">
        <div className="card w-25 titulo teal lighten-2 col col-sm-12 col-md6 col-lg-6 info">
          Adicione um Veículo
        </div>
      </Grid>

      <div className="container my-5">
        <div className="card darken-1 p-4 formulario">
          {/* <!-- formulario --> */}
          <form
            onSubmit={handleSubmit}
            action="form-veiculo"
            method="post"
            name="form-veiculo"
            id="form-veiculo"
          >
            <div className="row">
              <div className="input-field col col-sm12 col-md-6 col-lg-l6">
                <input
                    onChange={handleProprietario} 
                    id="icon_prefix" 
                    name="proprietario" 
                    type="text" 
                    className="validate" />
                <FaUserAstronaut className="icones"></FaUserAstronaut>
                <label for="icon_prefix">Proprietário</label>
              </div>

              <div className="input-field col col-sm12 col-md-6 col-lg-l6">
                <input id="veiculo" name="descricao" type="tel" className="validate" />
                <IoLogoModelS className="icones"></IoLogoModelS>
                <label for="icon_email">Nome do Veículo</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col col-sm12 col-md-6 col-lg-3 mt-3">
                <input id="modelo" name="modelo" type="text" className="validate" />
                <MdModelTraining className="icones"></MdModelTraining>
                <label for="icon_cpf">Modelo</label>
              </div>
              <div className="input-field col col-sm12 col-md-6 col-lg-3 mt-3">
                <input id="marca" name="marca" type="tel" className="validate" />
                <GiCarSeat className="icones"></GiCarSeat>
                <label for="icon_phone">Marca</label>
              </div>

              <div className="input-field col-sm12 col-md-6 col-lg-3 mt-3">
                <input id="ano" name="ano" type="tel" className="validate" />
                <AiTwotoneCalendar className="icones"></AiTwotoneCalendar>
                <label for="icon_phone">Ano</label>
              </div>

              <div className="input-field col-sm12 col-md-6 col-lg-3 mt-3">
               <input id="valor" name="valor" type="tel" className="validate" />
                <GiMoneyStack className="icones"></GiMoneyStack> Valor Estimado
                <label for="icon_phone"> R$ </label>
              </div>
            </div>

            

            {/* action BUTTONS */}
            <div className="row">
              <div className="col s12 m6 l6">
                <Button 
                  variant="contained" 
                  color="error"
                  disableElevation
                  onClick={(e) => {
                      saveVeiculo(e);
                    }}
                  >
                  Salvar
                  &nbsp;&nbsp;&nbsp;
                  <AiOutlineSend className="icones"></AiOutlineSend>
                </Button>
              </div>
              <div className="col s12 m6 l6">
                <a href="./">
                  <Button
                    variant="contained"
                    color="error"
                    
                  >
                    Voltar
                  </Button>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
