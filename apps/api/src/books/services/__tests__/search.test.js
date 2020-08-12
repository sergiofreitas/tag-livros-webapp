import searchBook from '../search'
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

describe('search for a book service', () => {
  it('should return the book by isbn', async () => {
    const books = await searchBook('9788525063557')
    expect(books.length).toBe(1)
  })

  it('if book is not found, should throw an Error', async () => {
    await expect(searchBook('12345')).rejects.toThrow('Not Found')
  })

  it('if some error occurs on hydration should return the books without hydration', async () => {
    getReviewCount.mockImplementation(() => {
      throw new Error('404 - Not Found')
    })

    const books = await searchBook('9788525063557')
    expect(books.length).toBe(1)
  })
})
