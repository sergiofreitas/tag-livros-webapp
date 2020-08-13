import React from 'react'
import { screen, render } from '@testing-library/react'
import IndexPage from '..'

jest.mock('ui/Header')
jest.mock('books/containers/Search')
jest.mock('books/containers/List')

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<IndexPage />)

    const head = screen.getByRole('heading', {
      name: /Tag Livros - Comparador/,
    })
    expect(head).toBeInTheDocument()

    const search = screen.getByText('Search field')
    expect(search).toBeInTheDocument()

    const bookTitle = screen.getByRole('heading', { name: 'Últimas edições' })
    expect(bookTitle).toBeInTheDocument()

    const books = screen.getByText('List of books')
    expect(books).toBeInTheDocument()
  })
})
