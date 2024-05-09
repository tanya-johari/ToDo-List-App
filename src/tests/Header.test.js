// Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('renders "To-Do app📝" heading', () => {
    render(<Header />);

    const { getByText } = screen;

    expect(getByText(/To-Do app📝/i)).toBeInTheDocument();
  });
});
