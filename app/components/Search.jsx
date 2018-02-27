import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

class Search extends React.Component {
  render() {
    return (
      <form action={ this.props.action } method='get' data-remote='true'>
        <input onChange={ this.props.handleSearchQueryChange } type='text' name='query' value={ this.props.searchQuery } />
        <Button className='waves-effect waves-light btn' onClick={ this.handleSearch } text='Search' />
      </form>
    )
  }
}

export default Search
