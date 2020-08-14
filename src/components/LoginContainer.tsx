import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css'
import LoginForm from './LoginForm';
import LoginRegister from './LoginRegister';


function LoginContainer() {
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"></div>

        <LoginForm />
        {/* <LoginRegister /> */}
      </div>
    </div>
  );
}

export default LoginContainer;
