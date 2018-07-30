import React from 'react';

/*
In this lesson, we're going to talk about iterating over a data set
in order to create our JSX. Right here in our render method, right
before our return statement,
I'm going to say let XXX items = this.state.items XXX.
That's going to set that data up.

We're going to set up our constructor, where we'll call super()
to get our context. We're going to say  XXX this.state = {items: []}, XXX
and we'll set that to an array. Now to get that data, we're going to
use fetch to make an XXX AJAX call XXX to the Star Wars API. We'll just hit up
the people endpoint there
*/
class App extends React.Component {
  constructor() {
    super()
    this.state = {items: []}
  }
  componentWillMount(){
   fetch( 'https://swapi.co/api/people/?format=json' )
     .then( response => response.json() )
     .then( ({results: items}) => this.setState({items}))
 }
 filter(e) {
   this.setState({filter: e.target.value})
 }
 //Below in our iterator we need a key
  render(){
    let items = this.state.items;
    if(this.state.filter) {
      items = items.filter(item =>
        item.name.toLocaleLowerCase()
        .includes(this.state.filter.toLowerCase())
      )
    }
    return (
      <div>
          <input type='text' onChange={this.filter.bind(this)}/>
          {items.map(item =>
          <Person key={item.name} person={item} /> )}
      </div>
    )
  }
}
//{items.map(item => <h4 key={item.name}>{item.name}</h4>)}
//removed but on the same line as below
const Person = (props) => <h4>{props.person.name} </h4>

export default App
