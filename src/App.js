import React, { Component } from "react";
import { DrizzleProvider } from "drizzle-react";
import { LoadingContainer } from "drizzle-react-components";
import LandingPage from './pages/Landing/Landing';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Footer from './pages/Footer/Footer';

import drizzleOptions from "./drizzleOptions";
import MyContainer from "./MyContainer";

class App extends Component {
  render() {
    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>

<DrizzleProvider options={drizzleOptions}>
  <LoadingContainer>
    <MyContainer />
  </LoadingContainer>
</DrizzleProvider>

          <LandingPage />
          <Footer />
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;
