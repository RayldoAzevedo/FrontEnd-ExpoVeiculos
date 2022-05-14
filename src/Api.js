import { async } from '@firebase/util';
import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

import database from './database/firebase';

const firebaseApp = firebase.initializeApp(database);
const db = firebaseApp.firestore();

export default {

    googleLogar: async () => {
        const provider = new firebase.auth.GooleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    }
}