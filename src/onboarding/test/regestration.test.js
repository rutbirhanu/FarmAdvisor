import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Register from '../register'

const mockAxios = new MockAdapter(axios);

describe('Register component', () => {
  it('should render the component', () => {
    const { getByText, getByPlaceholderText } = render(<Register />);
    expect(getByText('SIGN UP')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter your phone')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter your password')).toBeInTheDocument();
    expect(getByText('CONTINUE')).toBeInTheDocument();
  });

  it('should display error message if form is submitted without phone or password', async () => {
    const { getByText } = render(<Register />);
    fireEvent.click(getByText('CONTINUE'));
    await waitFor(() => {
      expect(getByText('All fields are required')).toBeInTheDocument();
    });
  });

  it('should submit the form with phone and password and redirect to home page on successful registration', async () => {
    const history = createMemoryHistory();
    const { getByText, getByPlaceholderText } = render(
      <Router history={history}>
        <Register />
      </Router>
    );
    const phoneInput = getByPlaceholderText('Enter your phone');
    const passwordInput = getByPlaceholderText('Enter your password');
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    mockAxios.onPost('https://63bdda61e348cb076204aebb.mockapi.io/api/v1/users').reply(201);
    fireEvent.click(getByText('CONTINUE'));
    await waitFor(() => {
      expect(mockAxios.history.post.length).toBe(1);
      expect(history.location.pathname).toBe('/');
    });
  });
});
