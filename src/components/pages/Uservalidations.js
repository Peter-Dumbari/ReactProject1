function checkPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let userName = document.getElementById("userName").value;

  if (password !== confirmPassword) {
    document.getElementById("messanger").innerHTML = "Password didnt match";
  } else {
    alert(
      userName +
        " Your Registration was Successful, a message have been sent to your Email Address!"
    );
  }
}

export default checkPassword;
