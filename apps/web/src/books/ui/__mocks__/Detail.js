import React from 'react'
import PropTypes from 'prop-types'

const Detail = ({ book }) => (
  <div>
    <h4>{book.name}</h4>
    <h5>{book.author}</h5>
    <img src={book.cover.url} alt={book.name} />
    <div title="rating tag">{book.totalRatings / book.numRatings}</div>
    <div title="rating goodReads">{book.goodReads.average_rating}</div>
  </div>
)

Detail.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    edition: PropTypes.string,
    totalRatings: PropTypes.number,
    numRatings: PropTypes.number,
    pages: PropTypes.number,
    isbn: PropTypes.string,
    curator: PropTypes.string,
    cover: PropTypes.shape({
      url: PropTypes.string,
    }),
    goodReads: PropTypes.shape({
      average_rating: PropTypes.string,
    }),
  }).isRequired,
}

export default Detail
