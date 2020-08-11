import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core'

import BrokenImageIcon from '@material-ui/icons/BrokenImage'

const NotFound = ({ classes }) => {
  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ height: '100vh' }}
        >
          <BrokenImageIcon color="disabled" className={classes.icon} />
          <Typography align="center" variant="h2">
            Página não encontrada
          </Typography>
          <Typography
            align="center"
            variant="h5"
            className={classes.instruction}
            color="textSecondary"
          >
            Essa página não existe mais. Ela pode ter sido movida para um outro
            endereço.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/">
            Voltar para Página inicial
          </Button>
        </Grid>
      </Container>
    </div>
  )
}

NotFound.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

const styles = theme => ({
  icon: {
    textAlign: 'center',
    fontSize: '6rem',
    marginBottom: theme.spacing(2),
  },
  instruction: {
    margin: theme.spacing(2, 0, 3),
  },
})

export default withStyles(styles)(NotFound)
