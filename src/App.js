import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WhatsappScreen from './container/whatsappScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WhatsappScreen/>
        </header>
      </div>
    );
  }
}

export default App;
