import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {

  return (
    <div className="col-md-6 bg-light">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-7 mx-auto">
              <h3 className="display-4">You have successfully logged in!</h3>
              <p className="text-muted mb-4">Try generation a new account and logging in with that</p>
              
              <div className="text-center d-flex justify-content-between align-items-center mt-4 ">
                <p>Go&nbsp;
                  <Link
                    to={'/Login'}
                    className="btn-link">
                    <u>back</u>
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export { HomePage };