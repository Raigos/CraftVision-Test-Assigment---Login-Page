import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';


function RegisterPage() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const registering = useSelector(state => state.registration.registering);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.firstName && user.lastName && user.username && user.password) {
      dispatch(userActions.register(user));
    }
  }

  return (
    <div className="col-md-6 bg-light">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-7 mx-auto">
              <h3 className="display-4">Make an account!</h3>
              <p className="text-muted mb-4">Add your details below</p>


              <form name="form" onSubmit={handleSubmit}>

                <div className="form-group mb-3">
                  <input
                    required
                    id="inputEmail"
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="form-control rounded-pill border-0 shadow-sm px-4" />
                </div>

                <div className="form-group mb-3">
                  <input
                    required
                    id="inputEmail"
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="form-control rounded-pill border-0 shadow-sm px-4" />
                </div>

                <div className="form-group mb-3">
                  <input
                    required
                    id="inputEmail"
                    type="email"
                    name="username"
                    value={user.username}
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
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Password (Min 6 characters)"
                    className="form-control rounded-pill border-0 shadow-sm px-4 text-primary password-field" />
                </div>


                <button
                  type="submit"
                  className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                  {registering} Register
                </button>

                <Link to={'/'} className="btn-link">
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                    Cancel
                  </button>
                </Link>


                <div
                  className="text-center d-flex justify-content-between align-items-center mt-4 ">
                  <p>Created by&nbsp;
                    <a
                      href="https://www.linkedin.com/in/Raigo-Tuulik/"
                      className="font-italic text-muted">
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

export { RegisterPage };