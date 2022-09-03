import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { store } from '../../store/store'
import UserItem from './UserItem'

const mockUser = {
  followed: false,
  id: 1,
  name: 'John',
  photo: null,
  status: 'user status',
}

describe('UserItem test group', () => {
  test('UserItem renders without errors', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserItem
            followed={mockUser.followed}
            id={mockUser.id}
            name={mockUser.name}
            photo={mockUser.photo}
            status={mockUser.status}
          />
        </MemoryRouter>
      </Provider>
    )
    expect(screen.getByText('John')).toBeInTheDocument
    expect(screen.getByText('user status')).toBeInTheDocument
  })

  test('snapshot test', () => {
    const userItemComponent = render(
      <Provider store={store}>
        <MemoryRouter>
          <UserItem
            followed={mockUser.followed}
            id={mockUser.id}
            name={mockUser.name}
            photo={mockUser.photo}
            status={mockUser.status}
          />
        </MemoryRouter>
      </Provider>
    )
    expect(userItemComponent).toMatchSnapshot()
  })
})
