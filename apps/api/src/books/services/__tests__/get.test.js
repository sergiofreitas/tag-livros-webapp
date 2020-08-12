import getBook from '../get'

describe('get book service', () => {
  it('if have a isbn, should return the book', async () => {
    const book = await getBook('9788525063557')
    expect(book.isbn).toBe('9788525063557')
  })

  it('if book is not found, should throw an Error', async () => {
    await expect(getBook('12345')).rejects.toThrow('Not Found')
  })
})
