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
          © {" "}
          <a href="https://github.com/vicnala" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>
            Víctor Navarro
          </a>
            {" "}{(new Date()).getFullYear()}
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
