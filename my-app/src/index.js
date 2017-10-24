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
        {/* <SliderExampleSimple /> */}
      </div>
    )
  }
}

const style = {
  margin: 12,
};

class RaisedButtonExampleSimple extends React.Component {
  render() {
    return (
      <div>
        <RaisedButton
          label="Submit"
          primary={true}
          style={style}
          onClick={() => console.log("answers:", this)}
        />
      </div>
    )
  }
}


class Submit extends React.Component {
  render() {
    return (
      <RaisedButton
        label="Submit"
        primary={true}
        style={style}
        onClick={() => console.log("answers:", this)}
      />
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
    this.state = {
      answers: {
        answer1: 0,
        answer2: 0
      }
    }
  }

  renderQuestion() {
    return (
      <div>
        <Question
          value={this.questions[0]}
        />
        <Slider
          value={this.state.answers.answer1}
          onChange={(id, name, description) => this.updateInputValue(id, name, "answer1")}
        />
        <Question
          value={this.questions[1]}
        />
        <Slider
          value={this.state.answers.answer2}
          onChange={(id, name, description) => this.updateInputValue(id, name, "answer2")}
        />
      </div>
    )
  }

  updateInputValue(id, name, description) {
    // console.log('id:', id);
    // console.log('name:', name);
    // console.log(description);
    // console.log(this);
    if (description == "answer1") {
      // console.log('setting answer1');
      this.state.answers.answer1 = name;
    } else if (description == "answer2") {
      // console.log('setting answer2');
      this.state.answers.answer2 = name;
    }
  }

  render() {
    return (
      <Card class="materialCard">
        <div>
          {this.renderQuestion()}
        </div>
        <RaisedButton
          label="Submit"
          primary={true}
          style={style}
          onClick={() => console.log("answers:", this.state.answers)}
        />
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
