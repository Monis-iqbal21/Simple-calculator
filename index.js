var num1 = parseInt(prompt("Enter first number:"));
var num2 = parseInt(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /):");
switch (operation) {
    case '+':
        console.log("Result: ".concat(num1 + num2));
        break;
    case '-':
        console.log("Result: ".concat(num1 - num2));
        break;
    case '*':
        console.log("Result: ".concat(num1 * num2));
        break;
    case '/':
        if (num2 != 0) {
            console.log("Result: ".concat(num1 / num2));
        }
        else {
            console.log("Error! Division by zero is not allowed.");
        }
        break;
    default:
        console.log("Invalid operation!");
        break;
}
