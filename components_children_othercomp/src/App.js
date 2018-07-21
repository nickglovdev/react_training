/*
Important feature of React is the fact a React component can output
or render other React components. We've got a very simple component
here. It has a state with a value of txt. It's got an update method
which is going to update that value of text from an event
*/

// https://jsbin.com/sokoje/2/edit

import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state text'
    }
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}
//Stateless Function. being passed in as a prop does not need the bind anymore
const Widget = (props) =>
  <input type="text" onChange={props.update}/>

export default App
