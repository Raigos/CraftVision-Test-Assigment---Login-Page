import React from 'react';
import { render } from '@testing-library/react';
import LoginContainer from './components/LoginContainer';

test('renders learn react link', () => {
  const { getByText } = render(<LoginContainer />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
