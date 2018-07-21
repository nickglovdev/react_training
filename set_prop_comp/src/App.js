// import React from 'react';

// class App extends React.Component {
//   render() {
//     return (
//       <h1>{this.props.txt}</h1> //inside JSX
//     )
//   }
// }

// export default App

import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  render(){
    let txt = this.props.txt
    return( <h1>{txt}</h1> )
  }
}
//Define property. it an object and each key is the name
// each value is the type of value we are looking for.

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
  // // Makes sure it is required, and
  // will throw an error if not exist
}

// Setting a series of default properties.
//If not listed on index.js it will use this as the defaults
App.defaultProps = {
  txt: "This is the default text"
}

export default App
