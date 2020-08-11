import React from 'react'
import { screen, render } from '@testing-library/react'
import ThemeProvider from '../Theme'

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<ThemeProvider>children</ThemeProvider>)

    const providerElem = screen.getByText(/children/)
    expect(providerElem).toBeInTheDocument()
  })
})
