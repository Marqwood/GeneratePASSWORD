// Assignment code here


// Get references to the #generate element
var generateBtn = document.getElementById("Generate")

   
// Write password to the #password input
function writePassword() {
  var password = GeneratePassword();
  var password = document.getElementById("password");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var passwordlenght =8;
   var password ="";
  passwordText.value = password;

}
  document.getElementById("password").value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
