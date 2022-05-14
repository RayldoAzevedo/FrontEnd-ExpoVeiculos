import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import AddVeiculo from './AddVeiculo/AddVeiculo';
import history from '../service/history';

// import RoutesPrivate from '../components/Routes/Private';

const Routes = () => (
  
  <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/add" component = {AddVeiculo} />
        <Route path="/home" component={Home} />
        <Redirect from='*' to='/home' />
      </Switch>
  </Router>

)

export default Routes;
