import React from "react";

function Hero() {
  return (
    <div className="container px-5 mt-5">
      <div className="row p-5 text-center">
        <h1 style={{fontSize:"3rem"}}>Charges</h1>
        <p className="text-muted fs-4 mt-2">List of all charges and taxes</p>
      </div>
      <div className="row p-5 text-center">
        <div className="col">
            <img src="media/images/pricingEquity.svg" className="p-4"></img>
            <h2>Free equity delivery</h2>
            <p  className="text-muted mt-4 lh-lg">
              All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
            </p>
        </div>
        <div className="col">
            <img src="media/images/intradayTrades.svg" className="p-4"></img>
            <h2>Intraday and F&O trades</h2>
            <p  className="text-muted mt-4 lh-lg">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
        </div>
        <div className="col">
            <img src="media/images/pricingEquity.svg" className="p-4"></img>
            <h2>Free direct MF</h2>
            <p className="text-muted  mt-4 lh-lg">
              All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
