import React from 'react';
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
});
  
