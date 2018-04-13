import React from "react"
import axios from 'axios'
import Product from '../components/Product'
import Basket from '../components/Basket'

import Config from '../config.js'

export default class ProductsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      query: null,
      basketVisible: false
    }

    this.toggleBasket = this.toggleBasket.bind(this)
  }

  getProducts() {
    axios.get('http://localhost:3000/api/v1/products.json', {
      params: { query: this.state.query }
    }).then(response => {
      this.setState({
        products: response.data
      })
    }).catch(error => {
      console.log(error)
    })
  }

  componentWillMount() {
    this.getProducts()
  }

  toggleBasket(event) {
    event.preventDefault()
    this.setState({
      basketVisible: !this.state.basketVisible
    })
  }

  render () {
    var products = this.state.products.map((product, index) => {
      return (
        <div key={ index } className='col s4 m4 l4'>
          <Product
            id={ product.id }
            hashId={ product.hashId }
            name={ product.name }
            organic={ product.organic }
            brand={ product.brand }
            productOptions={ product.productOptions }
          />
        </div>
      )
    })
    if (this.state.basketVisible) {
      var content = <div className="row">
        <div className="col s9 m9 l9">
          <div className="row">
            { products }
          </div>
        </div>
        <div className="col s3 m3 l3">
          <Basket />
        </div>
      </div>
    } else {
      var content = <div className="row">
        <div className="col s12 m12 l12">
          <div className="row">
            { products }
          </div>
        </div>
      </div>
    }
    return (
      <div>
        <div className="row">
          <i className="material-icons" onClick={ this.toggleBasket }>shopping_basket</i>
        </div>
        { content }
      </div>
    )
  }
}
