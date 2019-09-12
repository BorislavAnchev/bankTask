import { TYPES } from './types';
import axios from 'axios';

export const loadAccountsSuccess = (payload) => {
  return {
    type: TYPES.LOAD_ACCOUNTS_SUCCESS,
    payload
  }
}

// export const loadAccounts = () => {
//   return {
//     type: LOAD_ACCOUNTS,
//     payload: {
//       request:{
//         url:'/accounts'
//       }
//     }
//   }
// }

export const loadAccountsFail = (error) => ({
  type: 'ACCOUNTS_REQUEST_FAILED',
  error
})

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
      balance: reply.balance
    }
  }
}

export const submitTransaction = (id, amount, transactionType, balance) => {
  return (dispatch) => {
    let newBalance;
    if(transactionType === 'Deposit') {
      newBalance = (Number(balance) + Number(amount)).toFixed(2).toString();
    }
    else if(transactionType === 'Withdraw') {
      newBalance = (Number(balance) - Number(amount)).toFixed(2).toString();
    }
      return axios.put('/accounts', { id: id, balance: newBalance })
                  .then(response => {
                    dispatch(updateAccount(response.data));
                    return response;
                  })
                  .catch(error => console.log(error));
    }
}