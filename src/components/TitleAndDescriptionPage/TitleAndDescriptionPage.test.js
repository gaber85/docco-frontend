import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import TitleAndDescriptionPage from './TitleAndDescriptionPage';

afterEach(cleanup);
test('should write text to input', () => {
  // mock props
  const props = {
    progressTracker: 0,
    document: {
      title: 'title...',
      description: 'description...',
      files: [],
      beneficiaryEmail: ''
    },
  };

  props.handleInputChange = event => {
    const { document } = props;
    const { name, value } = event.target;
    props.document = { ...document, [name]: value }
  };

  // Arrange
  const { getByTestId, rerender } = render(<TitleAndDescriptionPage {...props}/>);
  const titleInput = getByTestId('title-input');
  const descriptionInput = getByTestId('description-input');
  // Act
  fireEvent.change(titleInput, {target: {value: 'test title input', name: 'title'}});
  fireEvent.change(descriptionInput, {target: {value: 'test description input', name: 'description'}});
  // rerender for new state
  rerender(<TitleAndDescriptionPage {...props} />);
  // Assert
  expect(titleInput.value).toBe('test title input');
  expect(descriptionInput.value).toBe('test description input');
});
