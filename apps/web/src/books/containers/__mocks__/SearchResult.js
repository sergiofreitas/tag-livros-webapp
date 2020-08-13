import React from 'react'
import PropTypes from 'prop-types'

const SearchResult = ({ term }) => {
  return (
    <>
      <h2>Resultados da busca por {term}</h2>
      <div>List of books</div>
    </>
  )
}

SearchResult.propTypes = {
  term: PropTypes.string.isRequired,
}

export default SearchResult
