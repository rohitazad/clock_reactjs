import React, { Component } from 'react';
import './App.css';
import LifeCycle from './lifeCycle';

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <LifeCycle date="Current Date" time="Current Time" />
      </div>
    );
  }
}

export default App;
