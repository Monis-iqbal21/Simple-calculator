import inquirer from "inquirer";
import prompt from "inquirer/lib/ui/prompt.js";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one operator ",
    type: "list",
    name: "operator",
    choices: ["+", "-", "*", "/"],
  },
]);
if (answer.operator === "+") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "-") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "*") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "/") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Invalid operator");
}
