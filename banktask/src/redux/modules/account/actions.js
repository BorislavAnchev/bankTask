import { TYPES } from './types';

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
    }
  }
}

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
      balance: reply.balance
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