import React from 'react'
import { screen, render } from '@testing-library/react'
import DetailPage from '../Detail'

jest.mock('ui/Header')
jest.mock('books/containers/Search')

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<DetailPage />)

    const providerElem = screen.getByText(/detail page/)
    expect(providerElem).toBeInTheDocument()
  })
})
