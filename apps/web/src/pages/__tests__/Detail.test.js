import React from 'react'
import { screen, render } from '@testing-library/react'
import DetailPage from '../Detail'

jest.mock('ui/Header')

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<DetailPage />)

    const providerElem = screen.getByText(/detail page/)
    expect(providerElem).toBeInTheDocument()
  })
})
