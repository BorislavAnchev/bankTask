import { TYPES } from './types';
import {
    loadAccounts,
    updateAccount,
    deleteAccount
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