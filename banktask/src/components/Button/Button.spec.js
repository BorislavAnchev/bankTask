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

        }
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });

    it('Should throw a warning', () => {
      const expectedProps = {
        buttonText: 35,
        onClick: 'Not a function'
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
        onClick: mockFunc
      };
      wrapper = shallow(<Button {...props} />);
    });
    
    it('Should render a button', () => {
      const button = findByTestAttribute(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });

    it('Should emit the callback on the click event', () => {
      const button = findByTestAttribute(wrapper, 'buttonComponent');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});