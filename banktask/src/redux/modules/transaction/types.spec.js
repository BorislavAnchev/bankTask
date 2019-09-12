import { TYPES } from './types';
import { submitTransaction } from './actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// mock.onPut('/accounts').reply(202, {
//     accounts: [
//       { id: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5678.00' },
//       { id: 'BG12BUIN12341234567892', currency: 'USD', balance: '3456.00' },
//       { id: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00' }
//     ]
//   });

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

describe('Action creators', () => {
  it('loadAccountsSuccess should return an object with correct type and payload', () => {
    // axios.get('/accounts')
    //      .then(function(response) {
    //         let expectedAction = {
    //         type: TYPES.LOAD_ACCOUNTS_SUCCESS,
    //         payload: response.data.accounts
    //         } 
    //         expect(loadAccountsSuccess(response.data.accounts)).toEqual(expectedAction);
    //      });
  });   
});

describe('loadAccounts() testing', () => {
  it('Should log the correct action into mocked store', () => {
    // const store = mockStore({ accounts: [] });
    // const expectedActions = [
    //   {
    //     type: 'LOAD_ACCOUNTS_SUCCESS',
    //     payload: [
    //       {
    //         id: 'BG12BUIN12341234567891',
    //         currency: 'BGN',
    //         balance: '5678.00'
    //       },
    //       {
    //         id: 'BG12BUIN12341234567892',
    //         currency: 'USD',
    //         balance: '3456.00'
    //       },
    //       {
    //         id: 'BG12BUIN12341234567893',
    //         currency: 'EUR',
    //         balance: '2345.00'
    //       }
    //     ]
    //   }
    // ]
    // store.dispatch(loadAccounts()).then(() => {
    // expect(store.getActions()).toEqual(expectedActions);
    // })
  });
});