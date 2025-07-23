import React from "react";
import Hero from "./Hero";
import Tabs from "./Tabs";
import Charges from "./Charges";
import ChargesTable from "./ChargesTable";

function PricingPage() {
  return (
    <>
      <Hero />
      <Tabs/>
      <Charges />
      <ChargesTable />
    </>
  );
}

export default PricingPage;
