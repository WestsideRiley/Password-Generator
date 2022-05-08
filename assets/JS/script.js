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
  var passwordLength= parseInt(prompt("How long is the password?"));

    while (isNaN(passwordLength)){
        if (true){
          passwordLength=prompt("Please insert a number!");
        }
      }
    while (passwordLength < 8 || passwordLength > 128) {
      
        if(passwordLength < 8 ){
          passwordLength=prompt("This number is too low!");
        }
        else if(passwordLength > 128 ){
          passwordLength=prompt("This number is too high!");
        }
        else{
          alert("thank you");
        }; 
    }

  var containsNumbers= prompt("Should this password contain numbers?");
    
    while (containsNumbers !== "yes" && containsNumbers !== "no" ) {

        if (true) {

          containsNumbers=prompt("Please respond with yes or no")     
        }
      }

  var containsUpper= prompt("Should this password contain Uppercase letters?");
    
    while (containsUpper !== "yes" && containsUpper !== "no" ) {
  
        if (true) {
  
          containsUpper=prompt("Please respond with yes or no")     
          }
        }    

  var containsSpecial= prompt("Should this password contain Special Characters?");
    
    while (containsSpecial !== "yes" && containsSpecial !== "no" ) {

        if (true) {

          containsSpecial=prompt("Please respond with yes or no")     
        }
      }

var numbers = "0123456789";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var Special="!#$%&*-<>?@^"
  const allChars = lowerCase + numbers + upperCase + Special;
  const LowerOnly=lowerCase;
  const NumberOnly= lowerCase + numbers;
  const UpperOnly= lowerCase + upperCase;
  const SpecialOnly= lowerCase + Special;
  const NumUpper = lowerCase + numbers + upperCase;
  const NumSpec = lowerCase + numbers + Special;
  const UpperSpec= lowerCase + upperCase + Special;
 

  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numbers;
  randPasswordArray[1] = upperCase;
  randPasswordArray[2] = lowerCase;
  randPasswordArray[3] = Special;
  randPasswordArray = randPasswordArray.fill(PasswordCriteria());

      function PasswordCriteria(){
         
        if(containsUpper==="yes" && containsNumbers==="yes" && containsSpecial==="yes"){
           return allChars;    
        }

        if(containsUpper==="no" && containsNumbers==="no" && containsSpecial==="no"){
           return LowerOnly;
        }

        if(containsUpper==="no" && containsNumbers==="yes" && containsSpecial==="no"){
           return NumberOnly;
        }

        if(containsUpper==="yes" && containsNumbers==="no" && containsSpecial==="no"){
           return UpperOnly;
        }

        if(containsUpper==="no" && containsNumbers==="no" && containsSpecial==="yes"){
           return SpecialOnly;  
        }

        if(containsUpper==="yes" && containsNumbers==="yes" && containsSpecial==="no"){
          return NumUpper;   
        }

        if(containsUpper==="no" && containsNumbers==="yes" && containsSpecial==="yes"){
          return NumSpec;
        }

        if(containsUpper==="yes" && containsNumbers==="no" && containsSpecial==="yes"){
          return UpperSpec;    
        }

      }

  return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

      
}

      
  