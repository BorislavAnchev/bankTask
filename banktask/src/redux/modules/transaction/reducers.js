import { combineReducers } from 'redux';
import { TYPES } from './types';

const transaction = (state = {}, action) => {
  switch(action.type) {
    case TYPES.SUBMIT_TRANSACTION:
    {
      const transaction = action.payload.data;
      return {...state, [transaction.id]: transaction}
    }
    case TYPES.SUBMIT_TRANSACTION_SUCCESS:
      return {
        ...state,
        accounts: {
          ...state.accounts,
          [action.payload.id]: action.payload
        }
      }
    default:
      return state;
  }
}

export default combineReducers({transaction}); // These things go into the other reducer and I am left with only one reducer. Why? No need of two.
                                               // Even more, they can't be mixed together in a good way. I want the transaction reducer to update the
                                               // accounts' reducer part, which is impossible. Or check again combining reducers.
                                               // The action should be update account info