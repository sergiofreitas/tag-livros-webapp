import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ book, to }) => {
  return (
    <a href={to}>
      <h4>{book.name}</h4>
      <h5>{book.author}</h5>
      <img src={book.cover.url} alt={book.name} />
    </a>
  )
}

Card.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    cover: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  to: PropTypes.string.isRequired,
}

export default Card
