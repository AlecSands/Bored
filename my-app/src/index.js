import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class Title extends React.Component {
  render() {
    return (
      <h1>Bored?</h1>
    )
  }
}

class Questions extends React.Component {
  render() {
    return (
      <div>
        <p>Test Question 1</p>
        <p>Test Question 2</p>
        <p>Test Question 3</p>
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Questions />
      </div>
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
