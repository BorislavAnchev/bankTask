import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Transaction from './containers/transaction/Transaction';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Transaction />
    </div>
  );
}


export default App;
