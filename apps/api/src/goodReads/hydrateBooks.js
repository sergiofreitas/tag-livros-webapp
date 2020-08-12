/**
 * Merge the list of goodReads resources in books
 *
 * @param {*} goodReadsList list of objects from goodReads api
 * @param {*} bookList list of local books
 * @returns {Array[book]} Array of book with goodReads info together
 */
const hydrateBooks = (goodReadsList, bookList) => {
  const goodReadsObject = goodReadsList.reduce((agg, item) => {
    return { ...agg, [item.isbn]: item, [item.isbn13]: item }
  }, {})

  return bookList.map((book) => {
    return {
      ...book,
      goodReads: goodReadsObject[book.isbn],
    }
  })
}

export default hydrateBooks
