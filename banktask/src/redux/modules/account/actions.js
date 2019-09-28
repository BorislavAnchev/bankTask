import { TYPES } from './types';
import axios from 'axios';

export const loadAccountsSuccess = (payload) => {
  return {
    type: TYPES.LOAD_ACCOUNTS_SUCCESS,
    payload
  }
}

export const loadAccounts = () => {
  return (dispatch) => 
    axios.get('/accounts')
         .then(response => dispatch(loadAccountsSuccess(response.data.accounts)))
}

export const updateAccount = (reply) => {
  return {
    type: TYPES.UPDATE_ACCOUNT,
    payload: reply
  }
}

export const submitTransaction = (id, amount, transactionType) => {
  return (dispatch) => {
    return axios.put('/accounts', { id, amount, transactionType })
                .then(response => {
                  dispatch(updateAccount(response.data));
                  return response;
                })
    }
}