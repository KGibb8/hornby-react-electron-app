import React from "react"
import PropTypes from "prop-types"

class Dropdown extends React.Component {
  collectionOptions() {
    var placeholder = <option key={0} defaultValue={ null } disabled>{ this.props.label }</option>
    var collectionOptions = this.props.collection.map((item, index) => {
      return (
        <option key={index + 1} value={item.id}>
          { item.label }
        </option>
      )
    })
    collectionOptions.unshift(placeholder)
    return collectionOptions
  }
  render() {
    return (
      <div>
        <select className={ this.props.className } onChange={ this.props.onChange }>
          { this.collectionOptions() }
        </select>
      </div>
    )
  }
}

Dropdown.propTypes = {
  hashId: PropTypes.string
}

export default Dropdown
