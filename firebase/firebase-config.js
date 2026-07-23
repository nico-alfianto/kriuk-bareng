// ============================
// FIREBASE CONFIG
// KRIUK BARENG
// ============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0fRILylz5LF4myYSTjaX9nCrey0FgbZU",
  authDomain: "kriuk-bareng.firebaseapp.com",
  projectId: "kriuk-bareng",
  storageBucket: "kriuk-bareng.firebasestorage.app",
  messagingSenderId: "190075806519",
  appId: "1:190075806519:web:5bb7aff11bb9bd5fb370b2",
  measurementId: "G-EZMX8EWX10"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;
