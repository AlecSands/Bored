import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginBottom: 16,
  },
};

class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.data}</h1>
    )
  }
}

class QuestionPrompt extends React.Component {
  render() {
    return (
      <h3>{this.props.data}</h3>
    )
  }
}

class Radio extends React.Component {
  render() {
    return (
      <RadioButtonGroup>
        <RadioButton
          value="light"
          label="Proud"
          style={styles.radioButton}
        />
        <RadioButton
          value="light"
          label="Amused"
          style={styles.radioButton}
        />
        <RadioButton
          value="light"
          label="Pleasure"
          style={styles.radioButton}
        />
        <RadioButton
          value="light"
          label="Nurturant Love"
          style={styles.radioButton}
        />
        <RadioButton
          value="light"
          label="Awe"
          style={styles.radioButton}
        />
        <RadioButton
          value="light"
          label="Gratitude"
          style={styles.radioButton}
        />
      </RadioButtonGroup>
    )
  }
}

class QuestionInput extends React.Component {
  render() {
    if (this.props.inputType == "Slider") {
      return (
        <Slider />
      )
    } else if (this.props.inputType == "Radio") {
      return (
        <Radio />
      )
    }
  }
}

class Question extends React.Component {
  render() {
    return (
      <div>
        <QuestionPrompt data={this.props.data}/>
        <QuestionInput inputType={this.props.inputType}/>
      </div>
    )
  }
}

class Questions extends React.Component {
  render() {
    return (
      <div>
        <Question
          data="Do you like crowds?"
          inputType="Slider"
        />
        <Question
          data="What would you like to feel?"
          inputType="Radio"
        />
        <Question
          data="Would you rather pet a fluffy rabbit or learn about a new theory?"
          inputType="Slider"
        />
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return (
      <div>
        <Title data="Bored?"/>
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
  <MuiThemeProvider>
    <BoredApp />
  </MuiThemeProvider>,
  document.getElementById('root')
);
