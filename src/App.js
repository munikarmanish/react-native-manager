import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD0eM8KP6vpcKDrcHZlpuXadyR_5AqKC-Y',
      authDomain: 'munikarmanish-manager.firebaseapp.com',
      databaseURL: 'https://munikarmanish-manager.firebaseio.com',
      projectId: 'munikarmanish-manager',
      storageBucket: 'munikarmanish-manager.appspot.com',
      messagingSenderId: '887195298654',
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
