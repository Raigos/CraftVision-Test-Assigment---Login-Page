import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import '../index.css';

import LoginForm from './LoginForm';
import LoginRegister from './LoginRegister';


function LoginContainer() {
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"></div>

        <Router>
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/register-account' component={LoginRegister} />
        </Router>

      </div>
    </div>
  );
}

export default LoginContainer;
