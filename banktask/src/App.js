import React, { useEffect } from 'react'; // useEffect to be removed maybe
import { useDispatch } from 'react-redux'; // This line to be removed maybe
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Transaction from './containers/transaction/Transaction';
import { loadAccounts } from './redux/modules/account/actions';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const mock = new MockAdapter(axios);

mock.onGet('/accounts').reply(200, {
  accounts: [
    { id: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5678.00', history: [
      {
        date: '05.01.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.02.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.03.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.04.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.05.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.06.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.07.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.08.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.09.2018',
        debit: '500.00',
        credit: ''
      },
      {
        date: '05.10.2018',
        debit: '500.00',
        credit: ''
      }
    ] },
    { id: 'BG12BUIN12341234567892', currency: 'USD', balance: '3456.00', history: [
      {
        date: '05.01.2019',
        debit: '500.00',
        credit: ''
      },
      {
        date: '06.01.2019',
        debit: '',
        credit: '500.00'
      },
      {
        date: '05.02.2019',
        debit: '500.00',
        credit: ''
      },
      {
        date: '06.02.2019',
        debit: '',
        credit: '500.00'
      },
      {
        date: '05.03.2019',
        debit: '500.00',
        credit: ''
      },
    ] },
    { id: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00', history: [] }
  ]
});

const App = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadAccounts());
  }, []);

  return (
    <BrowserRouter>
      <div className="App" render={console.log('App Render')}>
        <Header data-test='Header Component'/>
        <Route exact path='/' render={() => <Transaction />} data-test='Transaction Page Route' />
      </div>
    </BrowserRouter>
  );
}


export default App;
