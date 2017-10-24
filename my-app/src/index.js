import React from 'react';
import ReactDOM from 'react-dom';

// Material-UI Related Imports
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
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
      <h1>Are you bored?</h1>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="header">
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
  render() {
    return (
      <div>
        {this.props.value}
        <SliderExampleSimple />
      </div>
    )
  }
}

const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton
      label="Submit"
      primary={true}
      style={style}
      onClick={() => console.log("submit button clicked")}
    />
  </div>
);


class Submit extends React.Component {
  render() {
    return (
      <RaisedButtonExampleSimple />
    )
  }
}

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.questions = [
      'Personality Question',
      'Mood Question',
      'Interests Question',
      'Another Personality Question',
      'Another Mood Question'
    ]
  }

  renderQuestion(i) {
    return (
      <Question
        value={this.questions[i]}
      />
    )
  }

  render() {
    return (
      <Card class="materialCard">
        <div>
          {this.renderQuestion(0)}
          {this.renderQuestion(1)}
          {this.renderQuestion(2)}
          {this.renderQuestion(3)}
          {this.renderQuestion(4)}
        </div>
        <Submit />
      </Card>
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
  // <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <MuiThemeProvider>
    <div>
      <Header />
      <Assessment />
    </div>
  </MuiThemeProvider>,
  document.getElementById('root')
);
