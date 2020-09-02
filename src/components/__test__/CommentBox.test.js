import React from 'react';
import CommentBox from '../CommentBox';
import App from '../App';
import { mount } from 'enzyme';

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
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



it("has a textarea and users can type in", () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment test'}
  });
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment test');
});

// simulate the submit event on form not button

it('Text area gets empty when form submitted', () => {
  wrapped.find('form').simulate('submit');

  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
