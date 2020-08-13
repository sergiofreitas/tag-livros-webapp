import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const SearchBox = ({ term, onSearch }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    if (term && inputRef.current) {
      inputRef.current.value = term
    }
  }, [term])

  return (
    <>
      <input
        ref={inputRef}
        type="search"
        id="search-box"
        title="search"
        placeholder="Busque por isbn"
      />
      <button type="button" onClick={() => onSearch(inputRef.current.value)}>
        search
      </button>
    </>
  )
}

SearchBox.defaultProps = {
  term: undefined,
}

SearchBox.propTypes = {
  term: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
}

export default SearchBox
