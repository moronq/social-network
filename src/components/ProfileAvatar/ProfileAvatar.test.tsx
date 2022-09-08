import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import ProfileAvatar from './ProfileAvatar'

const profileAvatarMock = {
  photos: {
    large: 'mock/photoLarge',
    small: 'mock/photoSmall',
  },
  userId: '1',
}

const emptyProfileAvatarMock = {
  photos: {
    large: '',
    small: '',
  },
  userId: '1',
}

describe('ProfileAvatar test group', () => {
  test('ProfileAvatar renders without errors', () => {
    render(
      <Provider store={store}>
        <ProfileAvatar {...profileAvatarMock} />
      </Provider>
    )
    const photo = screen.getByRole<HTMLImageElement>('img')
    expect(photo.src).toBe('http://localhost/mock/photoLarge')
    expect(screen.getByAltText<HTMLImageElement>('avatar')).toBeInTheDocument
  })
  test('ProfileAvatar has button write message', () => {
    render(
      <Provider store={store}>
        <ProfileAvatar {...profileAvatarMock} />
      </Provider>
    )

    expect(screen.getByText('Написать сообщение')).toBeInTheDocument
  })
  test('ProfileAvatar renders without photo props', () => {
    render(
      <Provider store={store}>
        <ProfileAvatar {...emptyProfileAvatarMock} />
      </Provider>
    )
    const photo = screen.getByRole<HTMLImageElement>('img')
    expect(photo.src).toBe('http://localhost/no-avatar-large.png')
    expect(screen.getByAltText<HTMLImageElement>('avatar')).toBeInTheDocument
  })
  test('ProfileAvatar snapshot', () => {
    const element = render(
      <Provider store={store}>
        <ProfileAvatar {...emptyProfileAvatarMock} />
      </Provider>
    )
    expect(element).toMatchSnapshot()
  })
})
