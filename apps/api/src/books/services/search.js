import localBooks from '../livros.json'
import sortBooks from '../functions/sortBooks'
import getReviewCount from '../../goodReads/getReviewCount'
import hydrateBooks from '../../goodReads/hydrateBooks'

/**
 * Search for a book in local and goodreads api
 *
 * @async
 * @param {string} term - The term to search
 * @returns {Array[Book]}
 * @throws {Error}
 */
export default async (term) => {
  // filter for isbn in livros.json
  const foundBooks = localBooks.results.filter((item) =>
    item.isbn.startsWith(term)
  )

  // search for isbn in goodreads, and hydrate the result
  // if the result is empty, return null
  if (!foundBooks.length) {
    throw new Error('Not Found')
  }

  try {
    const isbns = foundBooks.map((item) => item.isbn)
    const reviewList = await getReviewCount(isbns)
    const books = hydrateBooks(reviewList, foundBooks)
    return sortBooks(books)
  } catch (error) {
    return sortBooks(foundBooks)
  }
}
