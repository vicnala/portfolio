import React from "react";
import {
  AccountData,
} from "drizzle-react-components";

export default ({ accounts }) => (
  <div className="App">
    <div className="section">
      <h2>Active Account</h2>
      <AccountData accountIndex="0" units="ether" precision="3" />
    </div>
  </div>
);
