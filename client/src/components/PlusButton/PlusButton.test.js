import React from 'react';
import { shallow } from 'enzyme';
import PlusButton from './PlusButton';

describe('<PlusButton />', () => {
  let wrapper;
  const click = jest.fn();
  beforeEach(() => {wrapper = shallow(<PlusButton click={click} />)});
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
  it('should have a click prop containing a function', () => {
    expect(typeof wrapper.find('.plus-button').prop('onClick')).toBe('function');
  });

  //  couldn't get this test running but need to leave it in for further work;



});