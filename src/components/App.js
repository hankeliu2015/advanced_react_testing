import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends Component {
  renderButton() {
    if(this.props.auth) {
      return <button>Sign Out</button>
    }else {
      return <button>Sign In</button>
    }
  }

  renderHeader () {
    return (
      <ul>
        <li><Link path='/'>Home</Link></li>
        <li><Link path='/post'>Post a comment</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        <p>{this.renderHeader()}</p>
        <Route path='/' exact component={CommentList} />
        <Route path="/post" component={CommentBox} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return({auth: state.auth})
}
export default connect(mapStateToProps)(App);
