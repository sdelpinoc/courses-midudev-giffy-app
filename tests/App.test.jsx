import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../src/App';

describe('Testing in <App />', () => {
    test('Should first render without errors', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        const title = await screen.findByText('Giffy');

        expect(title).toBeInTheDocument();
        expect(screen.findByText('Last search')).toBeTruthy();
        // screen.debug();
    });

    test('Should show at least one gifs', async () => {
        const { container } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        await waitFor(() => expect(container.querySelector('.gif')).toBeInTheDocument());
        // screen.debug();
    });

    test('Search form could be used', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        const input = await screen.findByRole('textbox');
        fireEvent.change(input, { target: { value: 'Matrix' } });

        const button = await screen.findByRole('button');
        fireEvent.click(button);

        expect(await screen.findByText('Matrix')).toBeVisible();
        // screen.debug();
    });
});