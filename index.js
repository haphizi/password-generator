const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

//generate 2 random passwords when the user clicks the button
// console.log(characters.length); //check the total 91 characters

let firstPassword = document.getElementById("firstPassword");
let secondPassword = document.getElementById("secondPassword");
let firstChars = "";
let secondChars = "";
let passwordsGenerated = false;
function getRandomNumber() {
  let randomIndex = Math.floor(Math.random() * characters.length); //90 indexes
  return characters[randomIndex];
}

// each password should be 15 characters long
// create a loop to generate the randomIndex 15 times

generatePassword.addEventListener("click", function () {
  if (passwordsGenerated) {
    firstChars = "";
    secondChars = "";
  }
  passwordsGenerated = true;
  for (let i = 0; i <= 15; i++) {
    firstChars += getRandomNumber();
    secondChars += getRandomNumber();
  }

  firstPassword.textContent = firstChars;
  secondPassword.textContent = secondChars;
});
