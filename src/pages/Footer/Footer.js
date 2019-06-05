import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Footer = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
        <div
          style={{ color: textPrimary }}>
          © Víctor Navarro Lázaro {" "}{(new Date()).getFullYear()} {" | "}
          <a href="https://rinkeby.aragon.org/#/lzr" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>
            LZR DAO
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;
