import React from 'react';
import ReactDOM from 'react-dom';
import Discriminant from './Discriminant';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './Reducers/index'

ReactDOM.render(
    <Provider store={createStore(reducers)} >
        <Discriminant />
    </Provider>,
  document.getElementById('root')
);
