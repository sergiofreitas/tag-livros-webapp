import React from 'react'
import PropTypes from 'prop-types'
import { Container, Typography, withStyles } from '@material-ui/core'

const Header = ({ classes, title }) => (
  <div className={classes.root}>
    <Container maxWidth="md">
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
    </Container>
  </div>
)

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
  title: {
    color: theme.palette.background.paper,
    fontWeight: 'bold',
    paddingTop: theme.spacing(4),
  },
})

export default withStyles(styles)(Header)
