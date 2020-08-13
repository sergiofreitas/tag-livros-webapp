import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBox from '../SearchBox'

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<SearchBox onSearch={jest.fn()} />)

    const elem = screen.getByRole('textbox', { name: 'search' })
    expect(elem).toBeInTheDocument()

    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
  })
})

describe('when user interact with component', () => {
  it('when user click on button the onSearch must be triggered', () => {
    const mockSearch = jest.fn()
    render(<SearchBox onSearch={mockSearch} />)

    const elem = screen.getByRole('textbox', { name: 'search' })
    const btn = screen.getByRole('button')

    userEvent.type(elem, '123456')
    userEvent.click(btn)

    expect(mockSearch).toHaveBeenCalledWith('123456')
  })

  it('when user click on enter the onSearch must be triggered', () => {
    const mockSearch = jest.fn()
    render(<SearchBox onSearch={mockSearch} />)

    const elem = screen.getByRole('textbox', { name: 'search' })
    userEvent.type(elem, '123456{enter}')

    expect(mockSearch).toHaveBeenCalledWith('123456')
  })
})
