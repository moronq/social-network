import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { ProfileType, ProfileTypeStatus } from '../../models/profile'
import { store } from '../../store/store'
import ProfileInfo from './ProfileInfo'

interface IMock {
  profileInfo: ProfileType & ProfileTypeStatus
  userId: string
}

const mockInfo: IMock = {
  profileInfo: {
    aboutMe: 'something about me',
    contacts: {
      github: 'github',
      vk: 'vk',
      facebook: 'facebook',
      instagram: 'instagram',
      twitter: 'twitter',
      website: 'website',
      youtube: 'youtube',
      mainLkink: 'mainLkink',
    },
    error: '',
    fullName: 'Sereja Shcherbinin',
    lookingForAJob: true,
    lookingForAJobDescription: 'I am searching for a job',
    photos: {
      large: '',
      small: '',
    },
    status: 'my status',
    userId: 1,
  },
  userId: '1',
}

describe('ProfileInfo test group', () => {
  test('ProfileInfo renders without errors', () => {
    render(
      <Provider store={store}>
        <ProfileInfo {...mockInfo} />
      </Provider>
    )
    expect(screen.getByText('Sereja Shcherbinin')).toBeInTheDocument
    expect(screen.getByText('my status')).toBeInTheDocument
    expect(screen.getByText('Show details')).toBeInTheDocument
    expect(screen.queryByText('something about me')).not.toBeInTheDocument
    expect(screen.queryByText('Hide')).not.toBeInTheDocument
  })
  test('ProfileInfo slider works', () => {
    render(
      <Provider store={store}>
        <ProfileInfo {...mockInfo} />
      </Provider>
    )
    expect(screen.queryByText('something about me')).not.toBeInTheDocument
    expect(screen.queryByText('Hide')).not.toBeInTheDocument
    expect(screen.getByText('Show details')).toBeInTheDocument

    userEvent.click(screen.getByRole('button'))
    expect(screen.queryByText('something about me')).toBeInTheDocument
    expect(screen.queryByText('Hide')).toBeInTheDocument
    expect(screen.queryByText('Show details')).not.toBeInTheDocument
  })
  test('ProfileInfo snapshot', () => {
    const element = render(
      <Provider store={store}>
        <ProfileInfo {...mockInfo} />
      </Provider>
    )
    expect(element).toMatchSnapshot()
  })
})
