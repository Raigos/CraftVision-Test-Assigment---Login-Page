import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../_helpers';
import { PrivateRoute } from '../_components';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { HomePage } from '../HomePage';


class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-md-flex bg-image" />

          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route exact path='/' component={LoginPage} />
              <Route exact path='/register-account' component={RegisterPage} />
              <Route exact path='/login' component={LoginPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>

        </div>
      </div>
    )
  };
}

export { App };