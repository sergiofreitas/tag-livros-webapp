import getAllBooks from '../getAll'

describe('get all books service', () => {
  it('should return the book list', async () => {
    const books = await getAllBooks()
    expect(books.length).toBe(0)
  })
})
