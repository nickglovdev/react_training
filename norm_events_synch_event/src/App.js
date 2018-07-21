/*
In this lesson, we're going to take a look at React Synthetic Event
System, which normalizes all the events we might want to use across
various browsers.

I'm setting up a simple textarea here. I'm going to keep the cols
and the rows. We're not going to worry about the rest.
We'll self-close this guy. Right after that,
we're going to have an <h1>. Its content is going to be
this.state.currentEvent.
*/

import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {currentEvent: '---'}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({currentEvent: e.type})
  }
  render(){
    return (
      <div>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
          cols="30"
          rows="10" />
        <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}

export default App
