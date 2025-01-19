
  // Import the Firebase SDK for JavaScript
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, ref, set, get, update, remove } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAZOEFBlLiZk120SumDdjAoQYh0OBDilBc",
    authDomain: "avneetwebserver.firebaseapp.com",
    projectId: "avneetwebserver",
    storageBucket: "avneetwebserver.appspot.com",
    messagingSenderId: "785686598631",
    appId: "1:785686598631:web:762cb2852cdebfec8b2342"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Set data
const data = {
  name: "John Doe",
  age: 30,
  city: "New York",
};
const userRef = ref(db, "users/user1");
set(userRef, data)
  .then(() => {
    console.log("Data set successfully");
  })
  .catch((error) => {
    console.error("Error setting data:", error);
  });

// Get data
get(userRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error("Error getting data:", error);
  });

// Update data
update(userRef, {
  age: 31,
})
  .then(() => {
    console.log("Data updated successfully");
  })
  .catch((error) => {
    console.error("Error updating data:", error);
  });

// Delete data
remove(userRef)
  .then(() => {
    console.log("Data deleted successfully");
  })
  .catch((error) => {
    console.error("Error deleting data:", error);
  });
