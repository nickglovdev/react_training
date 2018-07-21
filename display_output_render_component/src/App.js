import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <b>Bold</b>
      </div>
    )
    //Don't use two tags
    // return <h1>Hello World</h1> <b>Bold</b>
    //XXX Wrap them in a parent node to fix this
  }
}

export default App
