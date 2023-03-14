import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link, navigate after click', () => {
    render(<App/>);

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    fireEvent.click(screen.getByText(/^Counter$/i));
    expect(screen.getByText(/Clicked 0 Times/i)).toBeInTheDocument();
});
