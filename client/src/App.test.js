import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import SearchBar from './components/SearchBar';



// // it('renders without crashing', () => {
// //   const div = document.createElement('div');
// //   ReactDOM.render(<App />, div);
// //   ReactDOM.unmountComponentAtNode(div);
// // });


describe('<App />', () => {
  let wrapper ;
  beforeEach(function () { wrapper = shallow(<App />)});
  it('should render App', () => {
    expect(wrapper)
  });
  it('should render the navbar component', () => {
    expect(wrapper.containsMatchingElement(<SearchBar />)).toEqual(true);
  });
  // it('should render the navbar component', () => {
  //   expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  // });
  // it('should render the navbar component', () => {
  //   expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  })
