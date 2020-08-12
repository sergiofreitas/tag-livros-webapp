import {
  getAllBooks,
  getBookByIsbn,
  searchBooksByIsbn,
} from './books/controller'

export const listBooks = () => getAllBooks()

export const getBook = (event) => getBookByIsbn(event)

export const searchBooks = (event) => searchBooksByIsbn(event)
