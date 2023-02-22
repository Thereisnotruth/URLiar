import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import SignUpPage from './SignUpPage';

describe('SignUpPage', () => {
  it('should navigate to main page when return button is clicked', () => {
    // Render component
    render(<SignUpPage />, { wrapper: BrowserRouter });

    // Find register button and click it
    const returnButton = screen.getByRole('moveBack');
    fireEvent.click(returnButton);

    // Assert that browser navigated to the expected URL
    expect(window.location.pathname).toBe('/');
  });
});
