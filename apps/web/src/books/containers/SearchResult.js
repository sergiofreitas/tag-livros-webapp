import React from 'react'
import PropTypes from 'prop-types'
import { useTheme, Typography } from '@material-ui/core'
import useSWR from 'swr'
import List from '../ui/List'

const SearchResult = ({ term }) => {
  const theme = useTheme()
  const skeletonBooks = [...Array(12)].map((item, i) => ({ objectId: i }))
  const { data: books, isValidating, error } = useSWR(`/search?term=${term}`)

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
        Nenhum resultado encontrado. Tente fazer uma busca menos detalhada.
      </Typography>
    )
  }

  return (
    <List
      books={isValidating ? skeletonBooks : books}
      title={`Resultado da busca por "${term}"`}
      loading={isValidating}
    />
  )
}

SearchResult.propTypes = {
  term: PropTypes.string.isRequired,
}

export default SearchResult
