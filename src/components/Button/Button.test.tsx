import * as React from 'react';
import { mount } from '../../../utils/render';
import Button from './';

test('Button should render text inside from props', () => {
  const props = {
    isLoading: false,
    onClick: jest.fn(),
    text: 'save',
    type: 'primary',
  };

  const wrapper = mount(<Button {...props} />);

  expect(wrapper.find('button').text()).toEqual(props.text);
});