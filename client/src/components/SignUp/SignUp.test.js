<<<<<<< Updated upstream
// // import React from 'react';
// // // import ReactDOM from 'react-dom';
// // import SignUp from './SignUp';
// // import {shallow} from 'enzyme';


//   it('should render SignUp', () => {
//     const wrapper = shallow(<SignUp />)
//   })

// describe('<SignUp />', () => {
//   let wrapper ;
//   beforeEach(function (){ wrapper = shallow(<SignUp />)});
//   it('should render SignUp', () => {
//     expect(wrapper)
//   });
//   it('should render a form', () => {
//     expect(wrapper.containsMatchingElement(<form />)).toEqual(true);
//   });
//   // it('should render the navbar component', () => {
//   //   expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
//   // });
//   // it('should render the navbar component', () => {
//   //   expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
//   })
=======
import React from 'react';
// import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import SignUp from './SignUp';


describe('<SignUp />', () => {
  let wrapper ;
  beforeEach(function (){ wrapper = shallow(<SignUp />)});
  it('should render SignUp', () => {
    expect(wrapper)
  });
  it('should render a form', () => {
    expect(wrapper.containsMatchingElement(<form />)).toEqual(true);
  });
  // it('should render the navbar component', () => {
  //   expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  // });
  // it('should render the navbar component', () => {
  //   expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  })
>>>>>>> Stashed changes
