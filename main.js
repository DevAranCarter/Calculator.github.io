const input = document.getElementById('input');
const output = document.querySelector('p');

output.innerHTML = 'hi';

let num1 = 0;
let operator = '';
let num2 = 0; 


function add(a, b) {
    return a + b;

}

function subtract(a, b) {
    return a -b;

}

function multiply(a, b) {
    return a * b;

}

function divide(a, b) {
    return a / b;

}

console.log(add(5, 7));
console.log(subtract(7, 2));
console.log(multiply(9, 5));
console.log(divide(10, 2));

function calculatorOp(a, operator, b) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return subtract(a, b);
    }
    else if (operator === 'x') {
        return multiply(a, b);
    }
    else if (operator === `&divide`) {
        return divide(a, b);
    }
}