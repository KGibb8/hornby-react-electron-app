import React from "react"
import PropTypes from "prop-types"
import Dropdown from './Dropdown'
import Button from './Button'

class ProductForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productOptionId: this.props.productOptions[0].id
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSelectChange(event) {
    this.setState({
      productOptionId: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    $.post(event.target.parentElement.getAttribute('action'), {
      authenticity_token: this.props.authenticityToken,
      item: {
        product_option_id: this.state.productOptionId
      }
    }).done((item) => {
      this.handleSuccess(item)
    })
  }

  handleSuccess(item) {
    console.log(item)
  }

  render() {
    return (
      <form action='/infinity/items' method='POST' data-remote='true'>
        <Dropdown
          label='Select an option'
          name='item[product_option_id]'
          value={ this.state.productOptionId }
          className='input-field col s12'
          collection={ this.props.productOptions }
          onChange={ this.handleSelectChange }
        />
        <Button className='waves-effect waves-light btn' onClick={ this.handleSubmit } text={ 'Add to Cart' } />
      </form>
    )
  }
}

ProductForm.propTypes = {
  productOptions: PropTypes.array,
  authenticityToken: PropTypes.string,
  hashId: PropTypes.string
}

export default ProductForm
