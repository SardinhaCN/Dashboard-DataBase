const { getAuth } = require("firebase/auth");

const auth = getAuth();

const userId = auth.currentUser.uid;

module.exports = {
  userId,
}