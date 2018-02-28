import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Item from './Item'

class Basket extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      order: {},
      items: []
    }
  }

  getOrder() {
    axios.get('http://localhost:3000/api/v1/order/current.json').then(response => {
      this.setState({
        order: response.data,
        items: response.data.items
      })
    }).catch(error => {
      console.log(error)
    })
  }

  componentWillMount() {
    this.getOrder()
  }

  render () {
    var items = this.state.items.map((item, index) => {
      return (
        <Item
          key={ index }
          id={ item.id }
          name={ item.product.name }
          code={ item.productOption.code }
          price={ item.productOption.price }
        />
      )
    })
    var total = () => {
      var order = this.state.order
      return (
        <div className='total'>
          <span>Total</span>
          <span className='totalValue'>{ order.incompleteTotal ? order.incompleteTotal : null }</span>
        </div>
      )
    }
    return (
      <div className='basket'>
        <h2>Basket</h2>
        <div className='basketItems'>
          <ul>
            { items }
          </ul>
        </div>
        { total() }
      </div>
    )
  }
}

Basket.propTypes = {
  id: PropTypes.number,
  hashId: PropTypes.string,
  items: PropTypes.array,
  incompleteTotal: PropTypes.string,
  total: PropTypes.string
}

export default Basket
