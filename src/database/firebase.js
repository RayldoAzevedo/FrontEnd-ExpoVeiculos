import {initializeApp} from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2wJdG5CWOZoJL16MiNRzxDzoK9YC9pHI",
    authDomain: "expo-veiculos.firebaseapp.com",
    projectId: "expo-veiculos",
    storageBucket: "expo-veiculos.appspot.com",
    messagingSenderId: "671682481347",
    appId: "1:671682481347:web:d2becc8e6f0ce0f479a676"
  };
  
  // Initialize Firebase
  const fireDb = initializeApp(firebaseConfig);

  export default fireDb.database().ref();
