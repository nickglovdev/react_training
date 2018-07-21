/* XXX 1.
import React from 'react';
/* class App extends React.Component {
  // Aways use render the return has JSX which is html like
  // class is reserved name so need to use
  //className to add a class name to a element
  render() {
  //gets compiled down to javascript
    //return <h1>hello world</h1>
  }
}

export default App */

// XXX 2. React.createElement
// import React from 'react';
//
// /* class App extends React.Component {
//   // Aways use render the return has JSX which is html like
//   // class is reserved name so need to use
//   //className to add a class name to a element
//   render() {
//     XXX gets compiled down to javascript
//     //return <h1>hello world</h1>
//     XXX reacte.createElement(1,2,3) is javascript.
//     //1. All custom react component or custom component in the first parameter
//     //2. parameter
//     //3. can be another element or string
//
//     // return React.createElement('h1', null, 'Hello Egghead' )
//   }
// }
//
//
// export default App */

// XXX 3. stateless function.
import React from 'react';

const App = () => <h1>Hello world</h1>

export default App
