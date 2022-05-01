const { initializeApp } = require("firebase/app");

const { firebaseConfig } = require("./firebaseKeys.js");

const app = initializeApp(firebaseConfig());

module.exports = {
  app
}