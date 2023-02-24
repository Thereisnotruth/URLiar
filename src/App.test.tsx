import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should navigate to register page when register button is clicked', () => {
    // Render component
    render(<App />);

    // Find register button and click it
    const registerButton = screen.getByText('회원가입');
    fireEvent.click(registerButton);

    // Assert that browser navigated to the expected URL
    expect(window.location.pathname).toBe('/signup');
  });
});
