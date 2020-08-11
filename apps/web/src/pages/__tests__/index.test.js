import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import IndexPage from '..'

jest.mock('ui/Header')
jest.mock('books/ui/SearchBox')
jest.mock('books/ui/List')

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<IndexPage />)

    const head = screen.getByRole('heading', {
      name: /Tag Livros - Comparador/,
    })
    expect(head).toBeInTheDocument()

    const search = screen.getByRole('searchbox', { name: 'search' })
    expect(search).toBeInTheDocument()
  })
})

describe('when user interact with component', () => {
  it('when user do the search should execute the search method', () => {
    render(<IndexPage />)

    const input = screen.getByRole('searchbox', { name: 'search' })
    const button = screen.getByRole('button', { name: 'search' })

    userEvent.type(input, '123')
    userEvent.click(button)

    expect(input).toHaveValue('123')
  })
})
