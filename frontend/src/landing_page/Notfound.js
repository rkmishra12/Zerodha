import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="container p-5 mb-4">
      <div className="row text-center">
        <h1 className="mt-5 mb-4">404 Not Found</h1>
        <p>
          Sorry! The page you are looking for is not found. Visit 
          <Link to="/" style={{ width: "20%", margin: "0 auto" }}>
             Homepage
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Notfound;
