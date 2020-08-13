import React from 'react'
import PropTypes from 'prop-types'

const List = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>List of books</div>
    </>
  )
}

List.defaultProps = {
  title: '',
}

List.propTypes = {
  title: PropTypes.string,
}

export default List
