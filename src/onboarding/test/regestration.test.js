import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  test('renders correctly', () => {
    render(<MyComponent />);

    const titleElement = screen.getByText('Hello World!');
    expect(titleElement).toBeInTheDocument();

    // This assertion will always pass
    expect(true).toBe(true);
  });
});
