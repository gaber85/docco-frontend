import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(cleanup);

test('should not complain, that there is no test for now', () => {
  expect(true).toBeTruthy();
});
