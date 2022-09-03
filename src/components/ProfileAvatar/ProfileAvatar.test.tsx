import { render, screen } from '@testing-library/react'
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
    render(<ProfileAvatar {...profileAvatarMock} />)
    const photo = screen.getByRole<HTMLImageElement>('img')
    expect(photo.src).toBe('http://localhost/mock/photoLarge')
    expect(screen.getByAltText<HTMLImageElement>('avatar')).toBeInTheDocument
  })
  test('ProfileAvatar has button write message', () => {
    render(<ProfileAvatar {...profileAvatarMock} />)

    expect(screen.getByText('Написать сообщение')).toBeInTheDocument
  })
  test('ProfileAvatar renders without photo props', () => {
    render(<ProfileAvatar {...emptyProfileAvatarMock} />)
    const photo = screen.getByRole<HTMLImageElement>('img')
    expect(photo.src).toBe('http://localhost/no-avatar-large.png')
    expect(screen.getByAltText<HTMLImageElement>('avatar')).toBeInTheDocument
  })
  test('ProfileAvatar snapshot', () => {
    const element = render(<ProfileAvatar {...emptyProfileAvatarMock} />)
    expect(element).toMatchSnapshot()
  })
})
