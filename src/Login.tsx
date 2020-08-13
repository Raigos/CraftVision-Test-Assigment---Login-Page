import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';


function Login() {
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"></div>


        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">

            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-4">Welcome to VisionCraft!</h3>
                  <p className="text-muted mb-4">Test assigment login page.</p>
                  <form>
                    <div className="form-group mb-3">
                      <input id="inputEmail" type="email" placeholder="Email address" className="form-control rounded-pill border-0 shadow-sm px-4" />
                    </div>

                    <div className="form-group mb-3 input-group">
                      <input id="inputPassword" type="password" placeholder="Password" required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary password-field" />
                      <button id="toggle-password" type="button" className="d-none"
                        aria-label="Show password as plain text. Warning: this will display your password on the screen.">
                      </button>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                    <button type="submit" className="btn btn-outline-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Register Account</button>
                    <div className="text-center d-flex justify-content-between align-items-center mt-4 "><p>Created by <a href="https://www.linkedin.com/in/Raigo-Tuulik/" className="font-italic text-muted">
                      <u>Raigo Tuulik</u></a></p>


                    </div>

                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
