import React from 'react'
import { screen, render } from '@testing-library/react'
import StateProvider from '../State'

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<StateProvider>children</StateProvider>)

    const providerElem = screen.getByText(/children/)
    expect(providerElem).toBeInTheDocument()
  })
})
