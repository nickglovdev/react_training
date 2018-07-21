/*
In this example, our <Title> component is expecting a prop of
text which is not being passed in at its usage. We have a PropType
setup for our component, which is expecting the text prop to be a
PropType of string.
*/

import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    return <Title text="12345" />
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

// Tryed to use require to get error throw. Use a function to throw an error
Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6) {
      return new Error (`${propName} was too short`)
    }
  }
}

export default App
