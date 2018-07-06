import React, { Component } from 'react';
import { Provider } from 'react-redux';
import LoadingScreen from './screens/LoadingScreen';
import configureStore from './store';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoadingScreen />
      </Provider>
    );
  }
}
