import React, { Component } from 'react';
import './App.css';
import Header from './component/header/header';

import Outer from './container/Outer';

class App extends Component {
  render() {
    return (
      <div className="App Wrapper">
        <Header />
        <div className="container">
          <Outer />
        </div>
      </div>
    );
  }
}

export default App;
