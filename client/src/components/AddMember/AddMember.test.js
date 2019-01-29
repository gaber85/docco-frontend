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
    expect(wrapper.find('[type="checkbox"]')).toHaveLength(3);
  });
  it('default permissions should be set to true', () => {
    expect(wrapper.state().permissions.read).toBeTruthy();
    expect(wrapper.state().permissions.edit).toBeTruthy();
    expect(wrapper.state().permissions.approve).toBeTruthy();
  });
  it('permissions.read checkbox should toggle', () => {
    const state = wrapper.state().permissions.read;
    wrapper
      .find('[name="read"]')
      .at(0)
      .prop('onChange')(
        { target: { name: "read", checked: false, value: false }}
      );
    expect(wrapper.state().permissions.read).toBe(!state);

    const newState = wrapper.state().permissions.read;
    wrapper
      .find('[name="read"]')
      .at(0)
      .prop('onChange')(
        { target: { name: "read", checked: true, value: true }}
      );
    expect(wrapper.state().permissions.read).toBe(!newState);
  });

  it('permissions.edit checkbox should toggle', () => {
    const state = wrapper.state().permissions.edit;
    wrapper
      .find('[name="edit"]')
      .at(0)
      .prop('onChange')(
        { target: { name: "edit", checked: false, value: false }}
      );
    expect(wrapper.state().permissions.edit).toBe(!state);

    const newState = wrapper.state().permissions.edit;
    wrapper
      .find('[name="edit"]')
      .at(0)
      .prop('onChange')(
        { target: { name: "edit", checked: true, value: true }}
      );
    expect(wrapper.state().permissions.edit).toBe(!newState);
  });

  it('permissions.approve checkbox should toggle', () => {
    const state = wrapper.state().permissions.approve;
    wrapper
      .find('[name="approve"]')
      .at(0)
      .prop('onChange')(
        { target: { name: "approve", checked: false, value: false }}
      );
    expect(wrapper.state().permissions.approve).toBe(!state);

    const newState = wrapper.state().permissions.approve;
    wrapper
      .find('[name="approve"]')
      .at(0)
      .prop('onChange')(
        { target: { name: "approve", checked: true, value: true }}
      );
    expect(wrapper.state().permissions.approve).toBe(!newState);
  });
});
