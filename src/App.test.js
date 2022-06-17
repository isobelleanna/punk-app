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
  it('should load taster menu when nav link is clicked', () => {
    render(<App />);
    const tasterLink = screen.getByText(/Taster Menu/i)
    userEvent.click(tasterLink)
    const taster = screen.getByTestId("taster-menu")
    expect(taster).toBeInTheDocument();
    expect(taster).toBeTruthy();
  })
})
