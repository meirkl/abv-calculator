import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';

it('renders app title', () => {
  const { getByText } = render(<App />);
  const appTitle = getByText(/ABV Calculator/i);
  expect(appTitle).toBeInTheDocument();
});

it('renders copyright', () => {
  const { getByText } = render(<App />);
  const copyRight = getByText(/Copyright © 2020, Meir Keller/i);
  expect(copyRight).toBeInTheDocument();
});
