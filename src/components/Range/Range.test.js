import { render, screen } from '@testing-library/react';
import Range from './Range';

describe('initial tests for react range', () => {
    it('should render an input', () => {
        render(<Range />)
        const input = screen.getByRole('slider')
        expect(input).toBeInTheDocument()
    })
})