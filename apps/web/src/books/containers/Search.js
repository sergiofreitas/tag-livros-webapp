import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import SearchBox from '../ui/SearchBox'

const Search = ({ term }) => {
  const history = useHistory()
  const handleSearch = query => history.push(`/search?term=${query}`)

  return <SearchBox term={term} onSearch={handleSearch} />
}

Search.defaultProps = {
  term: '',
}

Search.propTypes = {
  term: PropTypes.string,
}

export default Search
