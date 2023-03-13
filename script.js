
var specialCharaters = "!@#$%^&*()_+|";
var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var defaultnumber = "";

var generateBtn = document.querySelector("#generate");
var passowrd = document.querySelector("#password");

generateBtn.addEventListener("click", generatePassword);

function generatePassword () {

  password.value === "";
  var generatedPassword = "";

  var lowerCasesComfirm = confirm(
    "Do you want your password contains lowercases?"
    );
  var upperCasesComfirm = confirm(
    "Do you want your password contains uppercases?"
    );
  var specialComfirm = confirm(
    "Do you want your password contains special charaters?"
    );
  var numberComfirm = confirm(
    "Do you want your password contains numbers?"
    );

    if (lowerCasesComfirm === false && upperCasesComfirm === false && specialComfirm === false && numberComfirm === false){
      alert("You need to choose at lease one criteria")
    }

  var userChoice = window.prompt (
    "Record your password length (between 8 to 25)"
  );

// if user input is not a number alert
  if (isNaN(userChoice)) {
    alert("Please input numbers only");
    var userChoice = window.prompt (
      "Record your password length (between 8 to 25)"
    );
  }
// if user input is not as assigned number alert
  if (userChoice < 8 || userChoice > 25) {
    alert('Password must be between 8 to 25');
    var userChoice = window.prompt (
      "Record your password length (between 8 to 25)"
    );
  }

  if (lowerCasesComfirm) {
      defaultnumber += lowerCases;
  }

  if (upperCasesComfirm) {
      defaultnumber += upperCases;
  }

  if (specialComfirm) {
      defaultnumber += specialCharaters;
  }

  if (numberComfirm) {
      defaultnumber += numbers;
  }

  for (var i = 0; i < userChoice; i++) {
    generatedPassword += defaultnumber.charAt(Math.floor(Math.random() * defaultnumber.length));
  }
   password.value = generatedPassword;
   
}