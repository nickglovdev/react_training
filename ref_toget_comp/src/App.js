/*
Refs are a way for us to reference a node, or an instance of a
component in our application. To get us started here,
I'm creating a component that outputs a single input field.
It's going to have an onChange event equal to this.update.bind
to this. Right after, we're going to put out a bit of state,
it's going to be this.state.a.
*/

// https://jsbin.com/jilucuw/1/edit

import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {a: '', b: ''}
  }
  update(){
    this.setState({
      //return the node we are referencing from the inputs down below
      a: this.a.refs.input.value,
      b: this.refs.b.value
      // a: ReactDOM.findDOMNode(this.a).value  cais no longer a node, but a component. Look below

    })
  }
  render(){
    return (
      <div>
        <Input
          ref={ component => this.a = component}
          update={this.update.bind(this)}
        /> {this.state.a}
        <hr />
        <input
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
          /> {this.state.b}
      </div>
    )
  }
}

class Input extends React.Component {
  render(){
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}

export default App
