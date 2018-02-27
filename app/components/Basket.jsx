import React from 'react'
import PropTypes from 'prop-types'
import BasketItem from './BasketItem'

class Basket extends React.Component {
  constructor(props) {
    super(props)
  }

  items () {
    return this.props.basket.items.map((item, index) => {
      return (
        <li key={ index }>
          <BasketItem
            id={ item.id }
            hashId={ item.hashId }
            name={ item.name }
            organic={ item.organic }
            brand={ item.brand }
            price={ item.price }
            label={ item.label }
          />
        </li>
      )
    })
  }

  render () {
    return (
      <div className='basket'>
        <h2>Basket</h2>
        <div className='basketItems'>
          <ul>
            { this.items() }
          </ul>
        </div>
        <div className='basketTotal'>
          <span>Total</span>
          <span className='total'>{ this.props.basket.incompleteTotal }</span>
        </div>
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
