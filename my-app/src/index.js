import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';
import './index.css';

// Why are these called classes?  Are they classy?  Are other things classless?
// Classes are an updated version of objects which make inheretence easier.
class Subtitle extends React.Component {
  // What is inside these curly braces is calle the body of the class.
  // Why is this a body?  A class has a body?

  // These are called class members.  They are either methods or constructors.
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

const SliderExampleSimple = () => (
  <div>
    <Slider />
  </div>
);

// What is a question?  A possible state would be answered or not.
class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'awsomeness',
      complete: false,
    }
  }
  render() {
    return (
      <div>
          <div>
            <p>Sample Question? {this.state.value}</p>
            <SliderExampleSimple />
          </div>
      </div>
    )
  }
}

class Quiz extends React.Component {

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
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  {/* <MuiThemeProvider> */}
    <div>
      <Header />
      <Assessment />
    </div>
  </MuiThemeProvider>,
  document.getElementById('root')
);
