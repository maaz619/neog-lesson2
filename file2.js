const readline = require("readline-sync");

var score = 0;

console.log("welcome to Quiz \n");

var userName = readline.question("What is your name?");

const welcomeMessage = "Welcome " + userName + " to the football quiz game";

console.log("\n" + welcomeMessage + "\n");

console.log(
  "There are 2 lvls in this game!!\nIf you answer all 5 question you'll be promoted to lvl2"
);

var quizData = {
  lvl1: {
    question1: { Q: "which club messi play for:", A: "psg" },
    question2: {
      Q: "which club mo salah play for:",
      A: "liverpool",
    },
    question3: {
      Q: "which club cristiano ronaldo play for:",
      A: "manchester united",
    },
    question4: {
      Q: "which club benzema play for:",
      A: "real madrid",
    },
    question5: {
      Q: "juventus play in which country's national league:",
      A: "italy",
    },
  },
  lvl2: {
    question1: {
      Q: "Which country will host 2026 fifa world cup:",
      A: "america",
    },
    question2: {
      Q: "which country mo salah play for:",
      A: "egypt",
    },
    question3: {
      Q: "who won the 2018 fifa wc golden boot:",
      A: "harry kane",
    },
    question4: {
      Q: "who scored the winning goal in 2010 fifa wc final:",
      A: "iniesta",
    },
    question5: {
      Q: "who won the 2001 Ballon d'Or:",
      A: "michael owen",
    },
  },
};

var questionNumber = [
  "question1",
  "question2",
  "question3",
  "question4",
  "question5",
];

function play(question, answer) {
  var userAnswer = readline.question(question);
  let finalAnswer = userAnswer.toLowerCase();
  if (finalAnswer === answer) {
    score += 1;
    console.log("Right answer\n");
  } else {
    if (score >= 5) {
      score -= 1;
    }
    console.log("oops!!");
  }
}
for (var i = 0; i < questionNumber.length; i++) {
  let q = quizData.lvl1[questionNumber[i]].Q;
  let a = quizData.lvl1[questionNumber[i]].A;
  play(q, a);
  console.log("Your score: ", score);
  if (score == 5) {
    console.log(
      "\nWelcome to lvl 2 " +
        userName +
        " for each wrong answer 1 point will be deducted"
    );
    for (var j = 0; j < questionNumber.length; j++) {
      let x = quizData.lvl2[questionNumber[j]].Q;
      let y = quizData.lvl2[questionNumber[j]].A;
      play(x, y);
      console.log("Your score: ", score);
    }
  }
}
