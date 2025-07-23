import React from "react";

function Login() {
  return (
    <div className="d-flex justify-content-center vh-100 p-5">
      <div
        className="card mb-3 mt-5 shadow rounded p-5"
        style={{ maxWidth: "65%", height: "65%" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="media/images/person-CM-DzsTK.svg"
              className="img-fluid rounded-start mt-4 p-2"
              alt="..."
              style={{width:"74%"}}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-3 mb-4">Your Zerodha account is active 🎉</h5>
              <p className="card-text fs-6 text-muted mb-4">
                To get started, log in to Zerodha Kite using your User ID and
                password. You can refer to your registered email ID for more
                details.
              </p>
              <p className="card-text">
                <small className="text-body-secondary fw-bold">
                  Welcome aboard, and happy investing!
                </small>
              </p>
              <a href="http://localhost:3001/" className="btn btn-primary btn-sm mt-2 fw-bold" ><span className="d-flex justify-content-center align-items-center"><img src="media/images/kiteLogo.svg" style={{width:"22%"}} className="mt-1"/>Login to kite</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
