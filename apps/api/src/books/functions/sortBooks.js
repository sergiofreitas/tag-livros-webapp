import moment from 'moment'

/**
 * Sort books by edition date
 *
 * @param {Array[Book]} books The list of books to be sorted
 * @returns {Array[Book]}
 */
export default function sortBooks(books) {
  return [...books].sort((a, b) => {
    const format = 'MMMM [de] YYYY'
    const locale = 'pt'

    const timestampA = moment(a.edition, format, locale).valueOf()
    const timestampB = moment(b.edition, format, locale).valueOf()

    return timestampB - timestampA
  })
}
