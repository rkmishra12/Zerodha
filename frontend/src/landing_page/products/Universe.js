import React from "react";

function Universe() {
  return (
    <div className="container p-5 text-center">
      <div className="row ">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row px-5" style={{ fontSize: "13px" }}>
        <div className="col p-5">
          <img
            src="media/images/zerodhafundhouse.png"
            style={{ width: "90%" }}
          ></img>
          <p className="text-muted px-5 mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col p-5 mt-1">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "90%"}}
          ></img>
          <p className="text-muted px-5 mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col p-5 mt-1">
          <img src="media/images/dittoLogo.png" style={{ width: "50%" }}></img>
          <p className="text-muted px-5 mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="row px-5" style={{ fontSize: "13px" }}>
        <div className="col px-5">
          <img src="media/images/streakLogo.png" style={{ width: "80%" }}></img>
          <p className="text-muted px-5 mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col px-5 mt-3">
          <img src="media/images/smallcaseLogo.png"></img>
          <p className="text-muted px-5 mt-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col px-5 mt-2">
          <img src="media/images/goldenpiLogo.png" style={{width:"67%"}}></img>
          <p className="text-muted px-5 mt-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
      </div>
         <button
          className="btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
    </div>
  );
}

export default Universe;
