import React from 'react';
import { shallow } from 'enzyme';
import PlusButton from './PlusButton';

describe('<PlusButton />', () => {
  let wrapper;
  const mockClick = jest.fn();
  beforeEach(() => {wrapper = shallow(<PlusButton click={mockClick} />)});
  it('should render a div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('should default its size to 8 if none it\'s passed', () => {
    expect(wrapper.find('div').prop('style').width).toBe('8vw');
  })
  it('should make use of font awesome', () => {
    expect(wrapper.find('.fa-plus')).toHaveLength(1);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have a click prop containing a function that get\'s called on click', () => {
    expect(typeof wrapper.find('.plus-button').prop('onClick')).toBe('function');
    wrapper.find('.plus-button').simulate('click');
    expect(mockClick.mock.calls).toHaveLength(1);

  });

  //  couldn't get this test running but need to leave it in for further work;



});