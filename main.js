let num1 = 0;
let currentOperator = '';
let num2 = 0; 

const container = document.getElementById('calculator-container');
const internals = document.querySelector('#internals');
const input = document.querySelector('#input');
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#times');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals');

function setDivide() {
        currentOperator = '/';
        input.textContent += `\u00f7`;
        console.log('changed');
}  

function setAdd() {
    currentOperator = '+';
        input.textContent += `+`;
        console.log('changed');

}

function setSubtract() {
    currentOperator = '-';
    input.textContent += `-`;
    console.log('changed'); 
}

function setMultiply() {
    currentOperator = '*';
    input.textContent += `\u00d7`;
    console.log('changed'); 
}

function doMath() {
    if (num1, currentOperator, num2) {
    input.textContent = `${calculatorOp(num1, currentOperator, num2)}`;
    num1 = 0;
    currentOperator = '';
    num2 = 0;
    }


}

function selectZero() {
    if (!num1) {
        num1 = 0;
        input.textContent += '0';
    }
    else if (!num2) {
        num2 = 0;
        input.textContent += '0';
    }
}

function selectOne() {
    if (!num1) {
        num1 = 1;
        input.textContent += '1';
    }
    else if (!num2) {
        num2 = 1;
        input.textContent += '1';
    }
}

function selectTwo() {
    if (!num1) {
        num1 = 2;
        input.textContent += '2';
    }
    else if (!num2) {
        num2 = 2;
        input.textContent += '2';
    }
}

function selectThree() {
    if (!num1) {
        num1 = 3;
        input.textContent += '3';
    }
    else if (!num2) {
        num2 = 3;
        input.textContent += '3';
    }
}

function selectFour() {
    if (!num1) {
        num1 = 4;
        input.textContent += '4';
    }
    else if (!num2) {
        num2 = 4;
        input.textContent += '4';
    }
}

function selectFive() {
    if (!num1) {
        num1 = 5;
        input.textContent += '5';
    }
    else if (!num2) {
        num2 = 5;
        input.textContent += '5';
    }
}

function selectSix() {
    if (!num1) {
        num1 = 6;
        input.textContent += '6';
    }
    else if (!num2) {
        num2 = 6;
        input.textContent += '6';
    }
}

function selectSeven() {
    if (!num1) {
        num1 = 7;
        input.textContent += '7';
    }
    else if (!num2) {
        num2 = 7;
        input.textContent += '7';
    }
}

function selectEight() {
    if (!num1) {
        num1 = 8;
        input.textContent += '8';
    }
    else if (!num2) {
        num2 = 8;
        input.textContent += '8';
    }
}

function selectNine() {
    if (!num1) {
        num1 = 9;
        input.textContent += '9';
    }
    else if (!num2) {
        num2 = 9;
        input.textContent += '9';
    }
}



divide.addEventListener('click', setDivide);
add.addEventListener('click', setAdd);
multiply.addEventListener('click', setMultiply);
subtract.addEventListener('click', setSubtract);
equals.addEventListener('click', doMath);
zero.addEventListener('click', selectZero);
one.addEventListener('click', selectOne);
two.addEventListener('click', selectTwo);
three.addEventListener('click', selectThree);
four.addEventListener('click', selectFour);
five.addEventListener('click', selectFive);
six.addEventListener('click', selectSix);
seven.addEventListener('click', selectSeven);
eight.addEventListener('click', selectEight);
nine.addEventListener('click', selectNine);



function addNums(a, b) {
    return a + b;

}

function subtractNums(a, b) {
    return a - b;

}

function multiplyNums(a, b) {
    return a * b;

}

function divideNums(a, b) {
    return a / b;

}

function calculatorOp(a, operator, b) {
    if (operator === '+') {
        return addNums(a, b);
    }
    else if (operator === '-') {
        return subtractNums(a, b);
    }
    else if (operator === '*') {
        return multiplyNums(a, b);
    }
    else if (operator === `/`) {
        return divideNums(a, b);
    }
}