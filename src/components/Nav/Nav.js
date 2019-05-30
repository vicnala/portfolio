import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.buyMeABeer = this.buyMeABeer.bind(this);
    this.state = {
      isSticky: false
    };
  }

  buyMeABeer(pageSelector) {
    // const { web3 } = this.props;
    // web3.eth.getAccounts((error, accounts) => {
    //   if (!error && accounts.length) {
    //     web3.eth.sendTransaction({
    //       from:   accounts[0],
    //       to:     "0x979449F43DC3d4B7F1bC81f6BaF09ECB530983c1",
    //       value:  "10000000000000000",
    //       data:   ""
    //     }, (err, transactionHash) => {
    //       if (!err) console.log(transactionHash + " success");
    //     });
    //   }
    // });
  }

  render() {
    const {
      theme: { colorPrimary, bgPrimary, navAlpha }
    } = this.context;

    const userHasAccount = this.state.account ? 'Buy me a beer!' : 'Not connected'
    const stickyClass = this.state.isSticky ? 'sticky' : '';
    const stickyStyles = this.state.isSticky
      ? { backgroundColor: navAlpha, color: colorPrimary }
      : { backgroundColor: bgPrimary, color: colorPrimary };
    return (
      <nav
        className={stickyClass}
        ref={(elem) => {
          this.nav = elem;
        }}
        style={stickyStyles}
      >
        <div className="magic-wand bounce-xy" onClick={(e) => this.buyMeABeer()}>
          <FontAwesomeIcon icon={faBeer} />
          <div className="magic-text">{userHasAccount}</div>
        </div>
        <style jsx="true">
          {`
            .menu__item:hover {
              border-bottom: 2px solid ${colorPrimary};
            }
          `}
        </style>
        <div className="menu">

        </div>
      </nav>
    );
  }
}

Nav.contextTypes = {
  theme: PropTypes.any
};

export default Nav;
