// get a review count from a list of books (to be used on list and search)
import get from 'lodash/get'
import fetcher from './fetcher'

/**
 * Get a list of reviews from good reads api
 *
 * @param {Array[string]} isbns The list of isbns to look
 * @returns {Array[review]} The review list
 */
const getReviewCount = async (isbns) => {
  const response = await fetcher('/review_counts.json', { isbns })

  if (response.status === 200) {
    return get(response, 'data.books', [])
  }

  return []
}

export default getReviewCount
