import localBooks from '../livros.json'

/**
 * Get a book using isbn field as identifier
 *
 * @async
 * @param {string} isbn - The isbn identifier
 * @returns {Book}
 * @throws {Error}
 */
export default async (isbn) => {
  // get the isbn from livros.json
  const book = localBooks.results.find((item) => item.isbn === isbn)

  // get the info from goodReads, using the hydrate method
  // if the result is empty, return null
  if (!book) {
    throw new Error('Not Found')
  }
  return book
}
