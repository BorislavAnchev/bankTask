import React from 'react';
<<<<<<< 4f6589fee7b86c869775285d7c721b7c564ee972
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import { findByTestAttribute, testStore } from './utils';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = mount(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>); // Mount insdead of shallow with Provider arround solves the problem.
  return wrapper;
}

describe('App component', () => {
    
  let wrapper;
  beforeEach(() => {
    const initialState = {
      accounts: {
        _u70nyuzcq: {
          id: '_u70nyuzcq',
          iban: 'BG12BUIN12341234567891',
          currency: 'BGN',
          balance: '5678.00'
        },
        _wi2ozmsx9: {
          id: '_wi2ozmsx9',
          iban: 'BG12BUIN12341234567892',
          currency: 'USD',
          balance: '3456.00'
        },
        _bousuqei6: { id: '_bousuqei6', iban: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00' }
      }
    };
    wrapper = setUp(initialState);
  });

  it('Should render a transaction section router component', () => {
    const transactionRouter = findByTestAttribute(wrapper, 'Transaction Page Route');
    expect(transactionRouter.length).toBe(1);
  });
=======
import ReactDOM from 'react-dom';
// import { Link } from 'react-router';
import { MemoryRouter, Link } from 'react-router-dom';
import App from './App';
import { findByTestAttribute } from '../utils';

it('renders without crashing', () => {
  

  // it('includes link to Mission scene', () => {                                       
  //   const wrapper = shallow(<MemoryRouter><App /></MemoryRouter>);
  //   expect(wrapper.find(Link).props().to).toBe('/mission');
  //  });
>>>>>>> bank: create account functionality
});
  
