import { testStore } from '../../utils';
import { loadAccounts } from '../redux/modules/account/actions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('loadAccounts action', () => {
  beforeEach(() => { // This is not exatly needed before each test. Could be put outside the describe.
    const mock = new MockAdapter(axios);

    mock.onGet('/accounts').reply(200, {
      accounts: [
        { id: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5678.00' },
        { id: 'BG12BUIN12341234567892', currency: 'USD', balance: '3456.00' },
        { id: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00' }
      ] 
    });
  });

    it('Store is updated correctly', () => {
      const expectedState = {
        accounts: {
          BG12BUIN12341234567891: { id: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5678.00' },
          BG12BUIN12341234567892: { id: 'BG12BUIN12341234567892', currency: 'USD', balance: '3456.00' },
          BG12BUIN12341234567893: { id: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00' }
        }
      };

      const store = testStore();

      return store.dispatch(loadAccounts()).then(() => {
        const newState = store.getState();
        expect(newState).toEqual(expectedState);
      })
    });
});