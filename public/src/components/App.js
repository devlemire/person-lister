import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

// Components
import AddPerson from './AddPerson/AddPerson'

class App extends Component {
   constructor () {
      super()
      this.state = {
         data: []
      }

      this.createPerson = this.createPerson.bind(this)
   }

   componentDidMount () {
      axios.get('http://localhost:3001/api/people').then(r => {
         this.setState({ data: r.data })
      })
   }

   createPerson (data) {
      axios.post('http://localhost:3001/api/person', data).then(r => {
         this.setState({ data: r.data })
      })
   }

   render() {
      return (
         <div className="App">
            <AddPerson createPerson={ this.createPerson } />
         </div>
      );
   }
}

export default App;