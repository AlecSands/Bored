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

class Question extends React.Component {
  render(props) {
    return (
      <p>Sample Question? {props.value}</p>
    )
  }
}

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions = Array(5).fill('Random Question')
    }
  }

  renderQuestion(i) {
    <Question
      value={}
    />
  }

  render() {
    return (
      <div>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    )
  }
}

class Assessment extends React.Component {
  render() {
    return (
      <div>
        <Quiz />
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <Header />
    <Assessment />
  </div>,
  document.getElementById('root')
);
