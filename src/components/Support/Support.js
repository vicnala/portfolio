import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';

export default class Support extends React.Component {
  render() {
    return (
      <div className="magic-wand bounce-xy" onClick={() => {
        const { drizzle, drizzleState } = this.props;
        const web3 = drizzle.web3;
        const account = drizzleState.accounts[0];
        web3.eth.sendTransaction({
          from:   account,
          to:     "0xef74ff1237c22Fa17fd147f570Ee43e9f1F7F84E",
          value:  "10000000000000000",
          gas:    200000,
          data:   ""
        }, (err, hash) => {
          if (!err) console.log(hash + " success");
          else console.error(err);
        });
      }}>
        <FontAwesomeIcon icon={faPeopleCarry} />
        <div className="magic-text">Support LZR DAO</div>
      </div>
    );
  }
}
