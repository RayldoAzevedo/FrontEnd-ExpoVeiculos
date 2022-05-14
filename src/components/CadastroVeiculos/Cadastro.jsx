import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import apiService from "../../service/apiService";


import {
  AiTwotoneCalendar,
  AiOutlineSend,
  AiOutlineLink,
} from "react-icons/ai";
import { IoLogoModelS } from "react-icons/io";
import { MdModelTraining } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa";
import { GiCarSeat } from "react-icons/gi";
import "./Cadastro.css";
import history from "../../service/history";


const Cadastro = () => {


  function handleClick() {
        console.log(veiculo)
        if(veiculo == []){
          alert("Informe os Dados")
        }
  }

  // imagem
  const [link, setLink] = useState(
    "https://s3.sa-east-1.amazonaws.com/expo.veiculos/WhatsApp+Image+2022-05-09+at+11.24.51.jpeg"
  );

  // campos
  const [proprietario, setProprietario] = useState('');
  const [modelo, setModelo] = useState();
  const [marca, setMarca] = useState();
  const [ano, setAno] = useState();
  const [valor, setValor] = useState();
  const [sobre, setSobre] = useState();
  // objeto
  const [veiculo, setVeiculo] = useState([]);

  // carregando os valores dos campor nas variaveis
  const handleUser = (e) => {
    setProprietario(e.target.value);
  };
  const handleMark = (e) => {
    setMarca(e.target.value);
  };
  const handleModel = (e) => {
    setModelo(e.target.value);
  };
  const handleYear = (e) => {
    setAno(e.target.value);
  };
  const handleSobre = (e) => {
    setSobre(e.target.value);
  };
  const handleVal = (e) => {
    setValor(e.target.value);
  };

  const handleLink = (e) => {
    setLink(e.target.value);
  };

  // METODO QUE TRATA O ENVIO DOS DADOS PARA A API
  const handleSubmit = (event) => {
    event.preventDefault();


    if (!link.trim()) {
      console.log('veiculo sem foto')
    }

    if (!proprietario.trim()) {
      console.log('campo nome esta vazio')
      return
    }
    if (!modelo.trim()) {
      console.log('campo Modelo esta vazio')
      return
    }

    if (!marca.trim()) {
      console.log('campo Marca esta vazio')
      return
    }

    if (!ano.trim()) {
      console.log('campo Ano esta vazio')
      return
    }

    setVeiculo({
      foto: link,
      proprietario,
      modelo,
      marca,
      ano,
      sobre,
      valorEstimado: valor,
    });
  };



  useEffect(() => {
    apiService.salvarVeiculo(veiculo).then((res) => {
      console.log("veiculo: ", res);
      // history.pushState('/')
      setProprietario('');
      setAno('');
      setLink("https://s3.sa-east-1.amazonaws.com/expo.veiculos/WhatsApp+Image+2022-05-09+at+11.24.51.jpeg");
      setMarca('');
      setModelo('');
      setProprietario('');
      setSobre('');
      setValor('');
      setVeiculo([])
      alert(" SALVO com sucesso! ")
      history.push('/home')
      window.location.reload()
      return setVeiculo([])
    });

  }, [veiculo]);

  return (
    <div className="corpo row">

      <div className="row border cyan darken-4 ms-3 rounded-pill">

        <div className="col-sm-12 col-md-12 col-lg-6 darken-1 imagem m-auto">
          <img className="img" src={link} width="100px" height="100px" />
        </div>

      </div>



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

            <div className="input-field campo-link col-sm-12 col-md-12 col-lg-12 w-75 m-auto mb-4">
              <input
                onChange={handleLink}
                id="link"
                name="imagem"
                type="text"
                className="mt-5"
              />
              <AiOutlineLink className="icones"></AiOutlineLink>
              <label for="icon_prefix" className="mt-5 ms-3">link da Imagem</label>
            </div>

            <div className="row">
              <div className="input-field col col-sm12 col-md-6 col-lg-l6 mt-4">
                <input
                  onChange={handleUser}
                  id="icon_prefix"
                  name="proprietario"
                  type="text"
                  className="validate"
                  value={proprietario}
                />
                <FaUserAstronaut className="icones"></FaUserAstronaut>
                <label for="icon_prefix">Proprietário</label>
              </div>

              <div className="input-field col col-sm12 col-md-6 col-lg-l6 mt-4">
                <input
                  onChange={handleModel}
                  id="modelo"
                  name="modelo"
                  type="text"
                  className="validate"
                  value={modelo}
                />
                <IoLogoModelS className="icones"></IoLogoModelS>
                <label for="icon_email">Modelo</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col col-sm12 col-md-5 col-lg-4 mt-3">
                <input
                  id="marca"
                  onChange={handleMark}
                  name="marca"
                  type="text"
                  className="validate"
                  value={marca}
                />
                <MdModelTraining className="icones"></MdModelTraining>
                <label for="icon_cpf">Marca</label>
              </div>

              <div className="input-field col-sm12 col-md-3 offset-md3 offset-lg-4 col-lg-2 mt-3">
                <input
                  id="ano"
                  onChange={handleYear}
                  name="ano"
                  type="number"
                  className="validate"
                  value={ano}
                />
                <AiTwotoneCalendar className="icones"></AiTwotoneCalendar>
                <label for="icon_phone">Ano</label>
              </div>

              <div className="input-field col-sm12 col-md-6 col-lg-6 mt-3">
                <input
                  id="valor"
                  onChange={handleVal}
                  name="valor"
                  type="number"
                  className="validate"
                  value={valor}
                />
                <GiMoneyStack className="icones"></GiMoneyStack> Valor Estimado
                <label for="icon_phone"> R$ </label>
              </div>

              <div className="col col-sm12 col-md-6 col-lg-6 mt-3">
                {/* <textarea
                  id="sobre"
                  rows="10"
                  cols="5"
                  onChange={handleSobre}
                  name="sobre"
                  type="tel"
                  className="validate"
                ></textarea> */}
                <GiCarSeat className="icones m-3"></GiCarSeat>
                <TextField
                  className="border-primary"
                  onChange={handleSobre}
                  sx={'margin: auto'}
                  placeholder="Informações importantes"
                  multiline
                  rows={5}
                  maxRows={8}
                  value={sobre}
                />

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
                  onClick={handleClick}

                >
                  Salvar &nbsp;&nbsp;&nbsp;
                  <AiOutlineSend className="icones"></AiOutlineSend>
                </Button>
              </div>
              <div className="col s12 m6 l6">
                <a href="./">
                  <Button variant="contained" color="error">
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
