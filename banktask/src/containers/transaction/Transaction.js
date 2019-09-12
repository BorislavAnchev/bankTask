import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './styles.scss';
import { submitTransaction } from '../../redux/modules/account/actions';


import { mock } from '../../App';

const Transaction = () => {

  const dispatch = useDispatch();
  const [id, setId] = useState(''); 
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [warning, setWarning] = useState('');
  const [submitWarning, setSubmitWarning] = useState('');
  const accounts = useSelector((state) => state.accounts);
  const [balance, setBalance] = useState('');

  mock.onPut('/accounts',
    { id,
      amount,
      transactionType: 'Deposit'
    })
    .reply(204, {
      id,            
      iban: (/_\w{9}/).test(id) ? accounts[id]['iban'] : '',
      currency: (/_\w{9}/).test(id) ? accounts[id]['currency'] : '',
      balance: (Number(balance) + Number(amount)).toFixed(2).toString(),
    });

  mock.onPut('/accounts',
    {
      id,
      amount,
      transactionType: 'Withdraw'
    })
  .reply(204, {
    id,
    iban: (/_\w{9}/).test(id) ? accounts[id]['iban'] : '',
    currency: (/_\w{9}/).test(id) ? accounts[id]['currency'] : '',
    balance: (Number(balance) - Number(amount)).toFixed(2).toString(),
  });
  
  const accountOptions = Object.keys(accounts).map((key) => {return {value: key, label: accounts[key]['iban']}});

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
    let idPatternTest = (/_\w{9}/).test(id);
    let amountPatternTest = (/^[0-9]+([.,][0-9]{0,2})?$/).test(amount);
    let transactionTypePatternTest = (/^(Deposit)$|^(Withdraw)$/).test(transactionType);
    
    if(idPatternTest && amountPatternTest && transactionTypePatternTest) {
      dispatch(submitTransaction(id, amount, transactionType))
        .then(response => {
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
              options={accountOptions} value={(/_\w{9}/).test(id) ? accounts[id]['id'] : ''}
              onChange={(event) => {
                setId(event.value);
                setBalance(accounts[event.value].balance); // This may get removed in favour of a conditional expression.
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
              onClick={() => handleSubmit(id, amount, transactionType)}
              data-test='buttonComponentParent'
              buttonText='Submit' />
            <p className='balance-section' data-test='currentBalance'>Current balance: {balance} </p>
            <p className='submit-warning' data-test='submitWarning'>{submitWarning}</p>
        </div>
    );
}

export default Transaction;