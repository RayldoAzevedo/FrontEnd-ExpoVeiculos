import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Cadastro from '../components/CadastroVeiculos/Cadastro';
import StoreProvider from '../components/Storage/Provider';
import RoutesPrivate from '../components/Routes/Private';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/add" component = {Cadastro} />
        <RoutesPrivate path="/" component={Home} />
      </Switch>
    </StoreProvider>
  </Router>
)

export default PagesRoot;
