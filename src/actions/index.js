import firebase from 'firebase';
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
    .then(user => loginUserSuccess(dispatch, user))
    .catch(loginError => {
      console.log(loginError);
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(signupError => {
        console.log(signupError);
        loginUserFail(dispatch);
      });
    });
  }
);

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
