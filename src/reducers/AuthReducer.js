import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = {
  email: 'user@email.com',
  password: 'password',
  user: null,
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
        user: action.payload,
        loading: false,
        error: ''
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        user: null,
        loading: false,
        error: 'Authentication failed',
        password: '',
      };

    case LOGIN_USER:
      return { ...state, loading: true, error: '' };

    default:
      return state;
  }
};
