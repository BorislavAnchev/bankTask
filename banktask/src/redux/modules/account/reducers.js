import { TYPES } from './types';
<<<<<<< 89fc953aab5363a0ba1a38a3d03ea61e86ad1800
import mapKeys from 'lodash/mapKeys';
import omit from 'lodash/omit';
=======
import { combineReducers } from 'redux';
import { mapKeys, omit } from 'lodash';
>>>>>>> bank: account delete functionality

const accounts = (state = {}, action) => {
  switch(action.type) {
    case TYPES.LOAD_ACCOUNTS_SUCCESS:
      return mapKeys(action.payload.accounts, 'id');
    case TYPES.UPDATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
<<<<<<< 89fc953aab5363a0ba1a38a3d03ea61e86ad1800
    case TYPES.DELETE_ACCOUNT_SUCCESS:
      return omit(state, action.payload.id);
=======
    case TYPES.DELETE_ACCOUNT:
      return omit(state, action.payload);
<<<<<<< 4f6589fee7b86c869775285d7c721b7c564ee972
>>>>>>> bank: account delete functionality
=======
    case TYPES.CREATE_ACCOUNT:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
>>>>>>> bank: create account functionality
    default:
      return state;
  }  
}

export default accounts;