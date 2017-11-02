import firebase from 'firebase';
import { ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';

export const emailChanged = text => (
  {
    type: EMAIL_CHANGED,
    payload: text,
  }
);

export const passwordChanged = text => (
  {
    type: PASSWORD_CHANGED,
    payload: text,
  }
);

export const loginUser = (email, password) => (
  (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user, 'login'))
    .catch(loginError => {
      console.log(loginError);
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user, 'signup'))
      .catch(signupError => {
        console.log(signupError);
        loginUserFail(dispatch);
      });
    });
  }
);

const loginUserSuccess = (dispatch, user, type) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.employeeList();
  if (type === 'login') {
    ToastAndroid.show('Logged in!', ToastAndroid.SHORT);
  } else {
    ToastAndroid.show('Signed up!', ToastAndroid.SHORT);
  }
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
  ToastAndroid.show('Error!', ToastAndroid.SHORT);
};
