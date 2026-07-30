import { render, screen } from '@testing-library/react'
import Card from '../Card'

test('renders title and children', () => {
  render(<Card title="Hi">Content</Card>)
  expect(screen.getByText('Hi')).toBeInTheDocument()
  expect(screen.getByText('Content')).toBeInTheDocument()
})
