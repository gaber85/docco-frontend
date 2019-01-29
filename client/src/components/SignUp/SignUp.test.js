import React from 'react';
import { shallow, mount } from 'enzyme';
import SignUp from './SignUp';
import MainButton from '../MainButton'


describe('<SignUp />', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<SignUp />));
  it('should render SignUp', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should render a form', () => {
    expect(wrapper.find('form').exists()).toBe(true);
  });
  it('should be made up of 6 input fields', () => {
    expect(wrapper.find('input').length).toBe(5);
  });
  it('should create a state', () => {
    expect(typeof wrapper.state()).toBe('object');
  });
  it('should render the Main Button', () => {
    expect(wrapper.containsMatchingElement(<MainButton />)).toBe(true);
  });
  it('matches the snapshot', () => {
    let tree = mount(<SignUp />)
    expect(tree).toMatchSnapshot();
  });
});
