import { TYPES } from './types'

export const submitTransactionSuccess = (payload) => {
  return {
    type: TYPES.SUBMIT_TRANSACTION_SUCCESS,
    payload
  }
}

export const submitTransaction = () => {  // This is the middleware, I think
  return (dispatch) => 
    axios.put('/accounts', { id: 4, name: 'foo' }) // I get the accounts, then I dispatch a new action giving it the accounts
         .then(response => {
          if(response.status >= 200 && response.status < 300) {
            set
            // dispatch(submitTransactionSuccess(response.data.accounts))
          } 
          }) // Response data or respose.data.accounts?
         .catch(error => console.log(error));
}