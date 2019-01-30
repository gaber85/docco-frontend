import React from 'react';
import { shallow, mount } from 'enzyme';
import PlusButton from './PlusButton';



describe('<PlusButton />', () => {
  let wrapper;
  const click = jest.fn();
  wrapper = shallow(<PlusButton size='a' />);
    it('should render a div', () => {
      expect(wrapper.find('div').length).toEqual(1);
    });
    it('should make use of font awesome', () => {
      expect(wrapper.find('.fa-plus').length).toEqual(1);
    });
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('should have a click prop containing a function', () => {
      expect(wrapper.prop('size')).toEqual('a');
    });

});