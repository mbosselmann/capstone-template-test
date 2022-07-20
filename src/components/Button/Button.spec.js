import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Button from './Button.js';

describe('Button', () => {
  it('renders Button', () => {
    render(<Button />);
    const button = screen.getByRole('button', {name: 'Klick!'});
    expect(button).toBeInTheDocument();
  });
});
