import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttribute, testStore, checkProps } from '../../../utils';
import Transaction from './Transaction';
// import configureStore from 'redux-mock-store';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = mount(<Provider store={store}><Transaction /></Provider>); // Mount insdead of shallow with Provider arround solves the problem.
  return wrapper;
}

describe('Transaction component ', () => {
// const initialState = {}; 

//const mockStore = configureStore();
    let wrapper;
    beforeEach(() => {
      //store = mockStore(initialState);
      const initialState = {
        accounts: {
          BG12BUIN12341234567891: { id: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5678.00' },
          BG12BUIN12341234567892: { id: 'BG12BUIN12341234567892', currency: 'USD', balance: '3456.00' },
          BG12BUIN12341234567893: { id: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00' }
        }
      };
      wrapper = setUp(initialState);
    });
    
    it('Should render a transaction section component', () => {
      const transactionSection = findByTestAttribute(wrapper, 'transactionComponent');
      expect(transactionSection.length).toBe(1);
    });

    it('Should containt a button component', () => {
      const button = findByTestAttribute(wrapper, 'buttonComponentParent');
      expect(button.length).toBe(1);
    });

    it('Should contain an account selector dropdown component', () => {
      const accountDropdown = findByTestAttribute(wrapper, 'Account Selector');
      expect(accountDropdown.length).toBe(1);
    });
    it('Should contain an transaction type dropdown component', () => {
      const transactionDropdown = findByTestAttribute(wrapper, 'Transaction Selector');
      expect(transactionDropdown.length).toBe(1);
    });

    it('Should contain a money amount input field component', () => {
      const moneyInput = findByTestAttribute(wrapper, 'Money Input field');
      expect(moneyInput.length).toBe(1);
    });

    it('Should contain a current balance paragraph', () => {
      const currentBalance = findByTestAttribute(wrapper, 'currentBalance');
      expect(currentBalance.length).toBe(1);
    });

    it('Should contain a submit warning paragraph', () => {
      const submitWarning = findByTestAttribute(wrapper, 'submitWarning');
      expect(submitWarning.length).toBe(1);
    });
  });