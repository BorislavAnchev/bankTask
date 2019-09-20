import { TYPES } from './types';
import {
    loadAccounts,
    updateAccount,
<<<<<<< 4f6589fee7b86c869775285d7c721b7c564ee972
    deleteAccount
=======
    submitTransaction,
    deleteAccount,
    createAccount
>>>>>>> bank: create account functionality
} from './actions';

<<<<<<< 9746253361bfb0d1c6cad622e58bed5bcf349f2c
describe('loadAccounts', () => {
  it('Should return an object with correct type and payload', () => { 
=======
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

mock.onPut('/accounts', {
  id: 'BG12BUIN12341234567891',
  balance: '5978.00',
  history: [
    {
      date: formattedMockDate,
      debit: '300.00',
      credit: ''
    }
  ]})
  .reply(202, {
    id: 'BG12BUIN12341234567891',
    currency: 'BGN',
    balance: '5978.00',
    history: [
      {
        date: formattedMockDate,
        debit: '300.00',
        credit: ''
      }
    ]
  });
mock.onPut('/accounts', {
  id: 'BG12BUIN12341234567891',
  balance: '5378.00',
  history: [
    {
      date: formattedMockDate,
      debit: '',
      credit: '300.00'
    }
  ]})
  .reply(202, {
    id: 'BG12BUIN12341234567891',
    currency: 'BGN',
    balance: '5378.00',
    history: [
      {
        date: formattedMockDate,
        debit: '',
        credit: '300.00'
      }
    ]
  });

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
            expect(loadAccountsSuccess(response.data.accounts)).toEqual(expectedAction); // Seems fixed
         });
  });
  
  it('updateAccount should return an object with correct type and payload', () => { 
    const mockId = 'BG12BUIN12341234567891';
    const mockNewBalance = '5978.00';
>>>>>>> bank: create account and history functionality
    const expectedAction = {
      type: TYPES.LOAD_ACCOUNTS,
      payload: {
        request: {
          method: 'get',
          url: '/accounts',
        }
      }
    }
    expect(loadAccounts()).toEqual(expectedAction);
  });
});

<<<<<<< 9746253361bfb0d1c6cad622e58bed5bcf349f2c
describe('updateAccount', () => {
  it('updateAccount should return an object with correct type and payload', () => { 
    const mockId = '_u70nyuzcq';
    const mockAmount = '300';
    const mockTransactionType = 'Deposit';
    const expectedAction = {
      type: TYPES.UPDATE_ACCOUNT,
      payload: {
        request: {
          method: 'put',
          url: '/accounts',
          data: {
           id: mockId,
           amount: mockAmount,
           transactionType: mockTransactionType
=======
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
>>>>>>> bank: create account and history functionality
          }
        }
      }
    }
    expect(updateAccount(mockId, mockAmount, mockTransactionType)).toEqual(expectedAction);
  });
});

<<<<<<< 9746253361bfb0d1c6cad622e58bed5bcf349f2c
describe('deleteAccount', () => {
  it('should return the correct action', () => {
    const expectedAction = {
      type: TYPES.DELETE_ACCOUNT,
      payload: {
        request: {
          method: 'delete',
          url: '/accounts',
          params: {
            id: 'TestID'
=======
describe('submitTransaction() testing', () => {
  it('Should log the correct action into mocked store', () => {
    const store = mockStore({ accounts: [] });
    const expectedActions = [
      {
        type: 'UPDATE_ACCOUNT',
        payload: {
            id: 'BG12BUIN12341234567891',
            currency: 'BGN',
            balance: '5978.00',
            history: [
              {
                date: formattedMockDate,
                debit: '300.00',
                credit: ''
              }
            ]
          }
      }
    ]
    const mockId = 'BG12BUIN12341234567891';
    const mockAmount = '300';
    const mockTransactionType = 'Deposit';
    const mockBalance = '5678.00';
    const mockHistory = [];
    
    store.dispatch(submitTransaction(mockId, mockAmount, mockTransactionType, mockBalance, mockHistory)).then(() => {
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
            balance: '5378.00',
            history: [
              {
                date: formattedMockDate,
                debit: '',
                credit: '300.00'
              }
            ]
>>>>>>> bank: create account and history functionality
          }
        }
      },
      meta: {
        alert: 'Account deleted successfully!'
      }
<<<<<<< 9746253361bfb0d1c6cad622e58bed5bcf349f2c
    }
    expect(deleteAccount('TestID')).toEqual(expectedAction);
=======
    ]
    const mockId = 'BG12BUIN12341234567891';
    const mockAmount = '300';
    const mockTransactionType = 'Withdraw';
    const mockBalance = '5678.00';
    const mockHistory = [];
    
    store.dispatch(submitTransaction(mockId, mockAmount, mockTransactionType, mockBalance, mockHistory)).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
    })
>>>>>>> bank: create account and history functionality
  });
});

describe('deleteAccount', () => {
  it('should return the correct action', () => {
    const expectedAction = {
      type: TYPES.DELETE_ACCOUNT,
      payload: 'TestID'
    }
    expect(deleteAccount('TestID')).toEqual(expectedAction);
  });
});

describe('createAccount', () => {
  it('should return the correct action', () => {
    const fakeReply = {
      id: 'Test ID',
      currency: 'Test Currency',
      balance: '0.00',
      history: []
    };
    
    const expectedAction = {
      type: TYPES.CREATE_ACCOUNT,
      payload: {
        id: 'Test ID',
        currency: 'Test Currency',
        balance: '0.00',
        history: []
      }
    }
    expect(createAccount(fakeReply)).toEqual(expectedAction);
  });
});