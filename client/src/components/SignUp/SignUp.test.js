import React from 'react';
// import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import SignUp from './SignUp';


describe('<SignUp />', () => {
  let wrapper ;
  beforeEach(() => wrapper = shallow(<SignUp />));
  it('should render SignUp', () => {
    expect(wrapper)
  });
  it('should render a form', () => {
    expect(wrapper.find('form').exists()).toBe(true);
  });
  it('should be made up of 6 input fields', () => {
    expect(wrapper.find('input').length).toBe(6);
  });
  it('should create a state', () => {
    expect(typeof wrapper.state()).toBe('object');
  });
  it('should create a user in state', () => {
    expect(typeof wrapper.state('user')).toBe('object');
  });
  it('matches the snapshot', () => {
    let tree = mount(<SignUp />)
    expect(tree).toMatchSnapshot();
  });

  // it('should have specific values in the state', () => {
  //   expect(wrapper.state().length).toEqual(5);
  // })
  });
