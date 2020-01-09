import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';
 
class App extends Component {
 
  handleOnClick = event => {
    this.props.addItem()
  }
 
  render() {
    debugger
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};
 
export default connect(state => ({ items: state.items }), { addItem })(App);
//we are just hard coding in the functions mapStateToProps, mapDispatchToProps to the 
//export default instead of -> making them there own functions then passing there own functions into the connect 
