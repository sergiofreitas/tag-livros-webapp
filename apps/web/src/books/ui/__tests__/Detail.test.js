import React from 'react'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Detail from '../Detail'

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
        <Detail book={mockBook} />
      </MemoryRouter>,
    )

    const name = screen.getByRole('heading', {
      name: 'Duas Narrativas Fantásticas',
    })
    expect(name).toBeInTheDocument()

    const author = screen.getByRole('heading', {
      name: 'Fiódor Dostoiévski',
    })
    expect(author).toBeInTheDocument()

    const cover = screen.getByRole('img', {
      name: 'Duas Narrativas Fantásticas',
    })
    expect(cover).toBeInTheDocument()

    const tagRating = screen.getByRole('img', {
      name: '4.3 Stars',
    })
    expect(tagRating).toBeInTheDocument()

    const goodReadsRating = screen.getByRole('heading', {
      name: 'Avaliação não disponível na api GoodReads',
    })
    expect(goodReadsRating).toBeInTheDocument()
  })

  it('check the render of rating component', () => {
    render(
      <MemoryRouter>
        <Detail book={{ ...mockBook, goodReads: { average_rating: '3.9' } }} />
      </MemoryRouter>,
    )

    const tagRating = screen.getByRole('img', {
      name: '4.3 Stars',
    })
    expect(tagRating).toBeInTheDocument()

    const goodReadsRating = screen.getByRole('img', {
      name: '3.9 Stars',
    })
    expect(goodReadsRating).toBeInTheDocument()
  })
})
