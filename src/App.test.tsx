import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
