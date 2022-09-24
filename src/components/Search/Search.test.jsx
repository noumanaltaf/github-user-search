import { render } from '@testing-library/react'

import Search from './Search'

describe('Components/Chip', () => {
  it('should render', () => {
    const { container, getByText } = render(<Search placeholder='username' />)

    expect(container.firstChild).toMatchSnapshot()
    expect(getByText('username')).toBeInTheDocument()
  })
})
