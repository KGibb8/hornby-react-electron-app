import React from 'react'
import Routes from '../routes'
import Navbar from  '../components/Navbar'
import Basket from '../components/Basket'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      basketVisible: false
    }
  }

  render() {
    return (
      <div id="root">
        <Navbar />
        <Routes />
      </div>
    )
  }
}
