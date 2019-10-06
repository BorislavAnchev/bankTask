import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { randomIdGenerator } from '../utils';

const mock = new MockAdapter(axios);

let database = {
  accounts: [
    { id: '_u70nyuzcq', iban: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5678.00' },
    { id: '_wi2ozmsx9', iban: 'BG12BUIN12341234567892', currency: 'USD', balance: '3456.00' },
    { id: '_bousuqei6', iban: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00' }
  ]
};

const newBalance = (balance, amount, transactionType) => {
  switch(transactionType) {
    case 'Deposit':
      return (Number(balance) + Number(amount)).toFixed(2).toString();
    case 'Withdraw':
      return (Number(balance) - Number(amount)).toFixed(2).toString();
    default:
      return balance;
  }
}  

mock.onGet('/accounts').reply(200, database);

mock.onPut('/accounts')
.reply(({data}) => {
  data = JSON.parse(data);
  const {id, amount, transactionType} = data;
  const index = database.accounts.findIndex(element => id === element.id);
  database.accounts[index].balance = newBalance(database.accounts[index].balance, amount, transactionType);
  return [200, {
        id,            
        iban: database.accounts[index]['iban'],
        currency: database.accounts[index]['currency'],
        balance: database.accounts[index]['balance']
        }]
});

mock.onDelete('/accounts').reply(({params}) => {  
  return [200, { id: params.id }]
});

mock.onPost('/accounts').reply(({data}) => {
  data = JSON.parse(data);
  const {iban, currency} = data;
  return [200, { id: randomIdGenerator(), iban, currency, balance: '0.00' }]
});