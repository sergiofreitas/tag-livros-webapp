import React from 'react'
import { screen, render } from '@testing-library/react'
import FetcherProvider from '../Fetcher'

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<FetcherProvider>children</FetcherProvider>)

    const providerElem = screen.getByText(/children/)
    expect(providerElem).toBeInTheDocument()
  })
})
