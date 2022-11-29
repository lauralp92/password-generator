// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var charLength;

// Function to prompt user for password options
function getPasswordOptions() {
  charLength = prompt(
    "Passwords can contain 10-64 characters only. How many would you like?"
  );
  {
    if (charLength == null) {
      return null;
    } else if (charLength < 10 || charLength > 64 || isNaN(charLength)) {
      alert(
        "Sorry, you entered an incorrect amount of characters. 10-64 characters are required. Please try again!"
      );
      {
        return null;
      }
    }
  }

  var passOptions = {
    upperCasedCharacters: confirm(
      "Would you like to use uppercase characters?"
    ),
    lowerCasedCharacters: confirm(
      "Would you like to use lowercase characters?"
    ),
    numericCharacters: confirm(
      "Would you like to use numbers in your password?"
    ),
    specialCharacters: confirm(
      "Would you like to use special characters (!, @, $)?"
    ),
  };

  passOptions = [];
  if (upperCasedCharacters == true) {
    passOptions = passOptions.concat(upperCasedCharacters);
  }

  if (lowerCasedCharacters == true) {
    passOptions = passOptions.concat(lowerCasedCharacters);
  }

  if (numericCharacters == true) {
    passOptions = passOptions.concat(numericCharacters);
  }

  if (specialCharacters == true) {
    passOptions = passOptions.concat(specialCharacters);
  } else if (
    upperCasedCharacters == false &&
    lowerCasedCharacters == false &&
    numericCharacters == false &&
    specialCharacters == false
  ) {
    alert("Error! You have not entered any character types. Please try again");
    {
      getPasswordOptions();
    }
  }
  return [
    passOptions,
    charLength,
    upperCasedCharacters,
    lowerCasedCharacters,
    specialCharacters,
    numericCharacters,
  ];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  var finalPass = "";
  while (finalPass.length < charLength) {
    var index = Math.floor(Math.random() * passOptions.length);
    finalPass += passOptions[index];
  }
  return finalPass;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPasswordOptions();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
