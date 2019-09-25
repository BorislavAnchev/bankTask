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
  const [mockCurrency, setMockCurrency] = useState(''); // For mocking purposes

  useEffect(() => { // For mocking purposes
    if(id !== '') {
      setMockCurrency(accounts[id].currency);
    }
  }, [id]);

  mock.onPut('/accounts', { id: id, balance: (Number(balance) + Number(amount)).toFixed(2).toString()})
    .reply(204, {
                  id: id,
                  currency: mockCurrency, // Returns the correct currency
                  balance: (Number(balance) + Number(amount)).toFixed(2).toString()
                });
  
  const accountOptions = Object.keys(accounts).map((key) => key);

  const transactionOptions = [
    { value: 'Deposit', label: 'Deposit'}, // Add withdraw option. May be a flat array.
  ];
  
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