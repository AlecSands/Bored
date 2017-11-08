import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class Input extends React.Component {
  render() {
    return (
      <h1>Input Test</h1>
    )
  }
}

class Output extends React.Component {
  render() {
    return (
      <h1>Output Test</h1>
    )
  }
}

class BoredApp extends React.Component {
  render() {
    return (
      <div>
        <Input />
        <Output />
      </div>
    )
  }
}

ReactDOM.render(
  <BoredApp />,
  document.getElementById('root')
);
