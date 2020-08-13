import React from 'react'
import Header from 'ui/Header'
import Search from 'books/containers/Search'
import BookList from 'books/containers/List'

const IndexPage = () => (
  <>
    <Header title="Tag Livros Web App" />
    <Search />
    <BookList title="Últimas edições" />
  </>
)

export default IndexPage
