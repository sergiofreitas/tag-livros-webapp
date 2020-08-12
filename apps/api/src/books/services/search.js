import localBooks from '../livros.json'

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
  const books = localBooks.results.filter((item) => item.isbn.startsWith(term))

  // search for isbn in goodreads, and hydrate the result
  // if the result is empty, return null
  if (!books.length) {
    throw new Error('Not Found')
  }

  return books
}
