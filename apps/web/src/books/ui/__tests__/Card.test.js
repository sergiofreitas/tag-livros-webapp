import React from 'react'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Card from '../Card'

const mockBook = {
  objectId: '4MQrahe9Fk',
  author: 'Fiódor Dostoiévski',
  createdAt: '2017-01-24T13:39:30.147Z',
  updatedAt: '2017-07-01T00:17:35.086Z',
  name: 'Duas Narrativas Fantásticas',
  isbn: '9788573262711',
  pages: 128,
  cover: {
    __type: 'File',
    name: 'e40b34d22e66980bd2125f5250be5e39_695243.jpg',
    url:
      'https://static2.taglivros.com/e40b34d22e66980bd2125f5250be5e39_695243.jpg',
  },
  edition: 'Março de 2015',
  curator: 'Luiz Felipe Pondé',
  blocked: false,
  numRatings: 44,
  totalRatings: 189,
}

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(
      <MemoryRouter>
        <Card book={mockBook} to="/detail/9788573262711" loading={false} />
      </MemoryRouter>,
    )

    const name = screen.getByRole('link', {
      name: 'Duas Narrativas Fantásticas',
    })
    expect(name).toBeInTheDocument()

    const author = screen.getByText('Fiódor Dostoiévski')
    expect(author).toBeInTheDocument()
  })
})
