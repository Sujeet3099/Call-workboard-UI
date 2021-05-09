import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import Functionality from './Components/Functionality';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import theme from './Utils/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <Navbar />
        <div className="app__content">
          <Header />
          <Functionality />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
