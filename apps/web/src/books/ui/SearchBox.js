import React, { useState } from 'react'
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

const SearchBox = ({ classes, term, onSearch }) => {
  const [value, setValue] = useState(term)

  return (
    <Container maxWidth="md">
      <Paper elevation={2} className={classes.paper}>
        <Grid container alignItems="center">
          <Grid item xs>
            <InputBase
              fullWidth
              value={value}
              onChange={evt => setValue(evt.target.value)}
              onKeyUp={evt => {
                if (evt.key === 'Enter') {
                  onSearch(evt.target.value)
                }
              }}
              placeholder="Busque por isbn"
              classes={{ input: classes.input }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Grid>
          <Grid item>
            <IconButton onClick={() => onSearch(value)}>
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

SearchBox.defaultProps = {
  term: '',
}

SearchBox.propTypes = {
  term: PropTypes.string,
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
