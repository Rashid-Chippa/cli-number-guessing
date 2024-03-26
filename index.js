#! /bin/env node
import inquirer from "inquirer";
// 1) compueter will generate a random number.
// 2)user input for guessing number.
// 3) compare user input with computer generated number and show result.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        types: "Number",
        Massage: "please guess a number:",
    },
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("congraculations ! you guessed The right number .");
}
else {
    console.log("you guessed the wrong number.");
}
