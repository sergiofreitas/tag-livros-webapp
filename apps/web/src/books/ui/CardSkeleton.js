import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Card, CardContent } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const CardSkeleton = ({ classes }) => (
  <Card role="progressbar">
    <Skeleton animation="wave" variant="rect" className={classes.media} />
    <CardContent>
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} width="80%" />
    </CardContent>
  </Card>
)

CardSkeleton.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

const styles = () => ({
  media: {
    height: 0,
    paddingBottom: 'calc(100% * 1.5)',
  },
})

export default withStyles(styles)(CardSkeleton)
