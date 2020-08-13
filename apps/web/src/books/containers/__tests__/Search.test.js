import React from 'react'
import { Router } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from '../Search'

jest.mock('../../ui/SearchBox')

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<Search />)

    const elem = screen.getByRole('searchbox', { name: 'search' })
    expect(elem).toBeInTheDocument()

    const btn = screen.getByRole('button', { name: 'search' })
    expect(btn).toBeInTheDocument()
  })

  it('check the rendered component with pre defined term', () => {
    render(<Search term="98765" />)

    const elem = screen.getByRole('searchbox', { name: 'search' })
    expect(elem).toBeInTheDocument()
    expect(elem).toHaveValue('98765')
  })
})

describe('when user interact with component', () => {
  const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() }

  it('when user click on button the route must be updated', () => {
    render(
      <Router history={historyMock}>
        <Search />
      </Router>,
    )

    const elem = screen.getByRole('searchbox', { name: 'search' })
    const btn = screen.getByRole('button', { name: 'search' })

    userEvent.type(elem, '123456')
    userEvent.click(btn)

    expect(historyMock.push).toHaveBeenCalledWith('/search?term=123456')
  })

  it('when user press enter button the route must be updated', () => {
    render(
      <Router history={historyMock}>
        <Search />
      </Router>,
    )

    const elem = screen.getByRole('searchbox', { name: 'search' })
    userEvent.type(elem, '123456{enter}')

    expect(historyMock.push).toHaveBeenCalledWith('/search?term=123456')
  })
})
