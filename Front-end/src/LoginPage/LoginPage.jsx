import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';


function LoginPage() {

  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  return (
    <div className="col-md-6 bg-light">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-7 mx-auto">
              <h3 className="display-4">Welcome to VisionCraft!</h3>
              <p className="text-muted mb-4">Test assigment login page</p>


              <form name="form" onSubmit={handleSubmit}>

                <div className="form-group mb-3">
                  <input
                    required
                    id="inputEmail"
                    type="email"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="form-control rounded-pill border-0 shadow-sm px-4" />
                </div>

                <div className="form-group mb-3 input-group">
                  <input
                    required
                    id="inputPassword"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="form-control rounded-pill border-0 shadow-sm px-4 text-primary password-field" />
                </div>


                <button
                  type="submit"
                  className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                  {loggingIn} Sign in
                </button>

                <Link
                  to={'/register-account'}
                  className="btn-link">
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                    Register Account
                  </button>
                </Link>


                <div className="text-center d-flex justify-content-between align-items-center mt-4 ">
                  <p>Created by&nbsp;
                      <a href="https://www.linkedin.com/in/Raigo-Tuulik/" className="font-italic text-muted">
                      <u>Raigo Tuulik</u>
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { LoginPage };