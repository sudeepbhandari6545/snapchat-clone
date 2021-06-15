import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAx3hWIP12nZXUjD76X6rNQ4wCm4FkCNy8',
  authDomain: 'snapchat-clone-dc6c5.firebaseapp.com',
  projectId: 'snapchat-clone-dc6c5',
  storageBucket: 'snapchat-clone-dc6c5.appspot.com',
  messagingSenderId: '948434798595',
  appId: '1:948434798595:web:74e7c9bd27020b9ca9a636',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, provider }
