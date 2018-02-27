import React from "react"
import PropTypes from "prop-types"

class ProductOption extends React.Component {
  render () {
    return (
      <div className='productOption'>
        <span>{ this.props.code } | </span>
        <span>{ this.props.price } | </span>
        <span>{ this.props.rrp } | </span>
        <span>{ this.props.concatSize }</span>
      </div>
    )
  }
}

ProductOption.propTypes = {
  id: PropTypes.number,
  hashId: PropTypes.string,
  code: PropTypes.number,
  price: PropTypes.string,
  rrp: PropTypes.string,
  concatSize: PropTypes.string
}

export default ProductOption
