function handleRegister() {
  console.log("Register login!");
  window.open("register.html", "_self");
}

function handleReset() {
  document.getElementById("Fullname_id").value = "";
  document.getElementById("email_id").value = "";
  document.getElementById("password_id").value = "";
  document.getElementById("re_password_id").value = "";
  document.getElementById("birthday_id").value = "";
}

function createNewUser() {
  var v_Fullname = document.getElementById("Fullname_id").value;
  var v_Email = document.getElementById("email_id").value;
  var v_password = document.getElementById("password_id").value;
  var v_re_password = document.getElementById("re_password_id").value;
  var v_birthday = document.getElementById("birthday_id").value;

  if (v_password !== v_re_password) {
    alert("Mật khẩu không trùng khớp");
    return; // Exit the function if passwords don't match
  }

  var user = {
    Fullname: v_Fullname,
    Email: v_Email,
    password: v_password,
    birthday: v_birthday,
  };

  // You can now do something with the 'user' object, like sending it to a server or storing it in local storage.
  console.log("New user created:", user);
}

window.open("login.html", "_self");
// var json = JSON.stringify(user);
