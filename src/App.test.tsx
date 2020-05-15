import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
<<<<<<< HEAD
  const linkElement = getByText(/OpenAccess on Containers/i);
=======
  const linkElement = getByText(/OpenAccess on Containersss/i);
>>>>>>> feature-12-create-temp-types-for-pages
  expect(linkElement).toBeInTheDocument();
});
