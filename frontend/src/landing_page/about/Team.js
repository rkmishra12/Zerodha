import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container p-5">
      <div className="row px-5 ">
        <h1 className="text-center text-muted">People</h1>
      </div>

      <div className="row p-5 text-muted fs-6  ">
        <div className="col p-5 text-center">
          <img
            src="media/images/CEO4.jpg"
            style={{ width: "75%", borderRadius: "100%" }}
          ></img>
          <h4 className="mt-3">r k &nbsp; M i s h r a</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col p-5 mt-4" style={{fontSize : "1.1em"}}>
          <p className="mt-3">
            Ratikanta bootstrapped and founded Zerodha in 2025 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <Link to="/" style={{textDecoration : "none"}}> Homepage </Link> / <Link to="/" style={{textDecoration : "none"}}>TradingQ&A </Link> / <Link to="/" style={{textDecoration : "none"}}> Twitter </Link> </p>
        </div>
      </div>
      <div className="row px-5 mx-5 text-center">
        <div className="col-4">
          <img src="media/images/nikhil.png" alt="" style={{width : "70%" , borderRadius : "100%"}}></img>
          <p className="mt-3">
            Nikhil Kamath <br/>
            Co-founder & CFO
          </p>
         </div>
        <div className="col-4">
          <img src="media/images/kailash.png" alt="" style={{width: "70%" ,  borderRadius : "100%"}}></img> 
           <p className="mt-3">
            Dr. Kailash Nadh <br/>
            CTO
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/venu.png" alt="" style={{width: "70%",  borderRadius : "100%"}}></img>
             <p className="mt-3">
            Venu Madhav <br/>
            COO
          </p>
           </div>
      </div>
      <div className="row px-5 mx-5 text-center mt-3 mb-5">
        <div className="col-4">
          <img src="media/images/Hanan.png" alt="" style={{width : "70%" , borderRadius : "100%"}}></img>
          <p className="mt-3">
            Hanan Delvi <br/>
            CCO
          </p>
         </div>
        <div className="col-4">
          <img src="media/images/Seema.png" alt="" style={{width: "70%" ,  borderRadius : "100%"}}></img> 
           <p className="mt-3">
            Seema Patil <br/>
            Director
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/Karthik.png" alt="" style={{width: "70%",  borderRadius : "100%"}}></img>
             <p className="mt-3">
           Karthik Rangappa <br/>
            Cheif of Education
          </p>
           </div>
      </div>
    </div>
  );
}

export default Team;
