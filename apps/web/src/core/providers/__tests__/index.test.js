import React from 'react'
import { screen, render } from '@testing-library/react'
import Providers from '..'

jest.mock('core/providers/Fetcher', () => ({ children }) => (
  <div title="Fetcher">{children}</div>
))

jest.mock('core/providers/State', () => ({ children }) => (
  <div title="State">{children}</div>
))

jest.mock('core/providers/Theme', () => ({ children }) => (
  <div title="Theme">{children}</div>
))

jest.mock('core/providers/Router', () => ({ children }) => (
  <div title="Router">{children}</div>
))

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<Providers>children</Providers>)

    const children = screen.getByText(/children/)
    expect(children).toBeInTheDocument()
  })
})
