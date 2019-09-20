import { TYPES } from './types';
<<<<<<< 9746253361bfb0d1c6cad622e58bed5bcf349f2c
<<<<<<< 89fc953aab5363a0ba1a38a3d03ea61e86ad1800
=======
import { loadAccounts, loadAccountsSuccess, deleteAccount } from './actions'
>>>>>>> bank: account delete functionality
import accountsReducer from './reducers';
=======
import { loadAccountsSuccess, deleteAccount, createAccount, updateAccount } from './actions'
import accountsReducer from './reducers';
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);
const mockDate = new Date();
const formattedMockDate = `${(('0' + mockDate.getDate()).slice(-2))}.${('0' + (mockDate.getMonth() + 1)).slice(-2)}.${mockDate.getFullYear()}`;

mock.onGet('/accounts').reply(200, {
  accounts: [
    { id: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5678.00', history: [
      {
        date: '05.01.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.02.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.03.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.04.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.05.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.06.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.07.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.08.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.09.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.10.2018',
        debit: '500.00',
        credit: ''
      }
    ] },
    { id: 'BG12BUIN12341234567892', currency: 'USD', balance: '3456.00', history: [
      {
        date: '05.01.2019',
        debit: '500.00',
        credit: ''
      },
      {
        date: '06.01.2019',
        debit: '',
        credit: '500.00'
      },
      {
        date: '05.02.2019',
        debit: '500.00',
        credit: ''
      },
      {
        date: '06.02.2019',
        debit: '',
        credit: '500.00'
      },
      {
        date: '05.03.2019',
        debit: '500.00',
        credit: ''
      },
    ] },
    { id: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00', history: [] }
  ]
});
>>>>>>> bank: create account and history functionality

describe('Accounts reducer', () => {
  it('should return the default state', () => {
    const newState = accountsReducer(undefined, {});
    expect(newState).toEqual({});
  });

<<<<<<< 9746253361bfb0d1c6cad622e58bed5bcf349f2c
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
=======
  it('should return the new state if a correct type is received', () => {
    const fakeResponse = {
      data: {
        accounts: [
          {
            id: 'BG12BUIN12341234567891',
            currency: 'BGN',
            balance: '5678.00',
            history: [
              {
                date: '05.01.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.02.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.03.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.04.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.05.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.06.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.07.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.08.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.09.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.10.2018',
                debit: '500.00',
                credit: ''
              }
            ]
          },
          {
            id: 'BG12BUIN12341234567892',
            currency: 'USD',
            balance: '3456.00',
            history: [
              {
                date: '05.01.2019',
                debit: '500.00',
                credit: ''
              },
              {
                date: '06.01.2019',
                debit: '',
                credit: '500.00'
              },
              {
                date: '05.02.2019',
                debit: '500.00',
                credit: ''
              },
              {
                date: '06.02.2019',
                debit: '',
                credit: '500.00'
              },
              {
                date: '05.03.2019',
                debit: '500.00',
                credit: ''
              },
            ]
          },
          {
            id: 'BG12BUIN12341234567893',
            currency: 'EUR',
            balance: '2345.00',
            history: []
          }
        ]
      }
    }
    const expectedState = {
      BG12BUIN12341234567891: {
        id: 'BG12BUIN12341234567891',
        currency: 'BGN',
        balance: '5678.00',
        history: [
          {
            date: '05.01.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.02.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.03.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.04.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.05.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.06.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.07.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.08.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.09.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.10.2018',
            debit: '500.00',
            credit: ''
          }
        ]
      },
      BG12BUIN12341234567892: {
        id: 'BG12BUIN12341234567892',
        currency: 'USD',
        balance: '3456.00',
        history: [
          {
            date: '05.01.2019',
            debit: '500.00',
            credit: ''
          },
          {
            date: '06.01.2019',
            debit: '',
            credit: '500.00'
          },
          {
            date: '05.02.2019',
            debit: '500.00',
            credit: ''
          },
          {
            date: '06.02.2019',
            debit: '',
            credit: '500.00'
          },
          {
            date: '05.03.2019',
            debit: '500.00',
            credit: ''
          },
        ]
      },
      BG12BUIN12341234567893: {
        id: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2345.00',
        history: []
>>>>>>> bank: create account and history functionality
      }
      const newState = accountsReducer(undefined, {
        type: TYPES.LOAD_ACCOUNTS_SUCCESS,
        payload: fakeResponse.data
      });
      expect(newState).toEqual(expectedState);
    });
  });
<<<<<<< 9746253361bfb0d1c6cad622e58bed5bcf349f2c
 
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
=======

  it('should return the correct new state given the correct type via the action creator', () => {
    const fakeResponse = {
      data: {
        accounts: [
          {
            id: 'BG12BUIN12341234567891',
            currency: 'BGN',
            balance: '5678.00',
            history: [
              {
                date: '05.01.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.02.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.03.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.04.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.05.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.06.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.07.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.08.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.09.2018',
                debit: '500.00',
                credit: ''
              },
              {
                date: '05.10.2018',
                debit: '500.00',
                credit: ''
              }
            ]
          },
          {
            id: 'BG12BUIN12341234567892',
            currency: 'USD',
            balance: '3456.00',
            history: [
              {
                date: '05.01.2019',
                debit: '500.00',
                credit: ''
              },
              {
                date: '06.01.2019',
                debit: '',
                credit: '500.00'
              },
              {
                date: '05.02.2019',
                debit: '500.00',
                credit: ''
              },
              {
                date: '06.02.2019',
                debit: '',
                credit: '500.00'
              },
              {
                date: '05.03.2019',
                debit: '500.00',
                credit: ''
              },
            ]
          },
          {
            id: 'BG12BUIN12341234567893',
            currency: 'EUR',
            balance: '2345.00',
            history: []
          }
        ]
      }
    }
    const expectedState = {
      BG12BUIN12341234567891: {
        id: 'BG12BUIN12341234567891',
        currency: 'BGN',
        balance: '5678.00',
        history: [
          {
            date: '05.01.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.02.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.03.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.04.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.05.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.06.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.07.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.08.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.09.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.10.2018',
            debit: '500.00',
            credit: ''
          }
        ]
      },
      BG12BUIN12341234567892: {
        id: 'BG12BUIN12341234567892',
        currency: 'USD',
        balance: '3456.00',
        history: [
          {
            date: '05.01.2019',
            debit: '500.00',
            credit: ''
          },
          {
            date: '06.01.2019',
            debit: '',
            credit: '500.00'
          },
          {
            date: '05.02.2019',
            debit: '500.00',
            credit: ''
          },
          {
            date: '06.02.2019',
            debit: '',
            credit: '500.00'
          },
          {
            date: '05.03.2019',
            debit: '500.00',
            credit: ''
          },
        ]
      },
      BG12BUIN12341234567893: {
        id: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2345.00',
        history: []
      }
    }
    const newState = accountsReducer(undefined, loadAccountsSuccess(fakeResponse.data.accounts));
    expect(newState).toEqual(expectedState);
>>>>>>> bank: create account and history functionality
  });
<<<<<<< 89fc953aab5363a0ba1a38a3d03ea61e86ad1800
});
=======
});

describe('case: TYPES.DELETE_ACCOUNTS', () => {
  it('Should remove the specified account from the state', () => {
    const fakeInitialState = {
      BG12BUIN12341234567891: {
        id: 'BG12BUIN12341234567891',
        currency: 'BGN',
        balance: '5678.00',
        history: [
          {
            date: '05.01.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.02.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.03.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.04.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.05.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.06.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.07.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.08.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.09.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.10.2018',
            debit: '500.00',
            credit: ''
          }
        ]
      },
      BG12BUIN12341234567892: {
        id: 'BG12BUIN12341234567892',
        currency: 'USD',
        balance: '3456.00',
        history: [
          {
            date: '05.01.2019',
            debit: '500.00',
            credit: ''
          },
          {
            date: '06.01.2019',
            debit: '',
            credit: '500.00'
          },
          {
            date: '05.02.2019',
            debit: '500.00',
            credit: ''
          },
          {
            date: '06.02.2019',
            debit: '',
            credit: '500.00'
          },
          {
            date: '05.03.2019',
            debit: '500.00',
            credit: ''
          },
        ]
      },
      BG12BUIN12341234567893: {
        id: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2345.00',
        history: []
      }
    };
    const expectedState = {
      BG12BUIN12341234567892: {
        id: 'BG12BUIN12341234567892',
        currency: 'USD',
        balance: '3456.00',
        history: [
          {
            date: '05.01.2019',
            debit: '500.00',
            credit: ''
          },
          {
            date: '06.01.2019',
            debit: '',
            credit: '500.00'
          },
          {
            date: '05.02.2019',
            debit: '500.00',
            credit: ''
          },
          {
            date: '06.02.2019',
            debit: '',
            credit: '500.00'
          },
          {
            date: '05.03.2019',
            debit: '500.00',
            credit: ''
          },
        ]
      },
      BG12BUIN12341234567893: {
        id: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2345.00',
        history: []
      }
    };
    const newState = accountsReducer(fakeInitialState, deleteAccount('BG12BUIN12341234567891'));
    expect(newState).toEqual(expectedState);
  });
});
<<<<<<< 9746253361bfb0d1c6cad622e58bed5bcf349f2c
// Create account and delete account to be implemented.
>>>>>>> bank: account delete functionality
=======

describe('case: TYPES.CREATE_ACCOUNT', () => {
  it('Should add hte newly created account to the state', () => {
    const fakeInitialState = {
      BG12BUIN12341234567891: {
        id: 'BG12BUIN12341234567891',
        currency: 'BGN',
        balance: '5678.00',
        history: [
          {
            date: '05.01.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.02.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.03.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.04.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.05.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.06.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.07.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.08.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.09.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.10.2018',
            debit: '500.00',
            credit: ''
          }
        ]
      },
      BG12BUIN12341234567892: {
        id: 'BG12BUIN12341234567892',
        currency: 'USD',
        balance: '3456.00',
        history: [
          {
            date: '05.01.2019',
            debit: '500.00',
            credit: ''
          },
          {
            date: '06.01.2019',
            debit: '',
            credit: '500.00'
          },
          {
            date: '05.02.2019',
            debit: '500.00',
            credit: ''
          },
          {
            date: '06.02.2019',
            debit: '',
            credit: '500.00'
          },
          {
            date: '05.03.2019',
            debit: '500.00',
            credit: ''
          },
        ]
      },
      BG12BUIN12341234567893: {
        id: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2345.00',
        history: []
      }
    };
    const expectedState = {
      BG12BUIN12341234567891: {
        id: 'BG12BUIN12341234567891',
        currency: 'BGN',
        balance: '5678.00',
        history: [
          {
            date: '05.01.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.02.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.03.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.04.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.05.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.06.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.07.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.08.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.09.2018',
            debit: '500.00',
            credit: ''
          },
          {
            date: '05.10.2018',
            debit: '500.00',
            credit: ''
          }
        ]
      },
      BG12BUIN12341234567892: {
        id: 'BG12BUIN12341234567892',
        currency: 'USD',
        balance: '3456.00',
        history: [
          {
            date: '05.01.2019',
            debit: '500.00',
            credit: ''
          },
          {
            date: '06.01.2019',
            debit: '',
            credit: '500.00'
          },
          {
            date: '05.02.2019',
            debit: '500.00',
            credit: ''
          },
          {
            date: '06.02.2019',
            debit: '',
            credit: '500.00'
          },
          {
            date: '05.03.2019',
            debit: '500.00',
            credit: ''
          },
        ]
      },
      BG12BUIN12341234567893: {
        id: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2345.00',
        history: []
      },
      TestID: {
        id: 'TestID',
        currency: 'USD',
        balance: '0.00',
        history: []
      }
    };
    const fakeReply = {
      id: 'TestID',
      currency: 'USD',
      balance: '0.00',
      history: []
    };
    const newState = accountsReducer(fakeInitialState, createAccount(fakeReply));
    expect(newState).toEqual(expectedState);
  });
});

describe('case: TYPES.UPDATE_ACCOUNT', () => {
  it('Should update the specified account correctly', () => {
    const fakeInitialState = {
      BG12BUIN12341234567893: {
        id: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2345.00',
        history: []
      }
    };
    const expectedState = {
      BG12BUIN12341234567893: {
        id: 'BG12BUIN12341234567893',
        currency: 'EUR',
        balance: '2645.00',
        history: [
          {
            date: formattedMockDate,
            debit: '300.00',
            credit: ''
          }
        ]
      }
    }
    const fakeReply = {
      id: 'BG12BUIN12341234567893',
      currency: 'EUR',
      balance: '2645.00',
      history: [
        {
          date: formattedMockDate,
          debit: '300.00',
          credit: ''
        }
      ]
    }
    const newState = accountsReducer(fakeInitialState, updateAccount(fakeReply));
    expect(newState).toEqual(expectedState);
  });
});
>>>>>>> bank: create account and history functionality
