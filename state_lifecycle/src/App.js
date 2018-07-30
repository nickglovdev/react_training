import React from 'react';
import ReactDOM from 'react-dom';

/*
In componentWillMount, we have access to our state and our props
but we do not have access to the DOM representation of our
component yet because it has not been placed into the DOM.
To illustrate that, we're going to go ahead and update our state.
*/

// problematic in JsBin
class App extends React.Component {
  constructor(){
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1 })
  }
  /* Have access to our XXX state and props,
  but not our DOM representation XXX because it has not been placed
  into the dom */
  componentWillMount(){
    console.log('componentWillMount')
    this.setState({m: 2}) // Setting State before it rendered
  }
  render(){
    console.log('render')
    return (
      <button onClick={this.update}>
        {this.state.val * this.state.m} //Setting state with a multi
      </button>
    )
  }
  componentDidMount(){
    console.log('componentDidMount')
    this.inc = setInterval(this.update,500)
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.inc)
  }
}

class Wrapper extends React.Component {
  constructor(){
    super();
  }
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
        <div>
          <button onClick={this.mount.bind(this)}>Mount</button>
          <button onClick={this.unmount.bind(this)}>Unmount</button>
          <div id="a"></div>
        </div>
    )
  }
}


export default Wrapper
