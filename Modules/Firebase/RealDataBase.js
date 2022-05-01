const app = require("./app.js");

const { userId } = require("./Auth.js");

const {
  serverTimestamp,
  runTransaction,
  onChildChanged,
  onChildRemoved,
  onChildAdded,
  orderByChild,
  onDisconnect,
  getDatabase,
  limitToLast,
  onValue,
  child,
  query,
  push,
  ref,
  get,
  set
} = require("firebase/database");

const db = getDatabase(app);

const createUserData = (userId, name, email, imageUrl) => {
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

module.exports = {
  createUserData,
}