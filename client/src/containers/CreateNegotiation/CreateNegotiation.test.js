import React from 'react';
import {render, fireEvent} from 'react-testing-library'
import 'jest-dom/extend-expect'
import CreateNegotiation from './CreateNegotiation'

// automatically unmount and cleanup DOM after the test is finished.
// afterEach(cleanup); Ask Arol why it errors
const { queryByTestId, getByTestId } = render(<CreateNegotiation />);

test('it should render title-input', () => {
  expect(queryByTestId('title-input')).toBeInTheDocument();
});

test('it should render description-input', () =>{
  expect(queryByTestId('description-input')).toBeInTheDocument();
});

// test('it should write input title to state', () => {
//   fireEvent.click(getByTestId('title-input'));
//   fireEvent.change(getByTestId('title-input'), {target: {value: 'Test title'}});
//   expect(getByTestId('title-input').textContent).toBe('Test title')
// });
