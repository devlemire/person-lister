import React, { Component } from 'react'
import Person from './Person/Person'

export default class ListPeople extends Component {
   render () {
      const people = this.props.data.map(item => (
         <Person  key={ item.id } 
                  data={ item } 
                  deletePerson={ this.props.deletePerson } />
      ))

      return (
         <div>
            {people}
         </div>
      )
   }
}