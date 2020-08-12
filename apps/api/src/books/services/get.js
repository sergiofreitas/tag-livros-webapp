import localBooks from '../livros.json'
import getReviewCount from '../../goodReads/getReviewCount'
import hydrateBooks from '../../goodReads/hydrateBooks'

/**
 * Get a book using isbn field as identifier
 *
 * @async
 * @param {string} isbn - The isbn identifier
 * @returns {Book}
 * @throws {Error}
 */
export default async (isbn) => {
  const book = localBooks.results.find((item) => item.isbn === isbn)

  if (!book) {
    throw new Error('Not Found')
  }

  try {
    const reviewCount = await getReviewCount(isbn)
    const books = hydrateBooks(reviewCount, [book])

    return books[0]
  } catch (error) {
    return book
  }
}
