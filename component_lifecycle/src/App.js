import React from 'react';
import ReactDOM from 'react-dom';

/* When our component is added to the DOM, this is called mounting,
and when our component is removed from the DOM, this is called
unmounting. There are a handful of lifecycle methods we can access at
various stages of this state */

//creacting a component
class App extends React.Component {
  constructor () {
    super() // for context
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }
  update() {
    this.setState({val: this.state.val + 1})
  }
  componentWillMount() { //Life cycle method (maybe first?)
    /* his is going to fire off right before it's actually mounted into
    the DOM,*/
    console.log('componentWillMount')
  }
  render() {
    console.log('render')
    return <button onClick={this.update}>{this.state.val}</button>
  }
  /* This is going to fire off once our component
  has actually been mounted to the DOM */
  componentDidMount() {
    console.log('componentDidMount');
  }
  // this is going to fire off when our component is about to leave the DOM.
  componentWillUnmount() {
    console.log ('componentWillUnmount')
  }
}
// Component to unmount
class Wrapper extends React.Component {
  //methods

  /*
    On mount, we're actually going to use ReactDOM, I'm going to import
    that, ReactDOM from react-dom. We're going to call it
    XXX ReactDOM.render XXX. We're going to render our App component to a
    new <div>
  */
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  /*
  Now for our unmount, we're going to call
  XXX ReactDOM.unmountComponentAtNode XXX, and then, we simply pass in the
  same node where our component was mounted. In our default export,
  we're going to go ahead and export Wrapper rather than App.
  Then Wrapper will render App.
  */
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
          <button onClick={this.mount.bind(this)}>Mount</button>
          <button onClick={this.unmount.bind(this)}>Unmount</button>
          <div id='a'></div>
      </div>
    )
  }
}

export default Wrapper
//export default App
