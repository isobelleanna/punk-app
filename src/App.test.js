import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe('Test user interactions', () => {
  it('should load catalogue when nav link is clicked', () => {
    render(<App />);
    const catalogueLink = screen.getByText(/Catalogue/i)
    userEvent.click(catalogueLink)
    const catalogue = screen.getByTestId("catalogue")
    expect(catalogue).toBeInTheDocument();
    expect(catalogue).toBeTruthy();
  })
})
