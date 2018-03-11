import React, { Component } from 'react'

export default class Person extends Component {


   render () {
      return (
         <div>
            <br />
            <span>{ this.props.data.name }</span>
            <br />
            <span>{ this.props.data.gender }</span>
            <br />
         </div>
      )
   }
}