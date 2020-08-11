import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Typography, withStyles } from '@material-ui/core'

import WarningIcon from '@material-ui/icons/Warning'

class AppError extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
    }
  }

  static getDerivedStateFromError(errorObj) {
    return { error: errorObj }
  }

  render() {
    const { error } = this.state
    const { classes, children } = this.props
    if (error) {
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
              <WarningIcon color="error" className={classes.icon} />
              <Typography align="center" variant="h2">
                Erro 500
              </Typography>
              <Typography
                align="center"
                variant="h5"
                className={classes.instruction}
                color="textSecondary"
              >
                Nós tivemos um problema interno no servidor. Fique tranquilo que
                você não tem culpa.
              </Typography>
              <Typography align="center" color="textSecondary">
                Por favor, atualize a página. Caso o problema continue
                ocorrendo, entre em contato com o nosso suporte pelo email{' '}
                <a href="mailto:suporte@taglivros.com.br">
                  suporte@taglivros.com.br
                </a>
              </Typography>
            </Grid>
          </Container>
        </div>
      )
    }

    return children
  }
}

AppError.propTypes = {
  children: PropTypes.node.isRequired,
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

export default withStyles(styles)(AppError)
