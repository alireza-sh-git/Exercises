const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 -1`;

currentResult = add(1,2);

outputResult(currentResult, calculationDescription);

function add(num1, num2) {
    return num1 + num2;
}