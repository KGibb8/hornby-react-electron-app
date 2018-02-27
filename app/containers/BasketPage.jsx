import React from "react"
import axios from 'axios'
import Basket from './Basket'

export default class BasketPage extends React.Component {
  constructor(props) {
    super(props)
  }

  getOrder() {
    axios.get('http://localhost:3000/api/v1/order/current.json').then(response => {
      this.setState({
        order: response.data
      })
    }).catch(error => {
      console.log(error)
    })
  }

  componentWillMount() {
    this.getOrder()
  }

  render () {
    var items = this.state.order.items.map((item, index) => {
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
    return (
      <Basket>
        { items }
      </Basket>
    )
  }
}
