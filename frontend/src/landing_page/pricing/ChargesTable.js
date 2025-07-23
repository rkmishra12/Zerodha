import React from "react";
function ChargesTable() {
  return (
    <div className="container px-5 mb-5">
      <div className="row px-5">
        <h2 className="px-5 fs-3 mb-4 ">Charges for account opening</h2>
        <div className="px-5" style={{ fontSize: "1.15rem" }}>
          <table class="table table-striped border">
            <thead>
              <tr>
                <th scope="col">Type of account</th>
                <th scope="col">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td>
                  <span class="badge text-bg-success"> Free</span>
                </td>
              </tr>
              <tr>
                <td>ofline account</td>
                <td>
                  <span class="badge text-bg-success"> Free</span>
                </td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row p-5 ">
        <h2 className="px-5 fs-3 mb-4 ">
          Charges for optional value added services
        </h2>
        <div className="px-5" style={{ fontSize: "1.15rem" }}>
          <table class="table table-striped border">
            <thead>
              <tr className="p-3">
                <th scope="col">Service</th>
                <th scope="col">Billing Frquency</th>
                <th scope="col">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: 500 | Historical: 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ChargesTable;
