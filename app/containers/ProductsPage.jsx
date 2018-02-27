import React from "react"
import axios from 'axios'
import Product from '../components/Product'
import ProductOption from '../components/ProductOption'
import ProductForm from '../components/ProductForm'
import Search from '../components/Search'

export default class ProductsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      query: null
    }
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
          />
        </div>
      )
    })
    return (
      <div className='products'>
        <div className='row'>
          { products }
        </div>
      </div>
    )
  }
}
