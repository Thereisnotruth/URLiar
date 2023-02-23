import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import SignUpPage from './SignUpPage';

describe('SignUpPage', () => {
  it('navigate to main page when return button is clicked', () => {
    // Render component
    render(<SignUpPage />, { wrapper: BrowserRouter });

    // Find register button and click it
    const returnButton = screen.getByRole('moveBack');
    fireEvent.click(returnButton);

    // Assert that browser navigated to the expected URL
    expect(window.location.pathname).toBe('/');
  });

  it('enable button when email, password, password check, nickname are entered', () => {
    render(<SignUpPage />, { wrapper: BrowserRouter });

    const email = screen.getByPlaceholderText('email');
    const pw = screen.getByPlaceholderText('password');
    const pwChk = screen.getByPlaceholderText('verify password');
    const nickname = screen.getByPlaceholderText('nickname');
    const button = screen.getByRole('button', {
      name: '회원가입',
    });

    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: 'user@test.com' } });
    fireEvent.change(pw, { target: { value: 'test1234' } });
    fireEvent.change(pwChk, { target: { value: 'test1234' } });
    fireEvent.change(nickname, { target: { value: 'test' } });
    expect(button).toBeEnabled();
  });

  it('disable button when password and password check have different value', () => {
    render(<SignUpPage />, { wrapper: BrowserRouter });

    const email = screen.getByPlaceholderText('email');
    const pw = screen.getByPlaceholderText('password');
    const pwChk = screen.getByPlaceholderText('verify password');
    const nickname = screen.getByPlaceholderText('nickname');
    const button = screen.getByRole('button', {
      name: '회원가입',
    });

    fireEvent.change(email, { target: { value: 'user@test.com' } });
    fireEvent.change(pw, { target: { value: 'test12345' } });
    fireEvent.change(pwChk, { target: { value: 'test1234' } });
    fireEvent.change(nickname, { target: { value: 'test' } });

    expect(button).toBeDisabled();
  });
});
