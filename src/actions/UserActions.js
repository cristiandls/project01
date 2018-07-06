import { auth } from '../Firebase';
import { GET_USER, USER_STATUS } from './UserTypes';

export function getUser() {
  return dispatch => {
    dispatch({
      type: USER_STATUS,
      payload: true
    });

    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER,
        payload: user
      });

      dispatch({
        type: USER_STATUS,
        payload: false
      });
    });
  };
}

export function login(email, password) {
  return () => auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
  return () => auth.signOut();
}

export function createAccount(email, password) {
  return () => auth.createUserWithEmailAndPassword(email, password);
}
