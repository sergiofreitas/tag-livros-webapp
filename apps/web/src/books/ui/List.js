import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Typography, withStyles } from '@material-ui/core'

import BookCard from './Card'
import Skeleton from './CardSkeleton'

const BookList = ({ classes, title, books, loading }) => (
  <Container maxWidth="md" className={classes.container}>
    <Typography variant="h6" className={classes.title}>
      {title}
    </Typography>

    <Grid container spacing={2}>
      {books.map(book => (
        <Grid key={book.objectId} item xs={12} sm={4} md={3}>
          {loading ? (
            <Skeleton />
          ) : (
            <BookCard book={book} to={`/detail/${book.isbn}`} />
          )}
        </Grid>
      ))}
    </Grid>
  </Container>
)

BookList.defaultProps = {
  title: '',
  books: [],
  loading: false,
}

BookList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      author: PropTypes.string,
      cover: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  ),
  loading: PropTypes.bool,
}

const styles = theme => ({
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
})

export default withStyles(styles)(BookList)
