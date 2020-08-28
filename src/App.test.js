import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);

  expect(div.innerHTML).toContain('Hi there!');

  ReactDom.unmountComponentAtNode(div);
});
