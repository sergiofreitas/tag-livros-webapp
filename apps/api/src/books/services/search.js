/**
 * Search for a book in local and goodreads api
 *
 * @async
 * @param {string} term - The term to search
 * @returns {Book}
 * @throws {Error}
 */
export default async (term) => {
  // search for isbn in livros.json
  // search for isbn in goodreads, and hydrate the result
  // if the result is empty, return null

  return [{ isbn: term }]
}
