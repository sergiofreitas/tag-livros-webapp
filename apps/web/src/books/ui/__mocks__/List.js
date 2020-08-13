import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

const List = ({ title, books, loading }) => (
  <>
    <h2>{title}</h2>
    {books.map(book => (
      <Card
        key={book.objectId}
        book={book}
        to={`/detail/${book.objectId}`}
        loading={loading}
      />
    ))}
  </>
)

List.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      objectId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      author: PropTypes.string,
      cover: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
}

export default List
