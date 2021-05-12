import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import MainSearch from './MainSearch';

test('renders contect', () => {
	const search = 'some';

	const component = render(<MainSearch search={search} />);
	component.getByPlaceholderText('buscar');
	component.getByDisplayValue('some');
});

