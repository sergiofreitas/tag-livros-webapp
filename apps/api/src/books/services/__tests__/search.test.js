import searchBook from '../search'

describe('search for a book service', () => {
  it('should return the book by isbn', async () => {
    const books = await searchBook('9788525063557')
    expect(books.length).toBe(1)
  })
})
