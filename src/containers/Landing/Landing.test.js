import { render, screen } from '@testing-library/react';
import Landing from './Landing';

describe('initial test for landing page', () => {
    it('should render heading', () => {
        render(<Landing />)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument();
        expect(heading).not.toBeNull
    })
     it('should render paragraph', () => {
        render(<Landing />)
        const paragraph = screen.getByText('Exceptional quality is the cornerstone of our brewery. All BrewDog beers are brewed using the finest malted barley and hops from the best producers around the world.')
        expect(paragraph).toBeInTheDocument();
        expect(paragraph).not.toBeNull
    })
})