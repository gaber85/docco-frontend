import React from 'react';
import { shallow } from 'enzyme';
import AddMember from './AddMember';

describe('<AddMember', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<AddMember />));
  it('should render AddMember', () => {
    expect(wrapper.exists()).toBe(true);
  });

})



