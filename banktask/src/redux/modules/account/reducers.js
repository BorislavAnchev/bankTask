import { TYPES } from './types';
import mapKeys from 'lodash/mapKeys';
import omit from 'lodash/omit';

const accounts = (state = {}, action) => {
  switch(action.type) {
    case TYPES.LOAD_ACCOUNTS_SUCCESS:
      return mapKeys(action.payload.accounts, 'id');
    case TYPES.UPDATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case TYPES.DELETE_ACCOUNT_SUCCESS:
      return omit(state, action.payload.id);
    default:
      return state;
  }  
}

export default accounts;