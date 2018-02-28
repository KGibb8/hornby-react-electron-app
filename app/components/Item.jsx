import React from 'react'
import PropTypes from 'prop-types'

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className='item'>
        <p>{ this.props.name }</p>
        <div className='itemDetails'>
          <span>{ this.props.code }</span>
          <span>{ this.props.price }</span>
          <span>{ this.props.label }</span>
        </div>
      </li>
    )
  }
}

export default Item
