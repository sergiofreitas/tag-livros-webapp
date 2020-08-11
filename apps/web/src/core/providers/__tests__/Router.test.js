import React from 'react'
import { screen, render } from '@testing-library/react'
import RouterProvider from '../Router'

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<RouterProvider>children</RouterProvider>)

    const providerElem = screen.getByText(/children/)
    expect(providerElem).toBeInTheDocument()
  })
})
