import React from 'react';
// import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import SignUp from './SignUp';


describe('<SignUp />', () => {
  let wrapper ;
  beforeEach(() => { wrapper = shallow(<SignUp />)});
  it('should render SignUp', () => {
    expect(wrapper).toEqual(true);
  });
  it('should render a form', () => {
    expect(wrapper.containsMatchingElement(<form />)).toEqual(true);
  });
  // it('should render the navbar component', () => {
  //   expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  // });
  // it('should render the navbar component', () => {
  //   expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  })
