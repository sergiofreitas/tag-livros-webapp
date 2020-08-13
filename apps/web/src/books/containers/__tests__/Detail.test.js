import React from 'react'
import { screen, render } from '@testing-library/react'
import useSWR from 'swr'
import Detail from '../Detail'

const mockBook = {
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
  goodReads: {
    average_rating: '3.60',
  },
}

jest.mock('../../ui/Detail')
jest.mock('swr', () => jest.fn())

describe('when component is mounted', () => {
  it('check the rendered component', async () => {
    useSWR.mockImplementation(() => ({
      data: mockBook,
      isValidating: false,
      error: null,
    }))

    render(<Detail isbn="12345" />)

    const name = screen.getByRole('heading', { name: 'O Xará' })
    expect(name).toBeInTheDocument()

    const author = screen.getByRole('heading', { name: 'Jhumpa Lahiri' })
    expect(author).toBeInTheDocument()

    const cover = screen.getByRole('img', { name: 'O Xará' })
    expect(cover).toBeInTheDocument()
  })

  it('check the loading components', async () => {
    useSWR.mockImplementation(() => ({
      data: [],
      isValidating: true,
      error: null,
    }))

    render(<Detail isbn="12345" />)

    const loader = screen.getByRole('progressbar')
    expect(loader).toBeInTheDocument()
  })

  it('throw an error if have some problem with api', async () => {
    useSWR.mockImplementation(() => ({
      data: [],
      isValidating: false,
      error: { message: 'Network communication error' },
    }))

    render(<Detail isbn="12345" />)

    expect(screen.getByText('Network communication error')).toBeInTheDocument()
  })
})
