import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const SearchBox = ({ onSearch }) => {
  const inputRef = useRef(null)

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

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchBox
