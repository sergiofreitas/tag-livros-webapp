import localBooks from '../livros.json'
import sortBooks from '../functions/sortBooks'
import getReviewCount from '../../goodReads/getReviewCount'
import hydrateBooks from '../../goodReads/hydrateBooks'

/**
 * Get a list of books registered in local json
 *
 * @async
 * @returns {Array[Books]}
 * @throws {Error}
 */
export default async () => {
  try {
    const isbns = localBooks.results.map((item) => item.isbn)
    const reviewList = await getReviewCount(isbns)
    const books = hydrateBooks(reviewList, localBooks.results)
    return sortBooks(books)
  } catch (error) {
    return sortBooks(localBooks.results)
  }
}
