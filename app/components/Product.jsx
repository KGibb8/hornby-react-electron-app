import React from "react"
import PropTypes from "prop-types"
import ProductOption from './ProductOption'
import ProductForm from './ProductForm'

class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  // productOptions() {
  //   return this.props.productOptions.map((productOption, index) => {
  //     return (
  //       <ProductOption
  //         key={ index }
  //         id={ productOption.id }
  //         hashId={ productOption.hashId }
  //         code={ productOption.code }
  //         price={ productOption.price }
  //         rrp={ productOption.price }
  //         concatSize={ productOption.concatSize }
  //       />
  //     )
  //   })
  // }

  render() {
    return (
      <div className='productContainer'>
        <h2>{this.props.name}</h2>
        <div className='productInfo'>
          <div>{this.props.organic}</div>
          <div>{this.props.brand}</div>
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

        // <div className='productForm'>
        //   <ProductForm
        //     key={ this.props.id }
        //     authenticityToken={ this.props.authenticityToken }
        //     hashId={ this.props.hashId }
        //     productOptions={ this.props.productOptions }
        //   />
        // </div>
