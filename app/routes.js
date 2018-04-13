'use babel'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductsPage from './containers/ProductsPage'
import HomePage from './containers/HomePage'
import BasketPage from './containers/BasketPage'

export default class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/products" component={ ProductsPage } />
      </Switch>
    )
  }
}
