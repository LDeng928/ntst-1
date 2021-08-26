import { render } from '@redwoodjs/testing'

import ArticledetailPage from './ArticledetailPage'

describe('ArticledetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticledetailPage />)
    }).not.toThrow()
  })
})
