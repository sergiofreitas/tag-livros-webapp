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
  Grid,
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'

const Card = ({ classes, book, to }) => (
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
      <Typography component="div" variant="caption" className={classes.author}>
        {book.author}
      </Typography>
      <Grid container alignItems="center" className={classes.rating}>
        <Rating defaultValue={2.5} precision={0.5} readOnly size="small" />
        <Typography variant="overline">2.5</Typography>
      </Grid>
    </CardContent>
  </MuiCard>
)

Card.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  book: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
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
    marginTop: theme.spacing(1),
  },
  name: {
    minHeight: 42,
    display: 'flex',
    alignItems: 'center',
  },
  author: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
})

export default withStyles(styles)(Card)
