import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import AddMessageForm from './AddMessageForm'

jest.useFakeTimers()

describe('AddMessageForm test group', () => {
  test('AddMessageForm renders', () => {
    render(
      <Provider store={store}>
        <AddMessageForm />
      </Provider>
    )
    expect(screen.getByRole('textbox')).toBeInTheDocument
    expect(screen.getByRole('button')).toBeInTheDocument
    expect(screen.getByPlaceholderText('Начните писать сообщение...'))
      .toBeInTheDocument
  })
  test('user print text', async () => {
    render(
      <Provider store={store}>
        <AddMessageForm />
      </Provider>
    )

    userEvent.type(screen.getByRole('textbox'), 'test')

    await waitFor(() => expect(screen.queryByText('test')).toBeInTheDocument)
  })
  test('check empty input button disabling', async () => {
    render(
      <Provider store={store}>
        <AddMessageForm />
      </Provider>
    )
    expect(screen.getByRole('button')).toBeDisabled
    userEvent.type(screen.getByRole('textbox'), 'test')
    await waitFor(() => expect(screen.getByRole('button')).toBeEnabled)
  })
})
