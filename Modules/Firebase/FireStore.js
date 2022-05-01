const app = require("./app.js");

const { userId } = require("./Auth.js");

const { 
  getFirestore, 
  collection, 
  updateDoc,
  deleteDoc,
  Timestamp,
  getDocs,
  addDoc,
  setDoc,
  doc
} = require("firebase/firestore");

const db = getFirestore(app);

const usersCollectionRef = collection(db, "Users");

const getUsers = async () => {
  const data = await getDocs(usersCollectionRef);
  console.info(data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  })));
};

const createUser = async () => {
  await addDoc(usersCollectionRef, {
    name: newName,
    age: Number(newAge)
  });
};

const updateUser = async (id, age) => {
  const userDoc = doc(db, "users", id);
  const newFields = { age: age + 1 };
  await updateDoc(userDoc, newFields);
};

const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  await deleteDoc(userDoc);
};

getUsers();

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
}