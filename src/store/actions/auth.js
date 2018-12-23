import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
      type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
      type: actionTypes.AUTH_SUCCESS,
      idToken: token,
      userId: userId
  };
};

export const authFail = (error) => {
  return {
      type: actionTypes.AUTH_FAIL,
      error: error
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
      type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
      setTimeout(() => {
          dispatch(logout());
      }, expirationTime * 1000);
  };
};

export const auth = (email, name, password) => {
  return dispatch => {
      dispatch(authStart());
      const authData = {
          email: email,
          name: name,
          password: password,
          returnSecureToken: true
      };
      let url = 'http://localhost:8000/auth/signup';

      axios.put(url, authData)
          .then(response => {
              console.log(response.data)
              const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
              localStorage.setItem('token', response.data.idToken);
              localStorage.setItem('expirationDate', expirationDate);
              localStorage.setItem('userId', response.data.userId);
              dispatch(authSuccess(response.data.idToken, response.data.userId));
              dispatch(checkAuthTimeout(response.data.expiresIn));
          })
          .catch(err => {
              dispatch(authFail(err.response.data));
          });
  };
};