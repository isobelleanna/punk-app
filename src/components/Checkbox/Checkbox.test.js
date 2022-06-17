import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('initial tests for react range', () => {
    it('should render an input', () => {
        render(<Checkbox />)
        const input = screen.getByRole('checkbox')
        expect(input).toBeInTheDocument()
    })
})