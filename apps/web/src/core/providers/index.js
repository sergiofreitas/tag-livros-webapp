import React from 'react'
import PropTypes from 'prop-types'
import FetcherProvider from 'core/providers/Fetcher'
import StateProvider from 'core/providers/State'
import ThemeProvider from 'core/providers/Theme'
import RouterProvider from 'core/providers/Router'

const Providers = ({ children }) => {
  return (
    <FetcherProvider>
      <StateProvider>
        <ThemeProvider>
          <RouterProvider>{children}</RouterProvider>
        </ThemeProvider>
      </StateProvider>
    </FetcherProvider>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Providers
