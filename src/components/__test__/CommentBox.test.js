import React from 'react';
import CommentBox from '../CommentBox';
import App from '../App';
import { mount } from 'enzyme';
import Root from '../../root.js'

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
})

afterEach(() => {
  wrapped.unmount();
})

it('has a textarea and a button', () => {
  // console.log(wrapped.find("textarea"));
  // console.log(wrapped.find("button"));
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('The text area test', () => {

  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment test'}
    });
    wrapped.update();
  });

  it('has a textarea and users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment test');
  });

  // simulate the submit event on form not button

  it('Text area gets empty when form submitted', () => {
    wrapped.find('form').simulate('submit');

    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });

})
