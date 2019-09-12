import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Transaction from './containers/transaction/Transaction';
import { loadAccounts } from './redux/modules/account/actions';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const mock = new MockAdapter(axios);

mock.onGet('/accounts').reply(200, {
  accounts: [
    { id: '_u70nyuzcq', iban: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5678.00' },
    { id: '_wi2ozmsx9', iban: 'BG12BUIN12341234567892', currency: 'USD', balance: '3456.00' },
    { id: '_bousuqei6', iban: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00' }
  ]
});

const App = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadAccounts());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header data-test='Header Component'/>
        <Route exact path='/' render={() => <Transaction />} data-test='Transaction Page Route' />
      </div>
    </BrowserRouter>
  );
}


export default App;
