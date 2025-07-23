import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/education.svg" style={{width:"90%"}}/>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className="fs-2 mb-5">Free and open market education</h1>
          <p className="mb-4 text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity
            <i className=" fa fa-long-arrow-right mx-1" aria-hidden="true"></i>
          </a>
          <p className="mb-4 mt-4 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A
            <i className=" fa fa-long-arrow-right mx-1" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
