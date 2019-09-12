import { TYPES } from './types';
<<<<<<< 89fc953aab5363a0ba1a38a3d03ea61e86ad1800
=======
import { loadAccounts, loadAccountsSuccess, deleteAccount } from './actions'
>>>>>>> bank: account delete functionality
import accountsReducer from './reducers';

describe('Accounts reducer', () => {
  it('should return the default state', () => {
    const newState = accountsReducer(undefined, {});
    expect(newState).toEqual({});
  });

  describe('case: TYPES.LOAD_ACCOUNTS_SUCCESS', () => {
    it('Should populate the state with the accounts received from the server response', () => {
      const fakeResponse = {
        data: {
          accounts: [
            {
              id: '_u70nyuzcq',
              iban: 'BG12BUIN12341234567891',
              currency: 'BGN',
              balance: '5678.00'
            },
            {
              id: '_wi2ozmsx9',
              iban: 'BG12BUIN12341234567892',
              currency: 'USD',
              balance: '3456.00'
            },
            {
              id: '_bousuqei6',
              iban: 'BG12BUIN12341234567893',
              currency: 'EUR',
              balance: '2345.00'
            }
          ]
        }
      }
      const expectedState = {
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
        _bousuqei6: {
          id: '_bousuqei6',
          iban: 'BG12BUIN12341234567893',
          currency: 'EUR',
          balance: '2345.00'          
        }
      }
      const newState = accountsReducer(undefined, {
        type: TYPES.LOAD_ACCOUNTS_SUCCESS,
        payload: fakeResponse.data
      });
      expect(newState).toEqual(expectedState);
    });
  });
 
  describe('case: TYPES.DELETE_ACCOUNTS_SUCCESS', () => {
    it('Should remove the specified account from the state', () => {
      const fakeInitialState = {
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
        _bousuqei6: {
          id: '_bousuqei6',
          iban: 'BG12BUIN12341234567893',
          currency: 'EUR',
          balance: '2345.00'
        }
      };
      const expectedState = {
        _wi2ozmsx9: {
          id: '_wi2ozmsx9',
          iban: 'BG12BUIN12341234567892',
          currency: 'USD',
          balance: '3456.00'
        },
        _bousuqei6: {
          id: '_bousuqei6',
          iban: 'BG12BUIN12341234567893',
          currency: 'EUR',
          balance: '2345.00'
        }
      };
      const mockAction = {
        type: TYPES.DELETE_ACCOUNT_SUCCESS,
        payload: {
          id: '_u70nyuzcq'
        },
        meta: {
          alert: 'Account deleted successfully!'
        }
      }
      const newState = accountsReducer(fakeInitialState, mockAction);
      expect(expectedState).toEqual(newState);
    });
  });
  
  describe('case: TYPES.UPDATE_ACCOUNT', () => {
    it('Should update the specified account correctly', () => {
      const fakeInitialState = {
        _bousuqei6: {
          id: '_bousuqei6',
          iban: 'BG12BUIN12341234567893',
          currency: 'EUR',
          balance: '2345.00'
        }
      };
      const expectedState = {
        _bousuqei6: {
          id: '_bousuqei6',
          iban: 'BG12BUIN12341234567893',
          currency: 'EUR',
          balance: '2645.00'
        }
      }
      const mockAction = {
        type: TYPES.UPDATE_ACCOUNT_SUCCESS,
        payload: {
          id: '_bousuqei6',            
          iban: 'BG12BUIN12341234567893',
          currency: 'EUR',
          balance: '2645.00'
        }
      }
      const newState = accountsReducer(fakeInitialState, mockAction);
      expect(expectedState).toEqual(newState);
    });
  });
<<<<<<< 89fc953aab5363a0ba1a38a3d03ea61e86ad1800
});
=======
});

describe('case: TYPE.DELETE_ACCOUNTS', () => {
  it('Should remove the specified account from the state', () => {
    const fakeInitialState = {
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
    };
    const expectedState = {
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
    };
    const newState = accountsReducer(fakeInitialState, deleteAccount('BG12BUIN12341234567891'));
    //console.log('case: TYPES.DELETE_ACCOUNT:');
   // console.log(newState);
    expect(newState).toEqual(expectedState);
  });
});
// Create account and delete account to be implemented.
>>>>>>> bank: account delete functionality
