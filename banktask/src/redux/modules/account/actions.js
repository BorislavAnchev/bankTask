import { TYPES } from './types';
<<<<<<< 9746253361bfb0d1c6cad622e58bed5bcf349f2c
=======
import axios from 'axios';
>>>>>>> bank: create account and history functionality

export const loadAccounts = () => {
  return {
    type: TYPES.LOAD_ACCOUNTS,
    payload: {
      request: {
        method: 'get',
        url: '/accounts',
      }
    }
  }
}

<<<<<<< 9746253361bfb0d1c6cad622e58bed5bcf349f2c
export const updateAccount = (id, amount, transactionType) => {
  return {
    type: TYPES.UPDATE_ACCOUNT,
    payload: {
      request: {
        method: 'put',
        url: '/accounts',
        data: {
          id,
          amount,
          transactionType
        }
      }
=======
export const loadAccounts = () => {
  return (dispatch) => 
    axios.get('/accounts')
         .then(response => dispatch(loadAccountsSuccess(response.data.accounts)))
         .catch(error => console.log(error));
}

export const updateAccount = (reply) => {
  return {
    type: TYPES.UPDATE_ACCOUNT,
    payload: {
      id: reply.id,
      currency: reply.currency,
      balance: reply.balance,
      history: reply.history
>>>>>>> bank: create account and history functionality
    }
  }
}

<<<<<<< 9746253361bfb0d1c6cad622e58bed5bcf349f2c
=======
export const submitTransaction = (id, amount, transactionType, balance, history) => {
  return (dispatch) => {
    let newBalance;
    if(transactionType === 'Deposit') {
      newBalance = (Number(balance) + Number(amount)).toFixed(2).toString();
    }
    else if(transactionType === 'Withdraw') {
      newBalance = (Number(balance) - Number(amount)).toFixed(2).toString();
    }
    const date = new Date();
    const formattedDate = `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`;
    let newEntry = {
      date: formattedDate,
      debit: '',
      credit: ''
    }
    if(transactionType === 'Deposit') {
      newEntry.debit = Number(amount).toFixed(2).toString();
    }
    else if(transactionType === 'Withdraw') {
      newEntry.credit = Number(amount).toFixed(2).toString();
    }
    let newHistory = history;
    if(newHistory.length === 10) {
      newHistory = newHistory.slice(1, newHistory.length);
    }
    newHistory = [...newHistory, newEntry];
    return axios.put('/accounts', { id: id, balance: newBalance, history: newHistory })
                .then(response => {
                  dispatch(updateAccount(response.data));
                  return response;
                })
                .catch(error => console.log(error));
    }
}

>>>>>>> bank: create account and history functionality
export const deleteAccount = (id) => {
  return {
    type: TYPES.DELETE_ACCOUNT,
<<<<<<< 4f6589fee7b86c869775285d7c721b7c564ee972
    payload: {
      request: {
        method: 'delete',
        url: '/accounts',
        params: {
          id
=======
    payload: id
  }
}

export const handleDelete = (id) => {
  return (dispatch) => {
    return axios.delete('/accounts', { params: { id: id }})
      .then((response) => {
        if(response.status === 200) {
          dispatch(deleteAccount(id));
          alert('Account deleted successfully');
        }
      })
      .catch(error => console.log(error));
  }
}

export const createAccount = (reply) => {
  return {
    type: TYPES.CREATE_ACCOUNT,
    payload: {
      id: reply.id,
      currency: reply.currency,
      balance: reply.balance,
      history: []
    }
  }
}

export const createAccountRequest = (id, currency) => {
  return (dispatch) => {
    return axios.post('/accounts', { id: id, currency: currency })
      .then((response) => {
        if(response.status === 200) {
          alert('Account created successfully!');
          dispatch(createAccount(response.data));
>>>>>>> bank: create account functionality
        }
      }
    },
    meta: {
      alert: 'Account deleted successfully!'
    }
  }
}