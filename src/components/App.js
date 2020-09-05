import React from 'react';
import { Route } from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {
  return (
      <div>
        <Route path='/' exact component={CommentList} />
        <Route path="/post" component={CommentBox} />
      </div>
  );
};
