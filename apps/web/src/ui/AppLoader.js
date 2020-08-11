import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'

const AppLoader = () => (
  <Grid
    container
    justify="center"
    alignItems="center"
    style={{ height: '100vh' }}
  >
    <Grid item>
      <CircularProgress size="4rem" />
    </Grid>
  </Grid>
)

export default AppLoader
