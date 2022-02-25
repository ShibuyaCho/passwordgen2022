// Assignment Code
var generateBtn = document.querySelector("#generate");

  //Array containing characters in the password. 
  var chars = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
  ];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

    function generatePassword(){
      var passwordType = [];                             
     
      getPasswordType(chars, passwordType, newPassword);
      var newPassword = "";
      if(passwordType.length !== 0){
        var passwordLength = getPasswordLength();
        for(var i = 0; i < passwordLength; i++){
          newPassword += passwordType[Math.floor(Math.random() * passwordType.length)];
        }
      }
      return newPassword; 
    }
  } 
    function getPasswordType(allChar, userChar, passNew){
       //prompts the user for char selection 
      var windowAnswer1 = window.confirm("Uppercase?");
      var windowAnswer2 = window.confirm("Lowercase?");
      var windowAnswer3 = window.confirm("Numbers?");
      var windowAnswer4 = window.confirm("Special characters?");
      if(windowAnswer1 === true){
        passNew = userChar.push(...allChar[0].slice(0))  
        console.log("true");                                                           
      }
    
      if(windowAnswer2 === true){
        passNew = userChar.push(...allChar[1].slice(0))
      }
    
      if(windowAnswer3 === true){
        passNew = userChar.push(...allChar[2].slice(0))
      }
      
     
    
      if(windowAnswer4 === true){
        passNew = userChar.push(...allChar[3].slice(0))
       
      }
     
       //is array empty?
      if(userChar.length === 0){                                           
        alert("Error: please choose confirm for at least one option"); 
        getPasswordType(allChar, userChar, passNew); 
      }                      

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

