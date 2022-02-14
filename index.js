var readLineSync = require("readline-sync");
var score = 0;
console.log("WELCOME TO: How Well Do You Bhaskar");
userName = readLineSync.question("Your Name: ");
console.log("WELCOME " + userName.toUpperCase() + "!");
console.log("+1 for each Correct ans, -0.5 for each Wrong ans");
console.log("----------------------------------------------");

function play(ques,ans){
  userAns = readLineSync.question(ques);
  if(userAns.toLowerCase() === ans.toLowerCase()){
    score++;
    console.log("That's the right answer!");
  }  
  else{
    console.log("This is wrong answer.");
    console.log("The Correct answer was " + ans.toUpperCase());
    score -= 0.5
  }
  console.log("Current Score is: " + score);
  console.log("----------------------------------------------");
}

var quesOne = {
  question: "Where does Bhaskar live? ",
  answer: "bhilai"
}
var quesTwo = {
  question: "Which is the favourite icecream of Bhaskar? ",
  answer: "butterscotch"
}
var quesThree = {
  question: "What does Bhaskar collect? ",
  answer: "cubes"
}
var quesFour = {
  question: "Which pet Bhaskar has? ",
  answer: "cat"
}
var quesFive = {
  question: "Which fast food Bhaskar likes the most? ",
  answer: "pizza"
}

arr = [quesOne,quesTwo,quesThree,quesFour,quesFive];
for(var i=0;i<arr.length;i++){
  play(arr[i].question,arr[i].answer);
}
console.log("FINAL SCORE IS -> " + score);
if(score>3){
  console.log("You know Bhaskar well!");
}
else if(score>0){
  console.log("You somewhat know Bhaskar :)");
}
else{
  console.log("So, you don't know Bhaskar well enough :(")
}