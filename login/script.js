// script.js
function check(form) {
  if (form.userid.value == "Roseindia" && form.pwd.value == "Roseindia") {
    alert("Login Successfully");
    return true;
  }
  if (form.userid.value == "Ajay" && form.pwd.value == "Ajay123") {
    alert("Login Successfully");
    return true;
  } else {
    alert("Error: Incorrect Username or Password");
    return false;
  }
}
