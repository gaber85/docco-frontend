import React from 'react';
import { shallow } from 'enzyme';
import AddMember from './AddMember';

describe('<AddMember />', () => {
  const wrapper = shallow(<AddMember />);
  it('should render AddMember', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('renders one <input type="email"/> ', () => {
    expect(wrapper.find('[type="email"]')).toHaveLength(1);
  });
  it('renders three <input type="checkbox"/>', () => {
    expect(wrapper.find('Checkbox')).toHaveLength(3);
  });
  it('should be set default permissions to true', () => {
    expect(wrapper.state().permissions.read).toBeTruthy();
    expect(wrapper.state().permissions.edit).toBeTruthy();
    expect(wrapper.state().permissions.approve).toBeTruthy();
  });
  it('should toggle permissions.read checkbox', () => {
    const state = wrapper.state().permissions.read;
    wrapper.instance().handleCheckboxChange({ target: { name: "read", checked: false, value: false }});
    expect(wrapper.state().permissions.read).toBe(!state);

    const newState = wrapper.state().permissions.read;
    wrapper.instance().handleCheckboxChange({ target: { name: "read", checked: false, value: false }});
    expect(wrapper.state().permissions.read).toBe(!newState);
  });

  it('should toggle permissions.edit checkbox', () => {
    const state = wrapper.state().permissions.edit;
    wrapper.instance().handleCheckboxChange({ target: { name: "edit", checked: false, value: false }});
    expect(wrapper.state().permissions.edit).toBe(!state);

    const newState = wrapper.state().permissions.edit;
    wrapper.instance().handleCheckboxChange({ target: { name: "edit", checked: false, value: false }});
    expect(wrapper.state().permissions.edit).toBe(!newState);
  });

  it('should toggle permissions.approve checkbox', () => {
    const state = wrapper.state().permissions.approve;
    wrapper.instance().handleCheckboxChange({ target: { name: "approve", checked: false, value: false }});
    expect(wrapper.state().permissions.approve).toBe(!state);

    const newState = wrapper.state().permissions.approve;
    wrapper.instance().handleCheckboxChange({ target: { name: "approve", checked: false, value: false }});
    expect(wrapper.state().permissions.approve).toBe(!newState);
  });
});
