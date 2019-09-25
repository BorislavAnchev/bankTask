import { TYPES } from './types';
import {
    loadAccountsSuccess,
    loadAccounts,
    loadAccountsFail,
    updateAccount,
    submitTransaction
} from './actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onGet('/accounts').reply(200, {
    accounts: [
      { id: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5678.00' },
      { id: 'BG12BUIN12341234567892', currency: 'USD', balance: '3456.00' },
      { id: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00' }
    ]
  });

mock.onPut('/accounts', { id: 'BG12BUIN12341234567891', balance: '5978.00' }).reply(202, { id: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5978.00'});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loadAccounts() testing', () => {
  it('Should log the correct action into mocked store', () => {
    const store = mockStore({ accounts: [] });
    const expectedActions = [
      {
        type: 'LOAD_ACCOUNTS_SUCCESS',
        payload: [
          {
            id: 'BG12BUIN12341234567891',
            currency: 'BGN',
            balance: '5678.00'
          },
          {
            id: 'BG12BUIN12341234567892',
            currency: 'USD',
            balance: '3456.00'
          },
          {
            id: 'BG12BUIN12341234567893',
            currency: 'EUR',
            balance: '2345.00'
          }
        ]
      }
    ]
    store.dispatch(loadAccounts()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
    })
  });
});

describe('submitTransaction() testing', () => {
  it('Should log the correct action into mocked store', () => {
    const store = mockStore({ accounts: [] });
    const expectedActions = [
      {
        type: 'UPDATE_ACCOUNT',
        payload: {
            id: 'BG12BUIN12341234567891',
            currency: 'BGN',
            balance: '5978.00'
          }
      }
    ]
    const mockId = 'BG12BUIN12341234567891';
    const mockAmount = '300';
    const mockTransactionType = 'Deposit';
    const mockBalance = '5678.00';
    
    store.dispatch(submitTransaction(mockId, mockAmount, mockTransactionType, mockBalance)).then(() => { // EIDT
    expect(store.getActions()).toEqual(expectedActions);
    })


  });
});