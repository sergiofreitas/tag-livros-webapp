import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from 'config/theme'

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
