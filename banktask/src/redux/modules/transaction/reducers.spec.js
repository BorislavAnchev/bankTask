import { TYPES } from './types';
import { submitTransaction, submitTransactionSuccess} from './actions'
import transactionReducer from './reducers';
import accountsReducer from '../account/reducers';
import { combineReducers } from 'redux';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

mock.onPut('/accounts', {
    id: 'BG12BUIN12341234567891',
    transactionType: 'Deposit',
    amount: '300' }).reply(204, {
                                id: 'BG12BUIN12341234567891',
                                currency: 'BGN',
                                balance: '5978.00'
                                });


const fakeRootReducer = combineReducers(accountsReducer, transactionReducer);                               
describe('Transaction reducer', () => {
  it('should return the default state', () => {
    // const newState = fakeRootReducer(undefined, submitTransactionSuccess({id: 'BG12BUIN12341234567891',
    // currency: 'BGN',
    // balance: '5978.00'}));
    // expect(newState).toEqual({
    //   accounts: {}
    // });
    // console.log(newState);
  });
});