import { TYPES } from './types';
import { loadAccountsSuccess } from './actions'
import accountsReducer from './reducers';

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
    }
    const expectedState = {
      BG12BUIN12341234567891: {
        id: 'BG12BUIN12341234567891',
        currency: 'BGN',
        balance: '5678.00'
      },
      BG12BUIN12341234567892: {
        id: 'BG12BUIN12341234567892',
        currency: 'USD',
        balance: '3456.00'
      },
      BG12BUIN12341234567893: {
        id: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2345.00'
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
    }
    const expectedState = {
      BG12BUIN12341234567891: {
        id: 'BG12BUIN12341234567891',
        currency: 'BGN',
        balance: '5678.00'
      },
      BG12BUIN12341234567892: {
        id: 'BG12BUIN12341234567892',
        currency: 'USD',
        balance: '3456.00'
      },
      BG12BUIN12341234567893: {
        id: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2345.00'
      }
    }
    const newState = accountsReducer(undefined, loadAccountsSuccess(fakeResponse.data.accounts));
    expect(newState).toEqual(expectedState);
  });
});

// Create account and delete account to be implemented.