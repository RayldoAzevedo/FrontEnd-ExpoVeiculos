import React from 'react';
import './Home.css';
import ListVeiculos from '../../components/CadastroVeiculos/ListVeiculos';

const PagesHome = () => (
  <div className="pages-home">
    Pagina de exibição de veiculos
    <br />
    <div>
      <ListVeiculos/>
    </div>
    <nav>
      <a href= "/login"> <button type="button">Sair</button> </a>
    </nav>    
  </div>
);

export default PagesHome;
