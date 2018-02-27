import React from 'react'
import PropTypes from 'prop-types'

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='basketItem'>
        <p>{ this.props.name }</p>
        <div className='basketItemDetails'>
          <span>{ this.props.brand }</span>
          <span>{ this.props.organic }</span>
          <span>{ this.props.label }</span>
        </div>
      </div>
    )
  }
}

export default BasketItem
