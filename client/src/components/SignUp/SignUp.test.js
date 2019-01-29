import React from 'react';
// import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import SignUp from './SignUp';
import MainButton from '../MainButton'


describe('<SignUp />', () => {
  let wrapper ;
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
  it('should create a first key in state that is a string', () => {
    expect(typeof wrapper.state('first')).toBe('string');
  });
  it('should create a last key in state that is a string', () => {
    expect(typeof wrapper.state('last')).toBe('string');
  });
  it('should create a title key in state that is a string', () => {
    expect(typeof wrapper.state('title')).toBe('string');
  });
  it('should create a email key in state that is a string', () => {
    expect(typeof wrapper.state('email')).toBe('string');
  });
  it('should create a organization key in state that is a string', () => {
    expect(typeof wrapper.state('organization')).toBe('string');
  });
  it('should render the Main Button', () => {
    expect(wrapper.containsMatchingElement(<MainButton />)).toBe(true);
  })
  it('matches the snapshot', () => {
    let tree = mount(<SignUp />)
    expect(tree).toMatchSnapshot();
  });

  // it('should have specific values in the state', () => {
  //   expect(wrapper.state().length).toEqual(5);
  // })
  });
