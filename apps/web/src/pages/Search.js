import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from 'ui/Header'
import Search from 'books/containers/Search'
import SearchResult from 'books/containers/SearchResult'

const SearchPage = () => {
  const { search } = useLocation()
  const query = new URLSearchParams(search)

  return (
    <>
      <Header title="Tag Livros Web App" />
      <Search term={query.get('term')} />
      <SearchResult term={query.get('term')} />
    </>
  )
}

export default SearchPage
