/*
In order to access nested values or components in a component,
we can use props.children. To illustrate this,
I'm going to have my App component return a new component called
<Button>, and inside of the opening and closing tags for that
component, I'm going to type the word React.
*/
import React from 'react';
class App extends React.Component {
  render(){
    return <Button>I <Heart /> React</Button>
  }
}

const Button = (props) => <button>{props.children}</button>
//Accessing nested components
class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

export default App
