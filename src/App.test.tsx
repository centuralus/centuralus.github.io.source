import { h } from 'preact';
import { render } from '@testing-library/preact';
import { expect } from 'chai';
import App from './App';

describe('<App>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/learn preact/i)
    expect(document.body.contains(linkElement))
  })
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
})
