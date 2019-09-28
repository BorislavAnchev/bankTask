import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttribute, testStore } from '../../utils';
import Transaction from './Transaction';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = mount(<Provider store={store}><MemoryRouter><Transaction /></MemoryRouter></Provider>); // Mount insdead of shallow with Provider around solves the problem.
  return wrapper;
}

describe('Transaction component ', () => {

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
      expect(moneyInput.props().placeholder).toBe('Format: 500.00');
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