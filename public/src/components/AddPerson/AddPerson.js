import React, { Component } from 'react'
import './AddPerson.css'

export default class AddPerson extends Component {
   constructor () {
      super()
      this.state = {
         name: '',
         height: '',
         age: '',
         ss_num: '',
         gender: 'female',
         hasTattoos: "true"
      }
   }

   updateState ( prop, val ) {
      this.setState({ [prop]: val })
   }

   render () {
      return (
         <div>
            <input placeholder="Name" onChange={ e => this.updateState('name', e.target.value) } />
            <input placeholder="Height" onChange={ e => this.updateState('height', e.target.value) } />
            <input placeholder="Age" onChange={ e => this.updateState('age', e.target.value) } />
            <input placeholder="Social Number" onChange={ e => this.updateState('ss_num', e.target.value) } />
            <div>
               <span>Gender</span>
               <select onChange={ e => this.updateState('gender', e.target.value) }>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
               </select>
            </div>
            <div>
               <span>Has Tattoos</span>
               <select onChange={ e => this.updateState('hasTattoos', e.target.value) }>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
               </select>
            </div>
         </div>
      )
   }
}
