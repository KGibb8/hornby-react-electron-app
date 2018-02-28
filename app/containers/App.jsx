'use babel'
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
    this.toggleBasket = this.toggleBasket.bind(this)
  }

  toggleBasket(event) {
    event.preventDefault()
    this.setState({
      basketVisible: !this.state.basketVisible
    })
  }

  render() {
    return (
      <div id="root">
        <Navbar toggleBasket={ this.toggleBasket }/>
        { this.state.basketVisible ? <Basket /> : null }
        <Routes />
      </div>
    )
  }
}
