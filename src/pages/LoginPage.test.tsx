import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LoginPage from './LoginPage';

describe('LoginPage Component', () => {
  it('should navigate to register page when register button is clicked', () => {
    // Render component
    render(<LoginPage />, { wrapper: BrowserRouter });

    // Find register button and click it
    const registerButton = screen.getByText('회원가입');
    fireEvent.click(registerButton);

    // Assert that browser navigated to the expected URL
    expect(window.location.pathname).toBe('/register');
  });
});
