import React from 'react'
import { Container, Typography, Grid, Paper, useTheme } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const DetailSkeleton = () => {
  const theme = useTheme()
  return (
    <Container maxWidth="md">
      <Paper elevation={2} style={{ padding: theme.spacing(4, 3) }}>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12} sm={4}>
            <Skeleton
              animation="wave"
              variant="rect"
              style={{ height: 0, paddingBottom: 'calc(100% * 1.5)' }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h3">
              <Skeleton animation="wave" width="60%" />
            </Typography>
            <Typography variant="h6">
              <Skeleton animation="wave" width="50%" />
            </Typography>
            <Typography variant="subtitle2">
              <Skeleton animation="wave" width="40%" />
            </Typography>
            <Typography variant="subtitle2">
              <Skeleton animation="wave" width="40%" />
            </Typography>

            <Typography variant="body2" style={{ marginTop: theme.spacing(2) }}>
              <Skeleton animation="wave" width="40%" />
            </Typography>
            <Typography variant="caption">
              <Skeleton animation="wave" width="40%" />
            </Typography>

            <Grid
              container
              alignItems="center"
              justify="space-between"
              style={{ marginTop: theme.spacing(7) }}
            >
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2">
                  <Skeleton animation="wave" width="80%" />
                </Typography>
                <Skeleton
                  animation="wave"
                  variant="rect"
                  height={30}
                  width="70%"
                  style={{ marginTop: theme.spacing(2) }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2">
                  <Skeleton animation="wave" width="80%" />
                </Typography>
                <Skeleton
                  animation="wave"
                  variant="rect"
                  height={30}
                  width="70%"
                  style={{ marginTop: theme.spacing(2) }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default DetailSkeleton
