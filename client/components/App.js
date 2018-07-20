
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import React, { Component }  from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    console.log('constructor working')
  }

  render(){
    console.log('render working')
    const thingToDispay = 'this fucking thing'
    return (
      <div> {thingToDispay} </div>
    )
  }
}
export default App
