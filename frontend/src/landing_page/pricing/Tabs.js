import React, { useState } from "react";

function Tab() {
  const [activeTab, setActiveTab] = useState("equity");
  return (
    <div className="container px-5">
      <div className="row px-5">
       <div className="px-5">
             <ul class="nav nav-underline border-bottom mb-4 fs-5">
          <li class="nav-item">
            <a
              class={` nav-link ${activeTab === "equity" ? "active" : ""}`}
              aria-current="page"
              onClick={() => setActiveTab("equity")}
            >
              Equity
            </a>
          </li>
          <li class="nav-item">
            <a
              class={` nav-link ${activeTab === "currency" ? "active" : ""}`}
              aria-current="page"
              onClick={() => setActiveTab("currency")}
            >
              Currency
            </a>
          </li>
          <li class="nav-item">
            <a
              class={` nav-link ${activeTab === "commdity" ? "active" : ""}`}
              aria-current="page"
              onClick={() => setActiveTab("commdity")}
            >
              Commodity
            </a>
          </li>
        </ul>
       </div>

        <div className="px-5 ">
            
          {activeTab === "equity" && (
            <table
              class="table table-striped border align-middle lh-lg"
              style={{ fontSize: "0.925rem" }}
            >
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Equity delivery</th>
                  <th scope="col">Equity intraday</th>
                  <th scope="col">F&O - Futures</th>
                  <th scope="col">F&O - Options</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                <tr>
                  <td scope="row">Brokerage</td>
                  <td scope="row">Zero Brokerage</td>
                  <td scope="row">
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td scope="row">
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td scope="row">Flat Rs. 20 per executed order</td>
                </tr>
                <tr>
                  <td scope="row">STT/CTT</td>
                  <td scope="row">0.1% on buy & sell</td>
                  <td scope="row">0.025% on the sell side</td>
                  <td scope="row">0.02% on the sell side</td>
                  <td scope="row">
                    <ul>
                      <li>
                        0.125% of the intrinsic value on options that are bought
                        and exercised
                      </li>
                      <li>0.1% on sell side (on premium)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    Transaction <br />
                    charges
                  </td>
                  <td scope="row">
                    NSE: 0.00297% <br />
                    BSE: 0.00375%
                  </td>
                  <td scope="row">
                    NSE: 0.00297% <br />
                    BSE: 0.00375%
                  </td>
                  <td scope="row">
                    NSE: 0.00173% <br />
                    BSE: 0
                  </td>
                  <td scope="row">
                    NSE: 0.03503% (on premium)
                    <br />
                    BSE: 0.0325% (on premium)
                  </td>
                </tr>
                <tr>
                  <td scope="row">GST</td>
                  <td scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td scope="row">SEBI charges</td>
                  <td scope="row">₹10 / crore </td>
                  <td scope="row">₹10 / crore </td>
                  <td scope="row">₹10 / crore </td>
                  <td scope="row">₹10 / crore </td>
                </tr>
                <tr>
                  <td scope="row">Stamp charges</td>
                  <td scope="row">0.015% or ₹1500 / crore on buy side</td>
                  <td scope="row">0.003% or ₹300 / crore on buy side</td>
                  <td scope="row">0.002% or ₹200 / crore on buy side</td>
                  <td scope="row">0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          )}

          {activeTab === "currency" && (
            <table
              class="table table-striped border align-middle lh-lg"
              style={{ fontSize: "0.925rem" }}
            >
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">currency futures</th>
                  <th scope="col">currency options</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                <tr>
                  <td scope="row">Brokerage</td>
                  <td scope="row">
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td scope="row">₹ 20/executed order</td>
                </tr>
                <tr>
                  <td scope="row">STT/CTT</td>
                  <td scope="row">No STT</td>
                  <td scope="row">No STT</td>
                </tr>
                <tr>
                  <td scope="row">Transaction charges</td>
                  <td scope="row">
                    NSE: 0.00035%
                    <br />
                    BSE: 0.00045%
                  </td>
                  <td scope="row">
                    NSE: 0.0311% <br />
                    BSE: 0.001%
                  </td>
                </tr>
                <tr>
                  <td scope="row">GST</td>
                  <td scope="row">
                    18% on (brokerage + SEBI charges + transaction charges){" "}
                  </td>
                  <td scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td scope="row">SEBI charges</td>
                  <td scope="row">₹10 / crore</td>
                  <td scope="row">₹10 / crore </td>
                </tr>
                <tr>
                  <td scope="row">Stamp charges</td>
                  <td scope="row">0.0001% or ₹10 / crore on buy side</td>
                  <td scope="row">0.0001% or ₹10 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          )}

          {activeTab === "commdity" && (
            <table
              class="table table-striped border align-middle lh-lg"
              style={{ fontSize: "0.925rem" }}
            >
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Commodity futures</th>
                  <th scope="col">Commodity options</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                <tr>
                  <td scope="row">Brokerage</td>
                  <td scope="row">
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td scope="row">₹ 20/executed order</td>
                </tr>
                <tr>
                  <td scope="row">STT/CTT</td>
                  <td scope="row">0.01% on sell side (Non-Agri)</td>
                  <td scope="row">0.05% on sell side</td>
                </tr>
                <tr>
                  <td scope="row">
                    Transaction
                    charges
                  </td>
                  <td scope="row">
                    MCX: 0.0021% <br />
                    NSE: 0.0001%
                  </td>
                  <td scope="row">
                    MCX: 0.0418% <br />
                    NSE: 0.001%
                  </td>
                </tr>
                <tr>
                  <td scope="row">GST</td>
                  <td scope="row">
                    18% on (brokerage + SEBI charges + transaction charges){" "}
                  </td>
                  <td scope="row">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td scope="row">SEBI charges</td>
                  <td scope="row">
                    Agri:
                    <br />
                    ₹1 / crore
                    <br />
                    Non-agri:
                    <br />
                    ₹10 / crore
                  </td>
                  <td scope="row">₹10 / crore </td>
                </tr>
                <tr>
                  <td scope="row">Stamp charges</td>
                  <td scope="row">0.002% or ₹200 / crore on buy side</td>
                  <td scope="row">0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          )}

        </div>
      </div>
    </div>
  );
}

export default Tab;
