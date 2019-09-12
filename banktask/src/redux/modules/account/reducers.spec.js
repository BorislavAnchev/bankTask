import { TYPES } from './types';
import { loadAccountsSuccess, updateAccount } from './actions'
import accountsReducer from './reducers';
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

mock.onGet('/accounts').reply(200, {
  accounts: [
    { id: '_u70nyuzcq', iban: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5678.00' },
    { id: '_wi2ozmsx9', iban: 'BG12BUIN12341234567892', currency: 'USD', balance: '3456.00' },
    { id: '_bousuqei6', iban: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00' }
  ]
});

describe('Accounts reducer', () => {
  it('should return the default state', () => {
    const newState = accountsReducer(undefined, {});
    expect(newState).toEqual({});
  });

  it('should return the new state if a correct type is received', () => {
    const fakeResponse = {
      data: {
        accounts: [
          {
            id: '_u70nyuzcq',
            iban: 'BG12BUIN12341234567891',
            currency: 'BGN',
            balance: '5678.00',
          },
          {
            id: '_wi2ozmsx9',
            iban: 'BG12BUIN12341234567892',
            currency: 'USD',
            balance: '3456.00',
          },
          {
            id: '_bousuqei6',
            iban: 'BG12BUIN12341234567893',
            currency: 'EUR',
            balance: '2345.00',
          }
        ]
      }
    }
    const expectedState = {
      _u70nyuzcq: {
        id: '_u70nyuzcq',
        iban: 'BG12BUIN12341234567891',
        currency: 'BGN',
        balance: '5678.00',
      },
      _wi2ozmsx9: {
        id: '_wi2ozmsx9',
        iban: 'BG12BUIN12341234567892',
        currency: 'USD',
        balance: '3456.00',
      },
      _bousuqei6: {
        id: '_bousuqei6',
        iban: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2345.00',
      }
    }

    const newState = accountsReducer(undefined, {
      type: TYPES.LOAD_ACCOUNTS_SUCCESS,
      payload: fakeResponse.data.accounts
    });
    expect(newState).toEqual(expectedState);
  });

  it('should return the correct new state given the correct type via the action creator', () => {
    const fakeResponse = {
      data: {
        accounts: [
          {
            id: '_u70nyuzcq',
            iban: 'BG12BUIN12341234567891',
            currency: 'BGN',
            balance: '5678.00',
          },
          {
            id: '_wi2ozmsx9',
            iban: 'BG12BUIN12341234567892',
            currency: 'USD',
            balance: '3456.00',
          },
          {
            id: '_bousuqei6',
            iban: 'BG12BUIN12341234567893',
            currency: 'EUR',
            balance: '2345.00',
          }
        ]
      }
    }
    const expectedState = {
      _u70nyuzcq: {
        id: '_u70nyuzcq',
        iban: 'BG12BUIN12341234567891',
        currency: 'BGN',
        balance: '5678.00',
      },
      _wi2ozmsx9: {
        id: '_wi2ozmsx9',
        iban: 'BG12BUIN12341234567892',
        currency: 'USD',
        balance: '3456.00',
      },
      _bousuqei6: {
        id: '_bousuqei6',
        iban: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2345.00',
      }
    }
    const newState = accountsReducer(undefined, loadAccountsSuccess(fakeResponse.data.accounts));
    expect(newState).toEqual(expectedState);
  });
});

describe('case: TYPES.UPDATE_ACCOUNT', () => {
  it('Should update the specified account correctly', () => {
    const fakeInitialState = {
      _bousuqei6: {
        id: '_bousuqei6',
        iban: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2345.00',
      }
    };
    const expectedState = {
      _bousuqei6: {
        id: '_bousuqei6',
        iban: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2645.00',
      }
    }
    const fakeReply = {
      id: '_bousuqei6',
      iban: 'BG12BUIN12341234567893',
      currency: 'EUR',
      balance: '2645.00',
    }
    const newState = accountsReducer(fakeInitialState, updateAccount(fakeReply));
    expect(expectedState).toEqual(newState);
  });
});