import React from 'react'
import { screen, render } from '@testing-library/react'
import DetailPage from '../Detail'

jest.mock('ui/Header')
jest.mock('books/containers/Search')
jest.mock('books/containers/Detail')

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    isbn: '12345',
  }),
}))

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<DetailPage />)

    const elem = screen.getByText(/Details of book/)
    expect(elem).toBeInTheDocument()
  })
})
