import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SupportContainer from '../../components/Support/SupportContainer';

import './style.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSticky: false
    };
  }

  render() {
    const {
      theme: { colorPrimary, bgPrimary, navAlpha }
    } = this.context;

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

        <SupportContainer />

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
