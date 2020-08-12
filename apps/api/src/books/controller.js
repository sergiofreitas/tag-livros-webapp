import getBook from './services/get'
import getAll from './services/getAll'
import search from './services/search'

export const getBookByIsbn = async ({ pathParameters }) => {
  try {
    const { isbn } = pathParameters
    const book = await getBook(isbn)

    return {
      statusCode: 200,
      body: JSON.stringify(book),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}

export const getAllBooks = async () => {
  try {
    const books = await getAll()

    return {
      statusCode: 200,
      body: JSON.stringify(books),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}

export const searchBooksByIsbn = async ({ queryStringParameters }) => {
  try {
    const { term } = queryStringParameters || {}
    const books = await search(term)

    return {
      statusCode: 200,
      body: JSON.stringify(books),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}
