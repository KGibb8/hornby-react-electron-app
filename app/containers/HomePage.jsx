'use babel'
import React, { Component } from 'react'
import Routes from '../routes'

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <h1>Home</h1>
    )
  }
}
