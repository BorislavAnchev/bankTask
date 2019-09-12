import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './styles.scss';
import { loadAccounts, submitTransaction } from '../../redux/modules/account/actions';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

mock.onGet('/accounts').reply(200, {
  accounts: [
    { id: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5678.00' },
    { id: 'BG12BUIN12341234567892', currency: 'USD', balance: '3456.00' },
    { id: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00' }
  ]
});

const Transaction = () => {

  const dispatch = useDispatch();
  const [id, setId] = useState(''); 
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [warning, setWarning] = useState('');
  const [submitWarning, setSubmitWarning] = useState('');
  const accounts = useSelector((state) => state.accounts);
  const [balance, setBalance] = useState('');
  const [mockCurrency, setMockCurrency] = useState(''); // For mocking purposes

  useEffect(() => { // For mocking purposes
    if(id !== '') {
      setMockCurrency(accounts[id].currency);
    }
    console.log("mockCurrency on ID change:");
    console.log(mockCurrency);
  }, [id]);

  useEffect(() => {
    dispatch(loadAccounts());
  }, []);

  useEffect(() => { // Debug
    console.log('useEffect accounts');
    console.log(accounts);
  }, [accounts]);

  useEffect(() => { // Debug
    console.log('useEffect mockCurrency:');
    console.log(mockCurrency);
  },[mockCurrency]);

  mock.onPut('/accounts', { id: id, balance: (Number(balance) + Number(amount)).toFixed(2).toString()}) // For deposit
    .reply(204, {
                  id: id,
                  currency: mockCurrency, // Returns the correct currency
                  balance: (Number(balance) + Number(amount)).toFixed(2).toString()
                });

  mock.onPut('/accounts', { id: id, balance: (Number(balance) - Number(amount)).toFixed(2).toString()}) // For withdraw
  .reply(204, {
                id: id,
                currency: mockCurrency, // Returns the correct currency
                balance: (Number(balance) - Number(amount)).toFixed(2).toString()
              });
  
  const accountOptions = Object.keys(accounts).map((key) => key);

  const transactionOptions = ['Deposit', 'Withdraw'];
  
  const moneyInput = (input) => {
    const pattern = /^[0-9]+([.,][0-9]{0,2})?$/;
    if(pattern.test(input)) {
      setAmount(input);
      setWarning('');
    }
    else {
      if(input === '') { setAmount(''); }
      setWarning('Please follow the specified format!')
    }
  }

  const handleSubmit = (id, amount, transactionType) => {
    let idPatternTest = (/^BG\d{2}BUIN\d{14}$/).test(id);
    let amountPatternTest = (/^[0-9]+([.,][0-9]{0,2})?$/).test(amount);
    let transactionTypePatternTest = (/^(Deposit)$|^(Withdraw)$/).test(transactionType);
    if(idPatternTest && amountPatternTest && transactionTypePatternTest) {
      dispatch(submitTransaction(id, amount, transactionType, balance))
        .then(response => {
          console.log('Mock currency on submit');
          console.log(mockCurrency);
          if(response.status >= 200 && response.status < 300) {
            setBalance(response.data.balance);
          }
        });
      setAmount('');
      setTransactionType('');
      setSubmitWarning('');
    }
    else {
      setSubmitWarning('Please fill all the form fields correctly!');
    }
  }

  return (
        <div data-test='transactionComponent'>
            <Dropdown
              className='accounts-dropdown'
              options={accountOptions} value={id}
              onChange={(event) => {
                setId(event.value);
                setBalance(accounts[event.value].balance);
                }}
              placeholder="Select an account"
              data-test='Account Selector' />
            <InputField
              type='text'
              className='money-input'
              value={amount}
              onChange={(event) => moneyInput(event.target.value)}
              data-test='Money Input field'
              placeholder='Format: 500.00' />
            <div className='warning'>{warning}</div>
            <Dropdown
              className='transaction-dropdown'
              value={transactionType}
              options={transactionOptions}
              onChange={(event) => setTransactionType(event.value)}
              placeholder="Type"
              data-test='Transaction Selector' />
            <Button
              className='submit-button'
              onClick={() => handleSubmit(id, amount, transactionType)}
              data-test='buttonComponentParent'
              buttonText='Submit' />
            <p className='balance-section' data-test='currentBalance'>Current balance: {balance} </p>
            <p className='submit-warning' data-test='submitWarning'>{submitWarning}</p>
        </div>
    );
}

export default Transaction;