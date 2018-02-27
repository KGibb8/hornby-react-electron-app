'use babel'
import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to='/basket'>Basket</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
