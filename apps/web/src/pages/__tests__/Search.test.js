import React from 'react'
import { screen, render } from '@testing-library/react'
import Search from '../Search'

jest.mock('ui/Header')
jest.mock('books/containers/Search')
jest.mock('books/containers/SearchResult')

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    search: 'term=12345',
  }),
}))

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<Search />)

    const head = screen.getByRole('heading', {
      name: /Tag Livros Web App/,
    })
    expect(head).toBeInTheDocument()

    const search = screen.getByText('Search field')
    expect(search).toBeInTheDocument()

    const resultTitle = screen.getByRole('heading', {
      name: 'Resultados da busca por 12345',
    })
    expect(resultTitle).toBeInTheDocument()

    const books = screen.getByText('List of books')
    expect(books).toBeInTheDocument()
  })
})
