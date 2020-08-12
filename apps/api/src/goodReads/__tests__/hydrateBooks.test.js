import hydrateBooks from '../hydrateBooks'

const mockBooks = [
  {
    isbn: '1234',
  },
  {
    isbn: '5678',
  },
]
const mockGoodReadsReviews = [
  {
    isbn13: '1234',
    average_rating: '4.30',
  },
]

describe('hydrate the books with goodRead content', () => {
  it('add the goodReads content as a property of each book', () => {
    const result = hydrateBooks(mockGoodReadsReviews, mockBooks)

    expect(result[0].goodReads).not.toBeUndefined()
    expect(result[1].goodReads).toBeUndefined()
  })
})
