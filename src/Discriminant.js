import React, { Component } from 'react';
import './Discriminant.css';
import UserEntersQuadParams from './Containers/userEntersParameters';
import DisplayOut from './Containers/displayOut';

class Discriminant extends Component {

  render() {
    return (
      <div>
          <UserEntersQuadParams/>
          <DisplayOut/>
      </div>
    );
  }
}

export default Discriminant;
