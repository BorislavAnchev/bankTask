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
mock.onPut('/accounts', { id: 'BG12BUIN12341234567891', balance: '5378.00' }).reply(202, { id: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5378.00'});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action creators', () => {
  it('loadAccountsSuccess should return an object with correct type and payload', () => {
    axios.get('/accounts')
         .then(function(response) {
            let expectedAction = {
            type: TYPES.LOAD_ACCOUNTS_SUCCESS,
            payload: response.data.accounts
            } 
            expect(loadAccountsSuccess(response.data.accounts)).toEqual(expectedAction);
         });
  });
  
  it('updateAccount should return an object with correct type and payload', () => { 
    const mockId = 'BG12BUIN12341234567891';
    const mockNewBalance = '5978.00';
    const expectedAction = {
      type: TYPES.UPDATE_ACCOUNT,
      payload: {
        id: mockId,
        currency: 'BGN',
        balance: mockNewBalance
      }
    }
    axios.put('/accounts', { id: mockId, balance: mockNewBalance})
         .then((response) => {
           //console.log(response);
           //console.log(updateAccount(response.data));
           expect(response.data.id).toEqual(mockId);
           expect(response.data.balance).toEqual(mockNewBalance);
           expect(updateAccount(response.data)).toEqual(expectedAction); // Works all right.
         })
  });
});

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
    
    store.dispatch(submitTransaction(mockId, mockAmount, mockTransactionType, mockBalance)).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
    })
  });

  it('Should log the correct action into the mocked store given the transaction type of "Withdraw"', () => {
    const store = mockStore({ accounts: [] });
    const expectedActions = [
      {
        type: 'UPDATE_ACCOUNT',
        payload: {
            id: 'BG12BUIN12341234567891',
            currency: 'BGN',
            balance: '5378.00'
          }
      }
    ]
    const mockId = 'BG12BUIN12341234567891';
    const mockAmount = '300';
    const mockTransactionType = 'Withdraw';
    const mockBalance = '5678.00';
    
    store.dispatch(submitTransaction(mockId, mockAmount, mockTransactionType, mockBalance)).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
    })
  });
});