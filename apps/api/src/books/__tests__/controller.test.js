import { getAllBooks, getBookByIsbn, searchBooksByIsbn } from '../controller'

import getBook from '../services/get'
import getAll from '../services/getAll'
import search from '../services/search'

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

jest.mock('../services/get', () => jest.fn())
jest.mock('../services/getAll', () => jest.fn())
jest.mock('../services/search', () => jest.fn())

describe('get all books', () => {
  getAll.mockImplementation(() => mockBooks)

  it('when its ok, should return a list of books', async () => {
    const { statusCode, body } = await getAllBooks()

    expect(statusCode).toBe(200)
    expect(body).toBe(JSON.stringify(mockBooks))
  })

  it('when throw an error, should return the error message', async () => {
    getAll.mockImplementation(() => {
      throw new Error('Internal Server Error')
    })

    const { statusCode, body } = await getAllBooks()

    expect(statusCode).toBe(500)
    expect(body).toBe(JSON.stringify({ message: 'Internal Server Error' }))
  })
})

describe('get book by isbn', () => {
  getBook.mockImplementation((isbn) => {
    const book = mockBooks.find((b) => isbn === b.isbn)
    if (!book) {
      throw new Error('Not Found')
    }

    return book
  })

  it('when its ok, should return the book', async () => {
    const { statusCode, body } = await getBookByIsbn({
      pathParameters: { isbn: '9788525063557' },
    })

    expect(statusCode).toBe(200)
    expect(body).toBe(JSON.stringify(mockBooks[0]))
  })

  it('when the book not exists, should return an error', async () => {
    const { statusCode, body } = await getBookByIsbn({
      pathParameters: { isbn: 'not-exists' },
    })

    expect(statusCode).toBe(500)
    expect(body).toBe(JSON.stringify({ message: 'Not Found' }))
  })

  it('when throw an error, should return the error message', async () => {
    getBook.mockImplementation(() => {
      throw new Error('Internal Server Error')
    })

    const { statusCode, body } = await getBookByIsbn({
      pathParameters: { isbn: '9788525063557' },
    })

    expect(statusCode).toBe(500)
    expect(body).toBe(JSON.stringify({ message: 'Internal Server Error' }))
  })
})

describe('search book by isbn', () => {
  search.mockImplementation((term) => {
    const books = mockBooks.filter((b) => b.isbn.startsWith(term))
    if (!books.length) {
      throw new Error('Not Found')
    }

    return books
  })

  it('when its ok, should return the books', async () => {
    const { statusCode, body } = await searchBooksByIsbn({
      queryStringParameters: { term: '9788525063557' },
    })

    expect(statusCode).toBe(200)
    expect(body).toBe(JSON.stringify([mockBooks[0]]))
  })

  it('when the book not exists, should return an error', async () => {
    const { statusCode, body } = await searchBooksByIsbn({
      queryStringParameters: { term: 'not-exists' },
    })

    expect(statusCode).toBe(500)
    expect(body).toBe(JSON.stringify({ message: 'Not Found' }))
  })

  it('when throw an error, should return the error message', async () => {
    search.mockImplementation(() => {
      throw new Error('Internal Server Error')
    })

    const { statusCode, body } = await searchBooksByIsbn({
      queryStringParameters: { term: '9788525063557' },
    })

    expect(statusCode).toBe(500)
    expect(body).toBe(JSON.stringify({ message: 'Internal Server Error' }))
  })
})
