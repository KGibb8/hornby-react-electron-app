import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import ProductOption from './ProductOption'

class Product extends React.Component {
  constructor(props) {
    super(props)

    this.addToCart = this.addToCart.bind(this)
  }

  addToCart(event) {
    axios.post('http://localhost:3000/api/v1/items', {
      item: { product_option_id: this.props.id }
    }).then(response => {
      console.log(response)
    })
  }

  render() {
    const productOptions = this.props.productOptions.map((productOption, index) => {
      return (
        <ProductOption
          key={ index }
          id={ productOption.id }
          hashId={ productOption.hashId }
          code={ productOption.code }
          price={ productOption.price }
          rrp={ productOption.price }
          concatSize={ productOption.concatSize }
        />
      )
    })
    return (
      <div className='productContainer'>
        <h2>{this.props.name}</h2>
        <div className='productInfo'>
          <div>{this.props.organic}</div>
          <div>{this.props.brand}</div>
        </div>
        <div>
          <i className="material-icons" onClick={ this.addToCart }>add_shopping_cart</i>
        </div>
      </div>
    )
  }
}

Product.propTypes = {
  hashId: PropTypes.string,
  organic: PropTypes.string,
  brand: PropTypes.string,
  name: PropTypes.string,
  productOptions: PropTypes.array
}

export default Product

