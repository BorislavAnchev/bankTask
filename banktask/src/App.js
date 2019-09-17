<<<<<<< 4f6589fee7b86c869775285d7c721b7c564ee972
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Transaction from './screens/transaction/Transaction';
import { loadAccounts } from './redux/modules/account/actions';
=======
import React, { useEffect } from 'react'; // useEffect to be removed maybe
import { useDispatch } from 'react-redux'; // This line to be removed maybe
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Transaction from './containers/transaction/Transaction';
import CreateAccount from './containers/createAccount/CreateAccount';
import { loadAccounts } from './redux/modules/account/actions';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const mock = new MockAdapter(axios);

mock.onGet('/accounts').reply(200, {
  accounts: [
    { id: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5678.00' },
    { id: 'BG12BUIN12341234567892', currency: 'USD', balance: '3456.00' },
    { id: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00' }
  ]
});
>>>>>>> bank: create account functionality

const App = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadAccounts());
  }, []);

  return (
    <BrowserRouter>
<<<<<<< 4f6589fee7b86c869775285d7c721b7c564ee972
      <div className="App">
        <Header data-test='Header Component'/>
        <Route exact path='/' render={() => <Transaction />} data-testid='Transaction Page Route' />
=======
      <div className="App" render={console.log('App Render')}>
        <Header />
        <Route exact path='/' render={() => <Transaction />} />
        <Route exact path='/create' render={() => <CreateAccount />} />
>>>>>>> bank: create account functionality
      </div>
    </BrowserRouter>
  );
}

export default App;
