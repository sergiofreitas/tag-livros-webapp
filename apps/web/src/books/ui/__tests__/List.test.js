import React from 'react'
import { screen, render } from '@testing-library/react'
import BookList from '../List'

const mockBooks = [
  {
    objectId: '1WHexRrC5v',
    pages: 336,
    createdAt: '2017-02-15T17:36:00.537Z',
    updatedAt: '2017-07-03T10:47:08.299Z',
    author: 'Jhumpa Lahiri',
    name: 'O Xará',
    isbn: '9788525063557',
    curator: 'Martha Medeiros',
    cover: {
      __type: 'File',
      name: '8d7bd45d8ec66ddba8534765fadff35e_oxara.jpg',
      url:
        'https://static2.taglivros.com/8d7bd45d8ec66ddba8534765fadff35e_oxara.jpg',
    },
    edition: 'Fevereiro de 2017',
    blocked: false,
    numRatings: 863,
    totalRatings: 3785,
  },
  {
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
  },
]

jest.mock('../Card')

describe('when component is mounted', () => {
  it('check the rendered component', async () => {
    render(<BookList title="Book Title" books={mockBooks} loading={false} />)

    const head = screen.getByRole('heading', { name: 'Book Title' })
    expect(head).toBeInTheDocument()

    const links = await screen.findAllByRole('link')
    expect(links.length).toBe(2)
  })

  it('check the loading component', async () => {
    render(<BookList title="Book Title" books={mockBooks} loading />)

    const head = screen.getByRole('heading', { name: 'Book Title' })
    expect(head).toBeInTheDocument()

    const progressbars = await screen.findAllByRole('progressbar')
    expect(progressbars.length).toBe(2)
  })
})
