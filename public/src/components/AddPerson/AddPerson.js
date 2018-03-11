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
         hasTattoos: false
      }
   }

   render () {
      return (
         <div>
            <input placeholder="Name" />
            <input placeholder="Height" />
            <input placeholder="Age" />
            <input placeholder="Social Number" />
            <div>
               <span>Gender</span>
               <select>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
               </select>
            </div>
            <div>
               <span>Has Tattoos</span>
               <select>
                  <option value={ true }>Yes</option>
                  <option value={ false }>No</option>
               </select>
            </div>
         </div>
      )
   }
}
