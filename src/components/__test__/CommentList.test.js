import React from 'react';
import CommentList from '../CommentList';
import { mount } from 'enzyme';
import Root from '../../root.js';

let wrapped;
let intialState;

beforeEach(()=> {
  intialState = {comments: ['comment 1', 'comment 2']}
  wrapped = mount(
    <Root intialState={intialState}>
      <CommentList />
    </Root>
  )});

it('each comment has an li element', () => {
  expect(wrapped.find('li').length).toEqual(intialState.comments.length);
});

it('each li element contains comment', () => {
  console.log(wrapped.render().text());
  expect(wrapped.render().text()).toContain('comment 1');
  expect(wrapped.render().text()).toContain('comment 2');
});
