import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { Link as RouterLink } from 'react-router-dom'
import {
  Typography,
  withStyles,
  Card as MuiCard,
  CardActionArea,
  CardMedia,
  CardContent,
  Link,
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'

const Card = ({ classes, book, to }) => {
  const localRating = book && book.totalRatings / book.numRatings
  const goodReadsRating = get(book, 'goodReads.average_rating')

  return (
    <MuiCard>
      <CardActionArea component={RouterLink} to={to}>
        <CardMedia
          className={classes.media}
          title={book.name}
          image={get(book, 'cover.url')}
        />
      </CardActionArea>
      <CardContent>
        <Link
          component={RouterLink}
          to={to}
          variant="subtitle2"
          color="textPrimary"
          className={classes.name}
        >
          {book.name}
        </Link>
        <Typography
          component="div"
          variant="body2"
          style={{ marginTop: 8 }}
          className={classes.author}
        >
          {book.author}
        </Typography>
        <Typography
          component="div"
          variant="caption"
          className={classes.author}
        >
          Edição de {book.edition}
        </Typography>

        <div className={classes.rating}>
          <Typography component="div" className={classes.caption}>
            Avaliações Tag Livros
          </Typography>

          <Rating
            defaultValue={localRating}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography component="div" className={classes.caption}>
            ({localRating.toFixed(2)})
          </Typography>
        </div>
        {goodReadsRating ? (
          <div className={classes.rating}>
            <Typography component="div" className={classes.caption}>
              Avaliações Good Reads
            </Typography>
            <Rating
              defaultValue={parseFloat(goodReadsRating)}
              precision={0.1}
              readOnly
              size="small"
            />
            <Typography component="div" className={classes.caption}>
              ({goodReadsRating})
            </Typography>
          </div>
        ) : (
          <div className={classes.rating}>
            <Typography
              component="div"
              color="textSecondary"
              className={classes.caption}
            >
              (livro não disponível na api GoodReads)
            </Typography>
          </div>
        )}
      </CardContent>
    </MuiCard>
  )
}

Card.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  book: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    edition: PropTypes.string,
    totalRatings: PropTypes.number,
    numRatings: PropTypes.number,
    cover: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  to: PropTypes.string.isRequired,
}

const styles = theme => ({
  media: {
    paddingBottom: 'calc(100% * 1.5)',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  rating: {
    marginTop: theme.spacing(2),
  },
  name: {
    minHeight: 42,
    display: 'flex',
    alignItems: 'center',
  },
  author: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  caption: {
    fontSize: '0.65rem',
    lineHeight: 1,
  },
})

export default withStyles(styles)(Card)
