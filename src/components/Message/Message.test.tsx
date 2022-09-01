import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ChateMessageType } from '../../models/messages'
import Message from './Message'

const mockMessage: ChateMessageType = {
  message: 'test message',
  photo:
    'https://social-network.samuraijs.com/activecontent/images/users/19481/user-small.jpg?v=7',
  userId: 19481,
  userName: 'dmitriy199427',
}

describe('Message test group', () => {
  test('Message renders without error', () => {
    render(
      <MemoryRouter>
        <Message message={mockMessage} />
      </MemoryRouter>
    )
    expect(screen.getByText('test message')).toBeInTheDocument
    expect(screen.getByText('dmitriy199427')).toBeInTheDocument
  })

  test('avatar check', () => {
    render(
      <MemoryRouter>
        <Message message={mockMessage} />
      </MemoryRouter>
    )
    const img = screen.getByRole('img') as HTMLImageElement
    expect(img.src).toContain(
      'https://social-network.samuraijs.com/activecontent/images/users/19481/user-small.jpg?v=7'
    )
    expect(img.alt).toContain('avatar')
  })

  test('snapshot Message', () => {
    const message = render(
      <MemoryRouter>
        <Message message={mockMessage} />
      </MemoryRouter>
    )
    expect(message).toMatchSnapshot()
  })
})
