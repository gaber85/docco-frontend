import React from 'react';
import {render} from 'react-testing-library'
import 'jest-dom/extend-expect'
import CreateNegotiation from './CreateNegotiation'

// automatically unmount and cleanup DOM after the test is finished.
// afterEach(cleanup); Ask Arol why it errors
const { queryByTestId } = render(<CreateNegotiation />);

test('if title input is rendered', () => {
  expect(queryByTestId('title-input')).toBeInTheDocument();
});

test('if description input is rendered', () =>{
  expect(queryByTestId('description-input')).toBeInTheDocument();
});

