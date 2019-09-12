import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk'; // About middleware.
import accounts from './modules/account/reducers';
// import transactionReducer from './modules/transaction/reducers';

export const rootReducer = combineReducers({accounts}); // I'm not sure what the state shape will be after this.

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddleware(rootReducer);

export default store// Here I put all my reducers with commas like that: (accountsReducer, transactionReducer) ...I think
// How do I use both of my reducers in the createStoreWithMiddleware?
// What will be the state shape after n amount of combiteReducers?