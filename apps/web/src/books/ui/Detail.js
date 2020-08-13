import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import {
  Container,
  Grid,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'

const Detail = ({ classes, book }) => {
  const localRating = book && book.totalRatings / book.numRatings
  const goodReadsRating = get(book, 'goodReads.average_rating')

  return (
    <Container maxWidth="md">
      <Paper elevation={2} className={classes.paper}>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12} sm={4}>
            <img
              src={get(book, 'cover.url')}
              alt={book.name}
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4">{book.name}</Typography>
            <Typography variant="h6" className={classes.author}>
              {book.author}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Páginas: {book.pages}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              isbn: {book.isbn}
            </Typography>

            <Typography variant="body2" className={classes.edition}>
              Edição de {book.edition}
            </Typography>
            <Typography variant="caption">
              Curadoria feita por {book.curator}
            </Typography>

            <Grid container alignItems="center" justify="space-between">
              <Grid item xs={12} sm={6}>
                <div className={classes.rating}>
                  <Typography
                    variant="subtitle2"
                    className={classes.ratingTitle}
                  >
                    Avaliações Tag Livros
                  </Typography>

                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Rating
                        defaultValue={localRating}
                        precision={0.1}
                        readOnly
                        size="large"
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" color="textSecondary">
                        ({localRating.toFixed(2)})
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                {goodReadsRating ? (
                  <div className={classes.rating}>
                    <Typography
                      variant="subtitle2"
                      className={classes.ratingTitle}
                    >
                      Avaliações Good Reads
                    </Typography>

                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Rating
                          defaultValue={parseFloat(goodReadsRating)}
                          precision={0.1}
                          readOnly
                          size="large"
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="caption" color="textSecondary">
                          ({goodReadsRating})
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                ) : (
                  <div className={classes.rating}>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      align="center"
                      style={{ margin: 'auto', maxWidth: 170 }}
                    >
                      Avaliação não disponível na api GoodReads
                    </Typography>
                  </div>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

Detail.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
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
  }).isRequired,
}

const styles = theme => ({
  paper: {
    padding: theme.spacing(4, 3),
  },
  image: {
    width: '100%',
  },
  author: {
    marginBottom: theme.spacing(3),
  },
  edition: {
    marginTop: theme.spacing(3),
  },
  rating: {
    marginTop: theme.spacing(4),
  },
  ratingTitle: {
    paddingBottom: theme.spacing(1),
  },
})

export default withStyles(styles)(Detail)
