import React, { Component } from "react";
import LandingPage from './pages/Landing/Landing';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Footer from './pages/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>
          <LandingPage />
          <Footer />
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;
