import React from 'react';
import { shallow, mount } from 'enzyme';
import ContractList from './ContractList';




describe('<ContractList />', () => {
  let wrapper;
  const mock = [{title:'test'},{title:'test'}];
  beforeEach(() => { wrapper = shallow(<ContractList contracts={mock}/>) });
  it('should render ContractList', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('matches the snapshot', () => {
    const tree = mount(<ContractList contracts={mock} />);
    expect(tree).toMatchSnapshot();
    tree.unmount();
  });
  it('should render 2 contracts', () => {
    expect(wrapper.find('.my-contract')).toHaveLength(2);
  });
  it('should render the title', () => {
    expect(wrapper.find('span').at(0).text()).toEqual('test');
  });
});