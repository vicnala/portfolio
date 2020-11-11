import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Footer = (props, context) => {
  const { theme: { textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
        <div
          style={{ color: textPrimary }}>
          © Víctor Navarro {" "}{(new Date()).getFullYear()}
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
