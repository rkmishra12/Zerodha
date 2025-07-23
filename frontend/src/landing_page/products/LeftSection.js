import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesc,
  tryDemoURL,
  leranmoreURL,
  googleplay,
  appstore,
}) {
  return (
    <div className="container px-5">
      <div className="row px-5 mt-5">
        <div className="col-7 p-5">
          <img src={imageURL} ></img>
        </div>
        <div className="col-5  mt-5 px-5" >
          <h1 className="mb-4 px-4 mt-5">{productName}</h1>
          <p className="text-muted" style={{fontSize:"1.2em" , marginLeft:"22px"}}>{productDesc}</p>
          <div >
            <a href={tryDemoURL} style={{textDecoration :"none"}} className="mx-4">Try Demo →</a>
            <a href={leranmoreURL} style={{textDecoration:"none"}} className="mx-5">Learn more →</a>
          </div>
          <div className="px-4 mt-4">
            <a href={googleplay} style={{marginRight:"20px"}}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appstore}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
