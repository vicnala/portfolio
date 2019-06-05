import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getThemes } from './themes';

class ThemeSwitcher extends Component {

  constructor(props) {
    super(props);
    const allThemes = getThemes();
    this.state = {
      theme: allThemes[Math.floor((Math.random() * (allThemes.length)))]
    }
  }

  getChildContext() {
    return {
      theme: this.state.theme
    };
  }

  getRandomTheme = () => {
    const currentTheme = this.state.theme;
    const allThemes = getThemes();
    const themesWithoutCurrentTheme = allThemes.filter(
      theme => theme.name !== currentTheme.name
    );
    const randomThemeIndex = Math.floor(
      (Math.random() * (themesWithoutCurrentTheme.length))
    );
    return themesWithoutCurrentTheme[randomThemeIndex];
  }

  render() {
    const { children } = this.props;
    const theme = this.state.theme;

    return (
      <div className="theme-switcher">
        <style jsx="true">
        {`
          body {
            background-color: ${theme.bgPrimary};
            body, h1, h2, h3, h4, h5, h6, p, ol, ul {
              color: ${theme.textPrimary}
            }
          }
        `}
        </style>
        { children }
      </div>
    );
  }
}

ThemeSwitcher.propTypes = {
  children: PropTypes.node
}

ThemeSwitcher.childContextTypes = {
  theme: PropTypes.any
}

export default ThemeSwitcher;
