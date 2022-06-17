import { render, screen } from '@testing-library/react';
import SearchBox from './SearchBox';

describe('initial tests for react range', () => {
    it('should render an input', () => {
        render(<SearchBox />)
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
    })
})