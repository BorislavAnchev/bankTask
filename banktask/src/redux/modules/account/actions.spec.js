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

describe('loadAccounts', () => {
  it('Should return an object with correct type and payload', () => { 
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
          }
        }
      }
    }
    expect(updateAccount(mockId, mockAmount, mockTransactionType)).toEqual(expectedAction);
  });
});

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
          }
        }
      },
      meta: {
        alert: 'Account deleted successfully!'
      }
    }
    expect(deleteAccount('TestID')).toEqual(expectedAction);
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
      balance: '0.00'
    };
    
    const expectedAction = {
      type: TYPES.CREATE_ACCOUNT,
      payload: {
        id: 'Test ID',
        currency: 'Test Currency',
        balance: '0.00'
      }
    }
    expect(createAccount(fakeReply)).toEqual(expectedAction);
  });
});