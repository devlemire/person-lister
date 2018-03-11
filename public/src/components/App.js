import React, { Component } from 'react';
import './App.css';

// Components
import AddPerson from './AddPerson/AddPerson'

class App extends Component {
   render() {
      return (
         <div className="App">
            <AddPerson />
         </div>
      );
   }
}

export default App;