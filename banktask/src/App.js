import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Transaction from './screens/transaction/Transaction';
import { loadAccounts } from './redux/modules/account/actions';

const App = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadAccounts());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header data-test='Header Component'/>
        <Route exact path='/' render={() => <Transaction />} data-testid='Transaction Page Route' />
      </div>
    </BrowserRouter>
  );
}

export default App;
