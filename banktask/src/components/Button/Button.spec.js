import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from '../../utils';
import Button from './Button';

describe('The button component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Some button text',
        onClick: () => {

        },
        'data-testid': 'test'
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });

<<<<<<< 4cfb8753cc9174a3dcc57fcc1d6257ec127bdaac
    it('Should throw a warning in the browser console', () => {
      const expectedProps = {
        buttonText: 35,
        onClick: 'Not a function',
        'data-testid': 35

=======
    it('Should throw a warning', () => {
      const expectedProps = {
        buttonText: 35,
        onClick: 'Not a function'
>>>>>>> bank: address the comments made on the previous PR
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeTruthy();
    });
  });

  describe('Renders', () => {
    
    let wrapper;
    let mockFunc;

    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: 'Some button text',
        onClick: mockFunc,
        'data-testid': 'Test Button'
      };
      wrapper = shallow(<Button {...props} />);
    });
    
    it('Should render a button', () => {
      const button = findByTestAttribute(wrapper, 'Test Button Primitive');
      expect(button.length).toBe(1);
    });

    it('Should emit the callback on the click event', () => {
      const button = findByTestAttribute(wrapper, 'Test Button Primitive');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});