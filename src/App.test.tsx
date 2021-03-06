import { h } from 'preact';
import { render } from '@testing-library/preact';
import { expect } from 'chai';
import App from './App';

describe('<App>', () => {
  it('has the centural logo alt text', () => {
    const { getByAltText } = render(<App />)
    const linkElement = getByAltText(/Centural Logo/i)
    expect(document.body.contains(linkElement))
  })
  it('renders centural logo', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/Centural/i)
    expect(document.body.contains(linkElement))
  })
  it('has a username field', async () => {
    const { getByText, getByTestId} = render(<App />)
    const link_element = getByText(/username/i)
    const secret_key = getByTestId(/secret_key/i)
    expect(document.body.contains(link_element))
    expect(document.body.contains(secret_key))
  })
})

