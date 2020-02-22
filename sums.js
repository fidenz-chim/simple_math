var readlineSync = require('readline-sync');

const NUM_1 = 3;
const NUM_2 = 3;
const SHOW_QUESTION_INFO = true;
const TOTAL_QUESTIONS = 3;

function candidateNumber(below){
    return Math.floor(Math.random() * below) + 1
}

var sessionStart = new Date().getTime() / 1000;
for (var i=0;i<TOTAL_QUESTIONS;i++) {

    var num1 = candidateNumber(NUM_1);
    var num2 = candidateNumber(NUM_2);
    var expectedAnswer = num1 + num2;
    var problemStart = new Date().getTime() / 1000;

    do {
        var problem = "(" + i.toString() + ") " +  num1 + " + " + num2 + " = ";
        var answer = readlineSync.question(problem);
        if (parseInt(answer) === expectedAnswer){
            var problemEnd = new Date().getTime() / 1000;
            if (SHOW_QUESTION_INFO)
                console.log("Correct :) [" + Math.floor(problemEnd - problemStart).toString() +" Seconds]");
            break;
        }
        else {
            continue;
        }
    } while (true)
}

var sessionEnd = new Date().getTime() / 1000;

console.log("==========================================");
console.log("|  Session - " + TOTAL_QUESTIONS.toString() + " Questions / " +  Math.floor(sessionEnd - sessionStart).toString() + " Seconds |");
console.log("==========================================");
