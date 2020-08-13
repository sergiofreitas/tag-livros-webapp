import React from 'react'
import PropTypes from 'prop-types'

const Detail = ({ isbn }) => {
  return (
    <>
      <h2>Details of book - {isbn}</h2>
    </>
  )
}

Detail.defaultProps = {
  isbn: '',
}

Detail.propTypes = {
  isbn: PropTypes.string,
}

export default Detail
