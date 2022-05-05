import React from "react";
import "./Home.css";
import ListVeiculos from "../../components/CadastroVeiculos/ListVeiculos";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PagesHome = () => (

  <div className="">
    <table>

      <tr>
        <td>
          <Header />
        </td>
      </tr>

      <tr>
        <td>
          <ListVeiculos />
        </td>
      </tr>

      <tr>
        <td>
          <Footer/>
        </td>
      </tr>
    </table>
  </div>
);

export default PagesHome;
