import getBook from '../get'

jest.mock('../../../goodReads/getReviewCount', () =>
  jest.fn().mockImplementation((isbn) => {
    if (isbn === '9788565620401') {
      throw new Error('404 - Not Found')
    }

    return Promise.resolve([{ isbn, average_rating: '4.30' }])
  })
)

jest.mock('../../../goodReads/hydrateBooks', () => (grList, bookList) => {
  return bookList.map((book) => ({
    ...book,
    goodReads: grList[0],
  }))
})

describe('get book service', () => {
  it('if have a isbn, should return the book', async () => {
    const book = await getBook('9788525063557')
    expect(book.isbn).toEqual('9788525063557')
  })

  it('if book is not found, should throw an Error', async () => {
    await expect(getBook('12345')).rejects.toThrow('Not Found')
  })
})

describe('get the goodread integration', () => {
  it('if have the isbn on goodReads, should return the book extra info', async () => {
    const book = await getBook('9788525063557')

    expect(book.goodReads).toEqual({
      average_rating: '4.30',
      isbn: '9788525063557',
    })
  })

  it('if not have the isbn on goodReads, should return only the book info', async () => {
    const book = await getBook('9788565620401')

    expect(book.goodReads).toBeUndefined()
  })
})
