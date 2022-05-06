import React from "react";
import Button from "@mui/material/Button";

import { AiTwotoneCalendar, AiOutlineSend, AiOutlineRollback } from "react-icons/ai";
import { IoLogoModelS } from "react-icons/io";
import { MdModelTraining } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa";
import { GiCarSeat } from "react-icons/gi";
import "./Cadastro.css";

const Cadastro = () => {
  return (
    <div className="corpo">
      <div className="container">
        <div className="card w-25 titulo teal lighten-2">Cadastre seu veículo</div>
      </div>
      {/* <!-- formulario --> */}
      <div className="container my-5">
        <div className="card darken-1 p-4 formulario">
          <form action="form-veiculo">
            <div className="row">
              <div className="input-field col s12 m6 l6">
                <input id="icon_prefix" type="text" className="validate" />
                <FaUserAstronaut className="icones"></FaUserAstronaut>
                <label for="icon_prefix">Proprietário</label>
              </div>

              <div className="input-field col s12 m6 l6">
                <input id="icon_email" type="tel" className="validate" />
                <IoLogoModelS className="icones"></IoLogoModelS>
                <label for="icon_email">Nome do Veículo</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12 m6 l3">
                <input id="icon_cpf" type="text" className="validate" />
                <MdModelTraining className="icones"></MdModelTraining>
                <label for="icon_cpf">Modelo</label>
              </div>
              <div className="input-field col s12 m6 l3">
                <input id="icon_phone" type="tel" className="validate" />
                <GiCarSeat className="icones"></GiCarSeat>
                <label for="icon_phone">Marca</label>
              </div>

              <div className="input-field col s12 m6 l3">
                <input id="icon_phone" type="tel" className="validate" />
                <AiTwotoneCalendar className="icones"></AiTwotoneCalendar>
                <label for="icon_phone">Ano</label>
              </div>

              <div className="input-field col s12 m6 l3">
                <input id="icon_phone" type="tel" className="validate" />
                <GiMoneyStack className="icones"></GiMoneyStack>
                <label for="icon_phone">Valor Estimado</label>
              </div>
              
            </div>
            <div className="row">
            <div className="col s12 m6 l6">
                <Button variant="contained" color="success">
                  Salvar&nbsp;&nbsp;&nbsp;<AiOutlineSend className="icones"></AiOutlineSend>
                </Button>
              </div>
              <div className="col s12 m6 l6">
                  <a href="./">
                    <Button variant="contained" color="success">
                    Voltar&nbsp;&nbsp;&nbsp;<AiOutlineRollback className="icones"></AiOutlineRollback>
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
