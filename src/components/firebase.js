const firebaseConfig = {
    apiKey: "AIzaSyARXJHXH0drGIET40pOtJKVGYRjmYFO2TU",
    authDomain: "disneyplus-clone-75aa6.firebaseapp.com",
    projectId: "disneyplus-clone-75aa6",
    storageBucket: "disneyplus-clone-75aa6.appspot.com",
    messagingSenderId: "10624621902",
    appId: "1:10624621902:web:a7358627f764bfe582921f"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;