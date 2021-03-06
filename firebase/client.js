import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhP0GjtzSxPTHqdRsQ1AOTFgblqyV54NU",
  authDomain: "twity-1fe75.firebaseapp.com",
  projectId: "twity-1fe75",
  storageBucket: "twity-1fe75.appspot.com",
  messagingSenderId: "849251186278",
  appId: "1:849251186278:web:1eb2ee048cd792a3cb1fa7",
  measurementId: "G-R98V76MSD8",
};

// Singleton
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { photoURL, email, displayName, uid } = user;
  return {
    avatar: photoURL,
    email,
    username: displayName,
    uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(gitHubProvider);
};

export const addTwity = ({ avatar, content, userId, username, img }) => {
  return db.collection("twities").add({
    avatar,
    content,
    userId,
    username,
    img,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    linksCount: 0,
    sharedCount: 0,
  });
};

const mapTwityFromFirebaseToObject = (doc) => {
  const data = doc.data();
  const id = doc.id;
  const { createdAt } = data;
  return {
    ...data,
    id,
    createdAt: +createdAt.toDate(),
  };
};

export const listenLatestTwities = (onChange) => {
  return db
    .collection("twities")
    .orderBy("createdAt", "desc")
    .limit(20)
    .onSnapshot(({ docs }) => {
      const twities = docs.map(mapTwityFromFirebaseToObject);
      onChange(twities);
    });
};

export const getLatestTwities = () => {
  return db
    .collection("twities")
    .orderBy("createdAt", "desc")
    .limit(20)
    .get()
    .then((snapshot) => snapshot.docs.map(mapTwityFromFirebaseToObject));
};

export const uploadImage = (image) => {
  const ref = firebase.storage().ref(`images/${image.name}`);
  const task = ref.put(image);
  return task;
};
