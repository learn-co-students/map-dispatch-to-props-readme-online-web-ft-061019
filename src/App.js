import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  /*//by calling store.dispatch Our component is no longer indifferent
   about its state management system. Instead, this line of code makes the component reliant on Redux.
   this is store.dispatch is a backend function (redux) being used in our frontend (react)
   
   handleOnClick() {
    this.props.store.dispatch(addItem());
    
    USE THE BELOW 
  }
  */

 handleOnClick = event => {
  this.props.addItem() // Code change: this.props.dispatch.store is no longer being called
} //This code calls the handleOnClick() function after the button is clicked. The handleOnClick() 
  // references and then executes the addItem() function by calling this.props.addItem().

render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

/*
quick review on map:written to accept the Redux store's (object hive) state(object(s)) as an argument and returns an object 
created using all or some of that state. Key/value pairs in this returned object 
will become values we can access in the components (render method) we've wrapped with connect()
*/
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// Code change: this new function takes in dispatch as an argument
// It then returns an object that contains a function as a value!
// Notice above in handleOnClick() that this function, addItem(),
// is what is called, NOT the addItem action creator itself.
const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
to add new props to our App component, we can pass connect() a second argument, and add our action creator as props. 
Then we can reference this action creator as a prop to call it from our component. 
*/


