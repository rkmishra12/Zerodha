import React from "react";
import { GeneralContextProvider } from "./GeneralContext";

import TopBar from "./TopBar";
import WatchList from "./WatchList";
import Summary from "./Summary";

const Kite = () => {
  return (
    <>
      <TopBar />
      <div className="dashboard-container">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
        <div className="content">
          <Summary />
        </div>
      </div>
    </>
  );
};

export default Kite;
