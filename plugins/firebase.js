import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBUwzsJBWNlTogD0IQyXAQvW-Wom_U9hhI',
  authDomain: 'patchy-gg-cloud-functions.firebaseapp.com',
  databaseURL: 'https://patchy-gg-cloud-functions.firebaseio.com',
  projectId: 'patchy-gg-cloud-functions',
  storageBucket: 'patchy-gg-cloud-functions.appspot.com',
  messagingSenderId: '722159106542',
  appId: '1:722159106542:web:a70c3b335ffe4a68'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export default firebase
