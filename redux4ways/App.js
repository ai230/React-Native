import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import LoadDataApp from './containers/loadDataApp'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoadDataApp />
      </Provider>
    );
  }
}