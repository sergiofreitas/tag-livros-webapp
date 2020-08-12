import axios from 'axios'
import fetcher from '../fetcher'

jest.mock('axios', () => jest.fn())

describe('goodReads fetcher', () => {
  it('should call the fetch method', () => {
    fetcher('/search', { isbn: '1234' })

    expect(axios).toHaveBeenCalledWith({
      method: 'get',
      url: '/search',
      baseURL: 'https://www.goodreads.com/book',
      params: {
        isbn: '1234',
        key: process.env.GOODREADS_API_KEY,
      },
    })
  })
})
