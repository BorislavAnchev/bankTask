import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttribute, testStore, checkProps } from '../../../utils';
import CreateAccount from './CreateAccount';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = mount(<Provider store={store}><MemoryRouter><CreateAccount /></MemoryRouter></Provider>); // Mount insdead of shallow with Provider arround solves the problem.
  return wrapper;
}

describe('Create account component', () => {
  let wrapper;
  beforeEach(() => {
    //store = mockStore(initialState);
    const initialState = {
      accounts: {
        BG12BUIN12341234567891: { id: 'BG12BUIN12341234567891', currency: 'BGN', balance: '5678.00' },
        BG12BUIN12341234567892: { id: 'BG12BUIN12341234567892', currency: 'USD', balance: '3456.00' },
        BG12BUIN12341234567893: { id: 'BG12BUIN12341234567893', currency: 'EUR', balance: '2345.00' }
      }
    };
    wrapper = setUp(initialState);
  });

  it('Should render an account ID input field component', () => {
    const idInput = findByTestAttribute(wrapper, 'Account ID field');
    expect(idInput.length).toBe(1);
  });

  it('Should render an example account ID paragraph', () => {
    const exampleId = findByTestAttribute(wrapper, 'Example ID paragraph');
    expect(exampleId.length).toBe(1);
  });

  it('Should render a currency selector dropdown', () => {
    const currencySelector = findByTestAttribute(wrapper, 'Currency Selector');
    expect(currencySelector.length).toBe(1);
  });

  it('Should render an "Add" button component', () => {
    const CreatePageAddAccountButton = findByTestAttribute(wrapper, 'Create Page Add Account Button Component');
    expect(CreatePageAddAccountButton.length).toBe(1);
  });

  it('Should render a "Back" button component', () => {
    const backButtonLink = wrapper.find(Link);
    expect(backButtonLink.length).toBe(1);
    expect(backButtonLink.props().to).toBe('/');
  });
});