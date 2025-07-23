import React from "react";

function Hero() {
  return (
    <section id="supportHero">
      <div className="container p-5">
        <div className="row px-5 mt-1">
          <div className="d-flex justify-content-between">
            <h3 style={{fontSize:"1.4rem"}}>Support portal</h3>
            <a href=" " className="link-offset-3">Track tickets</a>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-7 ">
            <h4 style={{fontSize:"1.5rem",lineHeight:"2.5rem",marginBottom:"2rem"}}>
              Search for an answer or browse help topics to create a ticket
            </h4>
            <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." className="mb-3"/><br/>
            <a href=" " className="link-offset-3">Track account opening </a>
            <a href=" " className="link-offset-3">Track segment activation </a>
            <a href=" " className="link-offset-3">Intraday margins </a>
            <a href=" " className="link-offset-3">Kite user manual</a>
          </div>
          <div className="col-5" style={{paddingLeft:"1.2rem"}}>
            <h4 className="mt-5 mb-3">Featured</h4>
            <ol>
              <li>
                <a href=" ">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
              <li>
                <a href=" ">Current Buybacks - May 2025 </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
