import firebase from 'firebase';
import { ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = (prop, value) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' });
        ToastAndroid.show('Added!', ToastAndroid.SHORT);
      })
      .catch(() => {
        ToastAndroid.show('Error!', ToastAndroid.SHORT);
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.employeeList({ type: 'reset' });
        ToastAndroid.show('Saved!', ToastAndroid.SHORT);
      })
      .catch(() => ToastAndroid.show('Error!', ToastAndroid.SHORT));
  };
};

export const employeeDelete = (id) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${id}`)
      .remove()
      .then(() => {
        Actions.employeeList({ type: 'reset' });
        ToastAndroid.show('Fired!', ToastAndroid.SHORT);
      })
      .catch(() => {
        ToastAndroid.show('Error!', ToastAndroid.SHORT);
      });
  };
};
