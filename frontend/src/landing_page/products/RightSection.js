import React from "react";

function RightSection({ imageURL, productName, productDesc, leranmoreURL }) {
  return (
    <div className="container px-5 mt-5">
      <div className="row px-5 ">
        <div className="col-5  mt-5 p-5">
          <h1 className="mb-1 p-4">{productName}</h1>
          <p
            className="text-muted"
            style={{ fontSize: "1.2em", marginLeft: "23px" }}
          >
            {productDesc}
          </p>
          <a
            href={leranmoreURL}
            style={{ textDecoration: "none" }}
            className="mx-4"
          >
            Learn more →
          </a>
        </div>
        <div className="col-7 p-5 ">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
