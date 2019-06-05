import React from "react";
import { DrizzleContext } from "drizzle-react";
import Support from './Support';

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;

      const account = drizzleState
        && drizzleState.accounts
        && Object.keys(drizzleState.accounts).length;

      if (!initialized || !account) {
        return (
          <div className="magic-wand bounce-xy">
            <small>Connect to Ethereum to enable DApp</small>
          </div>
        );
      }

      return (
        <Support drizzle={drizzle} drizzleState={drizzleState} />
      );
    }}
  </DrizzleContext.Consumer>
)
