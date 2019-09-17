import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './styles.scss';
import { createAccountRequest } from '../../redux/modules/account/actions';
import { mock } from '../../App';

const CreateAccount = () => {

  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [currency, setCurrency] = useState('');
  const [addAccountWarning, setAddAccountWarning] = useState('');
  const accounts = useSelector((state) => state.accounts);

  mock.onPost('/accounts', { id: id, currency: currency }).reply(200, { id: id, currency: currency, balance: '0.00' });

  const currencyOptions = ['BGN', 'USD', 'EUR'];

  let idIsFree = true;

  const handleAddAccount = (id, currency) => {
    let idPatternTest = (/^BG\d{2}BUIN\d{14}$/).test(id);
    let currencyPatternTest = (/^(BGN)$|^(USD)$|^(EUR)$/).test(currency);
    
    Object.keys(accounts).forEach((key) => {
      if(key === id) {
        idIsFree = false;
      }
    });

    if(idPatternTest && currencyPatternTest && idIsFree) {
      dispatch(createAccountRequest(id, currency));
      setAddAccountWarning('');
      setId('');
      setCurrency('');
    }
    else {
      if(idIsFree === false) { setAddAccountWarning('This account ID is already taken!'); }
      else { setAddAccountWarning('Please fill in the form correctly!'); }
    }
  }

  return (
    <div data-test='Create Account Component'>
      <InputField
        type='text'
        className='account-name-input'
        value={id}
        onChange={(event) => setId(event.target.value)}
        data-test='Account ID field'
        placeholder='Choose an account ID' />
        <p className='account-explanation' data-test='Example ID paragraph'>Example: BG23BUIN45678901234567</p>
      <Dropdown
        className='currency-dropdown'
        value={currency}
        options={currencyOptions}
        onChange={(event) => setCurrency(event.value)}
        placeholder="Select a currency"
        data-test='Currency Selector' />
      <Button buttonText='Add' onClick={() => handleAddAccount(id, currency)} data-test='Create Page Add Account Button Component'/>
      <Link className="back" to="/"><Button buttonText='Back'/></Link>
      <p className='validation-warning'>{addAccountWarning}</p>
    </div>
  )
}

export default CreateAccount;