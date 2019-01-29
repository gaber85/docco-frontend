import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import SearchBar from './components/SearchBar';



describe('<App />', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));
  it('should render App', () => {
    expect(typeof wrapper).toBe('object');
  });
})
