var readfileSync = require("readline-sync");

var welcomeNote = "Hello!";

var userScore = 0;

var userName = readfileSync.question("whats you name?");

console.log(welcomeNote + " " + userName); //string concatenation

var userAnswer = readfileSync.question("How may sides are in a square?");

// conditional operation or branching
if (userAnswer == 4) {
  console.log("Magestic!!");
} else {
  console.log("eeeeeeeee!!!!");
}

var userHonetown = readfileSync.question("Is your hometown Koderma?");

if (userHonetown === "yes") {
  userScore += 1;
  console.log("Score=" + userScore);
} else {
  userScore -= 1;
  console.log("Score=" + userScore);
}

//function with parameters and arguments
var add = function (first, two) {
  return first * two;
};

console.log(add(2, 9));

function quiz(Question, Answer) {
  let answer = Answer;
  var question = readfileSync.question(Question);
  if (question == answer) {
    userScore += 1;
  } else {
    userScore -= 1;
  }
  console.log("Score=" + userScore);
}
quiz("How many side in a triangle", 3); //calling a function

var i = 1;

//for loop (looping somthing again and again)
for (i = i; i <= 5; i++) {
  console.log(i + " " + "maaz");
}

//star pattern (for loop)

var i = readfileSync.question("Enter row numbes:");

for (var j = 1; j <= i; j++) {
  console.log("*".repeat(j));
}

//array
var groceryList = ["potato", "onion", "tomato", "apple", "bread"];

console.log(groceryList.length);

var length = groceryList.length;

for (i = 0; length > i; i++) {
  console.log(groceryList[i]);
}
