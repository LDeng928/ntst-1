import { render } from '@redwoodjs/testing'

import ProductCard from './ProductCard'

describe('ProductCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductCard />)
    }).not.toThrow()
  })
})
