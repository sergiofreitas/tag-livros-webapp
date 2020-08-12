// generic way to fetch from goodReads
import axios from 'axios'

const fetcher = (url, params) =>
  axios({
    url,
    method: 'get',
    baseURL: 'https://www.goodreads.com/book',
    params: {
      key: process.env.GOODREADS_API_KEY,
      ...params,
    },
  })

export default fetcher
