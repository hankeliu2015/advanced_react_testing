import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';
import async from './middlewares/async';
import stateValidate from './middlewares/stateValidate';

export default ({children, intialState={}}) => {
  const store = createStore(
    reducers,
    intialState,
    // applyMiddleware(reduxPromise)
    applyMiddleware(async, stateValidate)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};

// class Root extends Component {
//   render() {
//     return (
//       <Provider store={createStore(reducers, {})}>
//         {this.props.children}
//       </Provider>
//     )
//   }
// }
// export default Root;
