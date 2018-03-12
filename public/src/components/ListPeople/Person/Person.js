import React, { Component } from 'react'

export default class Person extends Component {
   constructor() {
      super()

      this.state = {
         name: ''
      }
   }

   updateStateName ( val ) {
      this.setState({ name: val })
   }

   render () {
      const { updateName, deletePerson, data } = this.props;

      return (
         <div>
            <br />
            <span>{ data.name }</span>
            <br />
            <span>{ data.gender }</span>
            <br />
            <button onClick={ () => deletePerson( data.id ) }>Delete</button>

            <div>
               <input   placeholder="New Name" 
                        onChange={ e => this.updateStateName( e.target.value ) } />
               <button onClick={ () => updateName( data.id, this.state.name ) }>Update Name</button>
            </div>
         </div>
      )
   }
}