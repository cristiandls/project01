import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCGHs-3_iS69_WGQzGJIqBGfvPpDLLthTM',
  authDomain: 'authentication-f9b41.firebaseapp.com',
  databaseURL: 'https://authentication-f9b41.firebaseio.com',
  projectId: 'authentication-f9b41',
  storageBucket: 'authentication-f9b41.appspot.com',
  messagingSenderId: '858415924156'
};

firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
