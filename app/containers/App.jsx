'use babel'
import React from 'react'
import Routes from '../routes'
import Navbar from  '../components/Navbar'

export default class App extends React.Component {
  render() {
    return (
      <div id="root">
        <Navbar />
        <Routes />
      </div>
    )
  }
}
