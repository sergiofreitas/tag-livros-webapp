import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import useSWR from 'swr'
import List from '../ui/List'

const BookList = ({ title }) => {
  const skeletonBooks = [...Array(12)].map((item, i) => ({ objectId: i }))
  const { data: books, isValidating, error } = useSWR('/books')

  if (error) {
    return (
      <Typography variant="h4" align="center">
        {error.message}
      </Typography>
    )
  }

  return (
    <List
      books={isValidating ? skeletonBooks : books}
      title={title}
      loading={isValidating}
    />
  )
}

BookList.defaultProps = {
  title: '',
}

BookList.propTypes = {
  title: PropTypes.string,
}

export default BookList
