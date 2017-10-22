import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Subtitle extends React.Component {
  render() {
    return (
      <h3>So bored it hurts!</h3>
    )
  }
}

class Title extends React.Component {
  render() {
    return (
      <h1>Bored?</h1>
    )
  }
}

class Header extends React.Component {
  render() {
    let titleText = "Are you bored?"

    return (
      <div className="header">
        <h1>{titleText}</h1>
        <Title />
        <Subtitle />
      </div>
    )
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);
