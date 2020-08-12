import getReviewCount from '../getReviewCount'
import fetcher from '../fetcher'

jest.mock('../fetcher', () => jest.fn())

describe('get the review count', () => {
  fetcher.mockImplementation((url, { isbns }) => {
    if (isbns === '1234') {
      return {
        status: 200,
        data: { books: [{ isbn: '1234', average_rating: '4.45' }] },
      }
    }

    return { status: 204, data: { books: [] } }
  })

  it('when have the isbn, return a review for each isbn', async () => {
    const reviews = await getReviewCount('1234')

    expect(reviews[0]).toEqual({ isbn: '1234', average_rating: '4.45' })
  })

  it('when doesnt have the isbn, return a empty array', async () => {
    const reviews = await getReviewCount('4321')

    expect(reviews.length).toBe(0)
  })
})
