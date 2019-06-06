import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';

export default class Support extends React.Component {
  render() {
    const { drizzle, drizzleState } = this.props;
    const web3 = drizzle.web3;
    let network = "Unknown";
    let to = "0xef74ff1237c22Fa17fd147f570Ee43e9f1F7F84E";  // Test

    // get the network Id
    const networkId = drizzleState.web3.networkId;
    if (networkId === 1) {
      network = "Main";
      to = "0xF2efFF7DB7fdA1b2371460F153c801Ecf6aC8b54";
    } else if (networkId === 3) {
      network = "Ropsten";
    } else if (networkId === 42) {
      network = "Kovan";
    } else if (networkId === 4) {
      network = "Rinkeby";
    } else if (networkId === 5) {
      network = "Goerly";
    }


    return (
      <div className="magic-wand bounce-xy" onClick={() => {
        const account = drizzleState.accounts[0];
        web3.eth.sendTransaction({
          from:   account,
          to:     to,
          value:  "10000000000000000",
          gas:    21000,
          data:   ""
        }, (err, hash) => {
          if (!err) console.log(hash + " success");
          else console.error(err);
        });
      }}>
        <FontAwesomeIcon icon={faPeopleCarry} />
        <div className="magic-text">Support the LZR DAO in <b>{network}</b> network</div>
      </div>
    );
  }
}
