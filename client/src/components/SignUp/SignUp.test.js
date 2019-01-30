import React from 'react';
import { shallow, mount } from 'enzyme';
import SignUp from './SignUp';
import MainButton from '../MainButton'


describe('<SignUp />', () => {
  let wrapper;
  beforeEach(() => {wrapper = shallow(<SignUp />)});
  it('should render SignUp', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should render a form', () => {
    expect(wrapper.find('form').exists()).toBe(true);
  });
  it('should be made up of 5 input fields', () => {
    expect(wrapper.find('input')).toHaveLength(5);
  });
  it('should create a state', () => {
    expect(typeof wrapper.state()).toBe('object');
  });
  it('should render the Main Button', () => {
    expect(wrapper.containsMatchingElement(<MainButton />)).toBe(true);
  });
  it('h2 contains the correct text', () => {
    expect(wrapper.find('h2').text()).toBe('Getting Started with Docco');
  })
  it('matches the snapshot', () => {
    const tree = mount(<SignUp />);
    expect(tree).toMatchSnapshot();
    tree.unmount();
  });

  // it('handles form update by setting the State', () => {
  //   const input = wrapper.find('.first-name');
  //   const form = wrapper.find('.my-form')
  //   form.simulate('change', {currentTarget: {name:'first',value:'Test'}});
  //   expect(wrapper.state.first).toBe('Test');
  // });
});
