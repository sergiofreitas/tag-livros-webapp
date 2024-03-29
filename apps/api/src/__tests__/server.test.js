import { listBooks, getBook, searchBooks } from '../server'
import {
  getAllBooks,
  getBookByIsbn,
  searchBooksByIsbn,
} from '../books/controller'

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

jest.mock('../books/controller', () => ({
  getAllBooks: jest.fn(),
  getBookByIsbn: jest.fn(),
  searchBooksByIsbn: jest.fn(),
}))

describe('get all books', () => {
  it('when its ok, should return a list ok books', async () => {
    getAllBooks.mockImplementation(() => {
      return { statusCode: 200, body: JSON.stringify(mockBooks) }
    })

    const { statusCode, body } = await listBooks()

    expect(statusCode).toBe(200)
    expect(body).toBe(JSON.stringify(mockBooks))
  })

  it('when its have an error, return a error 500 and a message', async () => {
    getAllBooks.mockImplementation(() => {
      return { statusCode: 500, body: 'Internal Server Error' }
    })

    const { statusCode, body } = await listBooks()

    expect(statusCode).toBe(500)
    expect(body).toBe('Internal Server Error')
  })
})

describe('get book', () => {
  getBookByIsbn.mockImplementation(({ pathParameters: { isbn } }) => {
    const book = mockBooks.find((b) => isbn === b.isbn)
    if (!book) {
      return { statusCode: 500, body: 'Not Found' }
    }

    return { statusCode: 200, body: JSON.stringify(book) }
  })

  it('when its ok, should return the book', async () => {
    const { statusCode, body } = await getBook({
      pathParameters: { isbn: '9788525063557' },
    })

    expect(statusCode).toBe(200)
    expect(body).toBe(JSON.stringify(mockBooks[0]))
  })

  it('when the book not exists, should return an error', async () => {
    const { statusCode, body } = await getBook({
      pathParameters: { isbn: 'not-exists' },
    })

    expect(statusCode).toBe(500)
    expect(body).toBe('Not Found')
  })

  it('when its have an error, return a error 500 and a message', async () => {
    getBookByIsbn.mockImplementation(() => {
      return { statusCode: 500, body: 'Internal Server Error' }
    })

    const { statusCode, body } = await getBook({
      pathParameters: { isbn: '9788525063557' },
    })

    expect(statusCode).toBe(500)
    expect(body).toBe('Internal Server Error')
  })
})

describe('search for a book', () => {
  searchBooksByIsbn.mockImplementation(
    ({ queryStringParameters: { term } }) => {
      const books = mockBooks.filter((b) => b.isbn.startsWith(term))
      if (!books.length) {
        return { statusCode: 500, body: 'Not Found' }
      }

      return { statusCode: 200, body: JSON.stringify(books) }
    }
  )

  it('when its ok, should return the books', async () => {
    const { statusCode, body } = await searchBooks({
      queryStringParameters: { term: '9788525063557' },
    })

    expect(statusCode).toBe(200)
    expect(body).toBe(JSON.stringify([mockBooks[0]]))
  })

  it('when the books not exists, should return an error', async () => {
    const { statusCode, body } = await searchBooks({
      queryStringParameters: { term: 'not-exists' },
    })

    expect(statusCode).toBe(500)
    expect(body).toBe('Not Found')
  })

  it('when its have an error, return a error 500 and a message', async () => {
    searchBooksByIsbn.mockImplementation(() => {
      return { statusCode: 500, body: 'Internal Server Error' }
    })

    const { statusCode, body } = await searchBooks({
      queryStringParameters: { term: '9788525063557' },
    })

    expect(statusCode).toBe(500)
    expect(body).toBe('Internal Server Error')
  })
})
