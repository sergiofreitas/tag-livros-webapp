import React from 'react'
import PropTypes from 'prop-types'
import { SWRConfig } from 'swr'

import fetcher from 'core/services/fetcher'

const Fetcher = ({ children }) => (
  <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
    {children}
  </SWRConfig>
)

Fetcher.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Fetcher
