import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import BeerTile from './BeerTile';

xdescribe('initial test for react beer tile', () => {
    it('should render the headings', () => {
        render(<BeerTile />)
        const heading = screen.getByText(/Stats/i);
        expect(heading).toBeInTheDocument()

        
    })
})