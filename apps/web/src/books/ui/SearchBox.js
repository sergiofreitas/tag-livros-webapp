import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import {
  Paper,
  Grid,
  withStyles,
  InputBase,
  IconButton,
  Container,
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'

const SearchBox = ({ classes, onSearch }) => {
  const inputRef = useRef(null)

  return (
    <Container maxWidth="md">
      <Paper elevation={2} className={classes.paper}>
        <Grid container alignItems="center">
          <Grid item xs>
            <InputBase
              fullWidth
              inputRef={inputRef}
              placeholder="Busque por isbn"
              classes={{ input: classes.input }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Grid>
          <Grid item>
            <IconButton onClick={() => onSearch(inputRef.current.value)}>
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

SearchBox.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  onSearch: PropTypes.func.isRequired,
}

const styles = theme => ({
  paper: {
    marginBottom: theme.spacing(2),
  },
  input: {
    padding: theme.spacing(2),
  },
})

export default withStyles(styles)(SearchBox)
