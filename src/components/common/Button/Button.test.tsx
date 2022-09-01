import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

const onClick = jest.fn()

describe('test common button', () => {
  test('button renders with props', () => {
    render(<Button>click on me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument
    expect(screen.getByText('click on me')).toBeInTheDocument
  })
  test('button on click works', () => {
    render(<Button onClick={onClick}>test</Button>)
    userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })
  test('button snapshot', () => {
    const button = render(<Button>button</Button>)
    expect(button).toMatchSnapshot()
  })
})
