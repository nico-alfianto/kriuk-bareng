document
  .getElementById("login-form")
  ?.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    if(email && password){

      alert(
        "Login berhasil (Mode Demo)"
      );

      localStorage.setItem(
        "user",
        JSON.stringify({
          email
        })
      );

      window.location.href =
        "index.html";
    }

  });

document
  .getElementById("google-login")
  ?.addEventListener("click", function(){

    alert(
      "Google Login akan aktif setelah Firebase dipasang."
    );

  });
