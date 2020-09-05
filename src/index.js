import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './root.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from './reducers';

ReactDOM.render(
  <Root>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Root>,
  document.querySelector('#root')
);
