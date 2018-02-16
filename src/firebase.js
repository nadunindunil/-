import * as firebase from 'firebase';

// should go in a secret file
const config = {
    apiKey: "AIzaSyBVMsW2bYWinMm4brUj551RwTAmsHqZWXI",
    authDomain: "react-fire-d7d70.firebaseapp.com",
    databaseURL: "https://react-fire-d7d70.firebaseio.com",
    projectId: "react-fire-d7d70",
    storageBucket: "",
    messagingSenderId: "678626631944"
};

firebase.initializeApp(config);

export default firebase;