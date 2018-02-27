import React from "react"
import PropTypes from "prop-types"
import Sidebar from './Sidebar'
import Products from './Products'
import Home from './Home'

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  handleLinkClick(event, componentToRender) {
    event.preventDefault()
    console.log(componentToRender)
    this.setState({

    })
  }

  showProducts() {

  }

  render () {
    var links = [
      { label: 'Home', component: Home, onClick: this.handleLinkClick},
      { label: 'Products', component: Products, onClick: this.handleLinkClick }
    ]
    return (
      <div id='root'>
        <Sidebar links={ links }/>
      </div>
    )
  }
}

export default Root
