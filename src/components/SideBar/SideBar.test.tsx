import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SideBar from './SideBar'

describe('SideBar test group', () => {
  test('SideBar renders without error', () => {
    render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    )
    expect(screen.getByText('My profile')).toBeInTheDocument
    expect(screen.getByText('Messages')).toBeInTheDocument
    expect(screen.getByText('Users')).toBeInTheDocument
    expect(screen.getByRole('list')).toBeInTheDocument
    expect(screen.getAllByRole('link')).toBeInTheDocument
  })
  test('SideBar snapshot', () => {
    const sideBar = render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>
    )
    expect(sideBar).toMatchSnapshot()
  })
})
