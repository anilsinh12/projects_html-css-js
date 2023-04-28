var generateButton = document.querySelector("#pass_btn");
var passwordInput = document.querySelector(".pass");

function generatePass() {
  var password = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@ ";
  
  for (var i = 0; i < 8; i++) {
    password += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  
  passwordInput.value = password;
}

generateButton.addEventListener("click", generatePass);
