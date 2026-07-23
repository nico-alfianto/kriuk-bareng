import {
  auth
} from "../firebase/firebase-config.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

/* ==========================
   REGISTER
========================== */

const registerForm =
  document.getElementById(
    "register-form"
  );

if (registerForm) {

  registerForm.addEventListener(
    "submit",
    async (e) => {

      e.preventDefault();

      const email =
        document.getElementById(
          "email"
        ).value;

      const password =
        document.getElementById(
          "password"
        ).value;

      const confirmPassword =
        document.getElementById(
          "confirmPassword"
        ).value;

      if (
        password !== confirmPassword
      ) {
        alert(
          "Konfirmasi password tidak cocok"
        );
        return;
      }

      try {

        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        alert(
          "Registrasi berhasil"
        );

        window.location.href =
          "login.html";

      } catch (error) {

        alert(
          error.message
        );

      }

    }
  );

}

/* ==========================
   LOGIN
========================== */

const loginForm =
  document.getElementById(
    "login-form"
  );

if (loginForm) {

  loginForm.addEventListener(
    "submit",
    async (e) => {

      e.preventDefault();

      const email =
        document.getElementById(
          "email"
        ).value;

      const password =
        document.getElementById(
          "password"
        ).value;

      try {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        alert(
          "Login berhasil"
        );

        window.location.href =
          "index.html";

      } catch (error) {

        alert(
          "Login gagal: " +
          error.message
        );

      }

    }
  );

}

/* ==========================
   LOGOUT
========================== */

window.logoutUser =
  async function () {

    await signOut(auth);

    alert(
      "Logout berhasil"
    );

    window.location.href =
      "../login.html";

  };

/* ==========================
   CEK LOGIN
========================== */

onAuthStateChanged(
  auth,
  (user) => {

    if (user) {

      console.log(
        "Login:",
        user.email
      );

    } else {

      console.log(
        "Belum login"
      );

    }

  }
);
