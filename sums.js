var readlineSync = require('readline-sync');

<<<<<<< HEAD
const NUM_1 = 5;
const NUM_2 = 5;
const SHOW_QUESTION_INFO = true;
const TOTAL_QUESTIONS = 15;
=======
const NUM_1 = 3;
const NUM_2 = 3;
const SHOW_QUESTION_INFO = true;
const TOTAL_QUESTIONS = 3;
>>>>>>> 4291275a7490a5ab882373fba470f9dcde9f09e0

function candidateNumber(below){
    return Math.floor(Math.random() * below) + 1
}

<<<<<<< HEAD
console.log("");
console.log("");
console.log("");
console.log("");

=======
>>>>>>> 4291275a7490a5ab882373fba470f9dcde9f09e0
var sessionStart = new Date().getTime() / 1000;
for (var i=0;i<TOTAL_QUESTIONS;i++) {

    var num1 = candidateNumber(NUM_1);
    var num2 = candidateNumber(NUM_2);
    var expectedAnswer = num1 + num2;
    var problemStart = new Date().getTime() / 1000;

    do {
<<<<<<< HEAD
        var problem = "\t\t\t\t(" + (i+1).toString() + ") " +  num1 + " + " + num2 + " = ";
        var answer = readlineSync.question(problem);
        if (parseInt(answer) === expectedAnswer){
            var problemEnd = new Date().getTime() / 1000;
            if (SHOW_QUESTION_INFO){
				//var dur =  Math.round(((problemEnd - problemStart) * 100) /100 );
				var dur =  problemEnd - problemStart;
                console.log("\t\t\t\t\t\tCorrect :) [" + dur.toFixed(2).toString() +" Seconds]");
			}
=======
        var problem = "(" + i.toString() + ") " +  num1 + " + " + num2 + " = ";
        var answer = readlineSync.question(problem);
        if (parseInt(answer) === expectedAnswer){
            var problemEnd = new Date().getTime() / 1000;
            if (SHOW_QUESTION_INFO)
                console.log("Correct :) [" + Math.floor(problemEnd - problemStart).toString() +" Seconds]");
>>>>>>> 4291275a7490a5ab882373fba470f9dcde9f09e0
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
