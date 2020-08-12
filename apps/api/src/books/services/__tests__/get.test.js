import getBook from '../get'

describe('get book service', () => {
  it('if have a isbn, should return the book', async () => {
    const book = await getBook('9788525063557')
    expect(book.isbn).toBe('9788525063557')
  })
})