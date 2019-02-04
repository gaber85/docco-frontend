import React from 'react';
import { shallow, mount } from 'enzyme';
import {ContractList} from './ContractList';




describe.only('<ContractList />', () => {
  let wrapper;
  const mock = [{title:'test'},{title:'test'},{title:'test'},{title:'test'}];
  beforeEach(() => { wrapper = shallow(<ContractList contractList={mock}/>) });
  it('should render ContractList', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('matches the snapshot', () => {
    const tree = mount(<ContractList contractList={mock} />);
    expect(tree).toMatchSnapshot();
    tree.unmount();
  });
  it('should render every contract', () => {
    expect(wrapper.find('.my-contract')).toHaveLength(mock.length);
  });
  it('should render the title', () => {
    expect(wrapper.find('span').at(0).text()).toEqual(mock[0].title);
  });
});