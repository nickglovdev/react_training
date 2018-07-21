import React from 'react';

/* XXX
Unlike props, which are a collection of values that are meant to be
passed into our component as static value, it's not meant to be
changed by our component. State represents a collection of values
that is meant to be managed, as well as updated by our component.
*/
class App extends React.Component {
  constructor(){
    /* XXX I'm going to call super(). This is going to give the
     keyword this the context within our component, rather than
     its parent class React.Component.*/
    super();
    this.state = {
        txt: 'this is the state txt',
    }
  }
  // This is suppose to be managed by our component.
  //update is a custom method. meaning we made it.
  update (e) {
    this.setState({txt: e.target.value})
  }
  render() {
    // enduring state in our JSX
    return (
      <div>
        <input type="text"
          onChange={this.update.bind(this)}/>
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

export default App
