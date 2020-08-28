import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('show a comment box', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // console.log(div.innerHTML);

  expect(div.innerHTML).toContain('Comment List');
  ReactDOM.unmountComponentAtNode(div);
})
