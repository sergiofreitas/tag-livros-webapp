import React from 'react'
import PropTypes from 'prop-types'
import { RecoilRoot } from 'recoil'

const State = ({ children }) => <RecoilRoot>{children}</RecoilRoot>

State.propTypes = {
  children: PropTypes.node.isRequired,
}

export default State
