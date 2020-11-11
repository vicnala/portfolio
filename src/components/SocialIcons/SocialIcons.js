import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;

  return (
    <div className="social-icons animate-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/vicnala"
          style={ { color: colorPrimary } }>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/vicnala"
          style={ { color: colorPrimary } }>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/vnavarroalcuadrado"
          style={ { color: colorPrimary } }>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
