import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'

const Router = ({ children }) => <BrowserRouter>{children}</BrowserRouter>

Router.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Router
