import getAllBooks from '../getAll'
import getReviewCount from '../../../goodReads/getReviewCount'

jest.mock('../../functions/sortBooks', () => (books) => books)
jest.mock('../../../goodReads/getReviewCount', () =>
  jest.fn().mockImplementation((isbn) => {
    return Promise.resolve([{ isbn, average_rating: '4.30' }])
  })
)

jest.mock('../../../goodReads/hydrateBooks', () => (grList, bookList) => {
  return bookList.map((book) => ({
    ...book,
    goodReads: grList[0],
  }))
})

describe('get all books service', () => {
  it('should return the book list', async () => {
    const books = await getAllBooks()
    expect(books.length).toBe(35)
  })

  it('if some error occurs on hydration should return the books without hydration', async () => {
    getReviewCount.mockImplementation(() => {
      throw new Error('404 - Not Found')
    })

    const books = await getAllBooks()
    expect(books.length).toBe(35)
  })
})
