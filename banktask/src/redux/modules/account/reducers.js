import { TYPES } from './types';
import { combineReducers } from 'redux';
import { mapKeys } from 'lodash';

const accounts = (state = {}, action) => {
  switch(action.type) {
    case TYPES.LOAD_ACCOUNTS_SUCCESS:
      return mapKeys(action.payload, 'id');
    case TYPES.UPDATE_ACCOUNT:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    default:
      return state;
  }  
}

export default accounts;