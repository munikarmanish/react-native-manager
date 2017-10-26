import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
