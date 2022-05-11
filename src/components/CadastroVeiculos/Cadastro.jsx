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

  const [user, setUser] = useState();
  const [model, setModel] = useState();
  const [mark, setMark] = useState();
  const [year, setYear] = useState();
  const [val, setVal] = useState();
  const [veiculo, setVeiculo] = useState({});

  const handleUser = (e)=> {
    setUser(e.target.value);
    console.log('User:' + e.target.value);
  }
  const handleMark = (e)=> {
    setMark(e.target.value);
    console.log('Marca:' + e.target.value);
  }
  const handleModel = (e)=> {
    setModel(e.target.value);
    console.log('Modelo:' + e.target.value);
  }
  const handleYear = (e)=> {
    setYear(e.target.value);
    console.log('Ano:' + e.target.value);
  }
  const handleVal = (e)=> {
    setVal(e.target.value);
    console.log('Valor:' + e.target.value);
  }

  const handleSubmit = (e)=> {
    
    setVeiculo({
      proprietario: user,
      modelo: model,
      marca: mark,
      ano: year,
      valor: val
    })

    console.log('Formulário enviando dados: '+ veiculo);
    e.preventDefault();
    
  };

  const saveVeiculo = (e) => {

   

    console.log("parametro" , e + "veiculo: ", veiculo);
  };

  

  useEffect ( ()=> {
      apiService.salvarVeiculo().then( (response)=> {
          setVeiculo(response.data)
      });
  }, [handleSubmit]);

  //modifica o valor do state do campo alterado
  // const onChange = (e) => {};

  return (
    <div className="corpo row">
      <Grid className="container row ms-4">
        <div className="card w-25 titulo teal lighten-2 col col-sm-12 col-md6 col-lg-6 info">
          Adicione um Veículo
        </div>
      </Grid>

      <div className="container ms-2">
        <div className="card darken-1 p-4 formulario">
          {/* <!-- formulario --> */}
          <form
            onSubmit={handleSubmit}
            action="incluir-veiculo"
            method="post"
            name="form-veiculo"
            id="fomr-veiculo"
          >
            <div className="row">
              <div className="input-field col col-sm12 col-md-6 col-lg-l6">
                <input
                    onChange={handleUser} 
                    id="icon_prefix" 
                    name="proprietario" 
                    type="text" 
                    className="validate" />
                <FaUserAstronaut className="icones"></FaUserAstronaut>
                <label for="icon_prefix">Proprietário</label>
              </div>

              <div className="input-field col col-sm12 col-md-6 col-lg-l6">
                <input 
                    onChange={handleMark}
                    id="veiculo" name="descricao" type="tel" className="validate" />
                <IoLogoModelS className="icones"></IoLogoModelS>
                <label for="icon_email">Nome do Veículo</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col col-sm12 col-md-6 col-lg-3 mt-3">
                <input 
                    id="modelo"
                    onChange={handleModel} 
                    name="modelo" 
                    type="text" 
                    className="validate" />
                <MdModelTraining className="icones"></MdModelTraining>
                <label for="icon_cpf">Modelo</label>
              </div>

              <div className="input-field col col-sm12 col-md-6 col-lg-3 mt-3">
                <input id="sobre" name="sobre" type="tel" className="validate" />
                <GiCarSeat className="icones"></GiCarSeat>
                <label for="sobre">Sobre</label>
              </div>

              <div className="input-field col-sm12 col-md-6 col-lg-3 mt-3">
                <input 
                    id="ano"
                    onChange={handleYear} 
                    name="ano" type="tel" 
                    className="validate" />
                <AiTwotoneCalendar className="icones"></AiTwotoneCalendar>
                <label for="icon_phone">Ano</label>
              </div>

              <div className="input-field col-sm12 col-md-6 col-lg-3 mt-3">
               <input 
                  id="valor" 
                  onChange={handleVal}
                  name="valor" type="number" className="validate" />
                <GiMoneyStack className="icones"></GiMoneyStack> Valor Estimado
                <label for="icon_phone"> R$ </label>
              </div>
            </div>

            

            {/* action BUTTONS */}
            <div className="row">
              <div className="col s12 m6 l6">
                <Button 
                  type="onSubmit"
                  variant="contained" 
                  color="error"
                  disableElevation
                  onClick={ (e) => {
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
