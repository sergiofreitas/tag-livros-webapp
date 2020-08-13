import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import {
  Container,
  Grid,
  Typography,
  IconButton,
  withStyles,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const Header = ({ classes, title }) => {
  const { pathname } = useLocation()

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid
          container
          alignItems="center"
          justify="flex-start"
          className={classes.container}
        >
          {pathname !== '/' && (
            <IconButton component={Link} to="/">
              <ArrowBackIcon className={classes.title} />
            </IconButton>
          )}
          <Typography
            variant="h5"
            className={classes.title}
            style={{ padding: '12px 0' }}
          >
            {title}
          </Typography>
        </Grid>
      </Container>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
}

const styles = theme => ({
  root: {
    height: 120,
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(-4),
    backgroundImage: 'url("/header-bg.svg")',
  },
  container: {
    paddingTop: theme.spacing(2),
  },
  title: {
    color: theme.palette.background.paper,
    fontWeight: 'bold',
  },
})

export default withStyles(styles)(Header)
