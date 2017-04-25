import React, { Component } from 'react';
import './App.css';
import UserEntersQuadParams from './Containers/userEntersParameters';
import DisplayOut from './Containers/displayOut';

class App extends Component {

  render() {
    return (
      <div>
          <UserEntersQuadParams/>
          <DisplayOut/>
      </div>
    );
  }
}

export default App;
