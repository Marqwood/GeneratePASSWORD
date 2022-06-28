
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  alert ("click");
}
//= ("writePassword")
var group = "generatePassword"
if (group === 0){
  generatePassword = generatePassword
}

// Write password to the #password input 
function writePassword() {
 //console.log("writePssword", "in innerHTML");
 if (document.getElementById) 
 //alert
 var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
   //alert.click = ("writePassword")
  document.getElementById(password).value = password;
  
  

};



// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);{
    console.log("generateBtn");
  }




   
// Write password to the #password input
// function GeneratePassword () {
//   var password = GeneratePassword();
//   var password = document.getElementById("password");
//   var chars = list( "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ");
//    var passwordlenght =8;
//    var password ="";
//   passwordText.value = password;

// }


   


