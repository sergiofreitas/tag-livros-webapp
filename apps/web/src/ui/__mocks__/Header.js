import React from 'react'
import PropTypes from 'prop-types'

const MockHeader = ({ title }) => <h2>{title}</h2>

MockHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default MockHeader
