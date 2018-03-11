import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

// Components
import AddPerson from './AddPerson/AddPerson'
import ListPeople from './ListPeople/ListPeople'

class App extends Component {
   constructor () {
      super()
      this.state = {
         data: []
      }

      this.createPerson = this.createPerson.bind(this)
      this.deletePerson = this.deletePerson.bind(this)
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

   deletePerson (id) {
      axios.delete(`http://localhost:3001/api/person/${ id }`).then(r => {
         this.setState({ data: r.data })
      })
   }

   render() {
      return (
         <div className="App">
            <AddPerson createPerson={ this.createPerson } />
            <ListPeople data={ this.state.data } deletePerson={ this.deletePerson } />
         </div>
      );
   }
}

export default App;