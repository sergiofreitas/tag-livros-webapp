import React from 'react'
import useSWR from 'swr'
import { useTheme, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import BookDetail from '../ui/Detail'
import DetailSkeleton from '../ui/DetailSkeleton'

const Detail = ({ isbn }) => {
  const theme = useTheme()
  const { data: book, isValidating, error } = useSWR(`/books/${isbn}`)

  if (error) {
    return (
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        style={{
          maxWidth: 600,
          margin: 'auto',
          marginTop: theme.spacing(10),
        }}
      >
        {error.message}
      </Typography>
    )
  }

  return isValidating ? <DetailSkeleton /> : <BookDetail book={book || {}} />
}

Detail.propTypes = {
  isbn: PropTypes.string.isRequired,
}

export default Detail
