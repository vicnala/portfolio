import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import Nav from '../../components/Nav/Nav';
// import ScrollToNext from '@components/ScrollToNext';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <div className="intro-wrapper">
          <div className="intro-name">Víctor Navarro</div>
          <div className="tagline">
            Blockchain Dev | Full Stack Dev | Open-Source Enthusiast
          </div>
          <SocialIcons />
        </div>
      </main>

    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
