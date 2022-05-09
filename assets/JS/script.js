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


//Function used for generating the password

function generatePassword(passwordLength) {
  

//Prompting system for acquiring the password length from the user

    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) ) {

      var passwordLength= parseInt(prompt("How many characters is the password?"));

        if (isNaN(passwordLength)){
          alert("Please insert a number!");
        }
        else if(passwordLength < 8 ){
          alert("This password is too short! Please make a password that is greater than 8 characters and less than 128!");
        }
        else if(passwordLength > 128 ){
          alert("This password is too long! Please make a password that is greater than 8 characters and less than 128!");
        };        ; 
    }


//Prompting System for obtaining the specifications of the password from the user 

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


//Definition of variables used for defining the characters used and which combination
  var numbers = "0123456789";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var Special="!#$%&*+=-<>?@^"
  const allChars = lowerCase + numbers + upperCase + Special;
  const LowerOnly=lowerCase;
  const NumberOnly= lowerCase + numbers;
  const UpperOnly= lowerCase + upperCase;
  const SpecialOnly= lowerCase + Special;
  const NumUpper = lowerCase + numbers + upperCase;
  const NumSpec = lowerCase + numbers + Special;
  const UpperSpec= lowerCase + upperCase + Special;
 
//  Parameters used for defining the arrays to use 
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numbers;
  randPasswordArray[1] = upperCase;
  randPasswordArray[2] = lowerCase;
  randPasswordArray[3] = Special;
  randPasswordArray = randPasswordArray.fill(PasswordCriteria());

  //Function for sorting the proper response based on the 
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
//Code for shuffling the arrays 
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

      
  