import React from 'react';
import Routes from './Routes';
import { ChainId, DAppProvider } from "@usedapp/core"

import './style.css';

const App = (props) => {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Mumbai],
      notifications: {
        expirationPeriod: 1000,
        checkInterval: 1000
      }
    }}>
    <Routes />
    </DAppProvider>
  )
}

export default App;