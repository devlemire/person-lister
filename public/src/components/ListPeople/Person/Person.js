import React, { Component } from 'react'

export default class Person extends Component {
   render () {
      const { deletePerson, data } = this.props;

      return (
         <div>
            <br />
            <span>{ data.name }</span>
            <br />
            <span>{ data.gender }</span>
            <br />
            <button onClick={ () => deletePerson( data.id ) }>Delete</button>
         </div>
      )
   }
}