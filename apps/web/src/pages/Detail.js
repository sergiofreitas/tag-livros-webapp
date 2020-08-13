import React from 'react'
import { useParams } from 'react-router-dom'
import Header from 'ui/Header'
import Search from 'books/containers/Search'
import Detail from 'books/containers/Detail'

const DetailPage = () => {
  const { isbn } = useParams()
  return (
    <>
      <Header title="Tag Livros Web App" />
      <Search />

      <Detail isbn={isbn} />
    </>
  )
}

export default DetailPage
