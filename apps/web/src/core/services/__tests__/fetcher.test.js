import axios from 'axios'
import config from 'config/app'
import fetcher from '../fetcher'

jest.mock('axios')

describe('fetcher', () => {
  it('fetch erroneously data from a endpoint', async () => {
    const response = {
      status: 200,
      data: {
        books: [],
      },
    }

    axios.get.mockImplementationOnce(() => Promise.resolve(response))
    await expect(fetcher('/books')).resolves.toEqual(response.data)

    expect(axios.get).toHaveBeenCalledWith(`${config.baseUrl}/books`)
  })

  it('fetch successfully data from a endpoint', async () => {
    const message = 'Network Error'

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(message)))
    await expect(fetcher('/books')).rejects.toThrow(message)

    expect(axios.get).toHaveBeenCalledWith(`${config.baseUrl}/books`)
  })
})
