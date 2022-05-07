// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(passwordLength) {
  var passwordLength=10;
  var numbers = "0123456789";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var Special="!#$%&*+-<=>?@^"
  var allChars = numbers + upperCase + lowerCase + Special;
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numbers;
  randPasswordArray[1] = upperCase;
  randPasswordArray[2] = lowerCase;
  randPasswordArray[3] = Special;
  randPasswordArray = randPasswordArray.fill(allChars, 3);
  return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

