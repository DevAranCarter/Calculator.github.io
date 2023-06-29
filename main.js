let num1 = '';
let currentOperator = '';
let num2 = ''; 
let display_value = '';
let adecimal = true;
let bdecimal = true;

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
const decimal = document.querySelector('#decimal');
const clear = document.querySelector('#clear');
const remove = document.querySelector('#delete');

function setDivide() {
    if (!num2) {
        currentOperator = '/';
        input.textContent += `\u00f7`;
        console.log('changed');
    }
    else if (num1 && num2) {
        num1 = calculatorOp(num1, currentOperator, num2);
        currentOperator = '/';
        num2 = '';
        input.textContent += `\u00f7`;
    }
}  

function setAdd() {
    if (!num2) {
    currentOperator = '+';
        input.textContent += `+`;
        console.log('changed');
    }
    else if (num1 && num2) {
        num1 = calculatorOp(num1, currentOperator, num2);
        currentOperator = '+';
        num2 = '';
        input.textContent += `+`;
    }

}

function setSubtract() {
    if (!num2) {
    currentOperator = '-';
    input.textContent += `-`;
    console.log('changed');
    }
    else if (num1 && num2) {
            num1 = calculatorOp(num1, currentOperator, num2);
            currentOperator = '-';
            num2 = '';
            input.textContent += `-`;
    }
}

function setMultiply() {
    if (!num2) {
    currentOperator = '*';
    input.textContent += `\u00d7`;
    console.log('changed'); 
    }
    else if (num1 && num2) {
        num1 = calculatorOp(num1, currentOperator, num2);
        console.log(num1)
        currentOperator = '*';
        num2 = '';
        input.textContent += `\u00d7`;
    }
}

function isInt(num) {
    return num % 1 === 0;
}

function removeCurrent() {
    if (num1 && !currentOperator) {
        num1 = '';
        input.textContent = '';
        console.log(num1);
        console.log('rmv num1');
        adecimal = true;
        bdecimal = true;

    }
    else if (num1 && currentOperator && !num2) {
        input.textContent = num1;
        currentOperator = '';
        console.log('rmv currentOp')
    }
    else if (num1 && currentOperator && num2) {
        input.textContent = num1 + currentOperator;
        num2 = '';
        console.log('rmv num2')
        bdecimal = true;
    }

}
    
function doMath() {
    if (num1, currentOperator, num2) {
        if (!isInt(calculatorOp(num1, currentOperator, num2))) 
        {
            input.textContent = `${calculatorOp(num1, currentOperator, num2).toFixed(1)}` 
            bdecimal = true;
        }
        else {
    input.textContent = `${calculatorOp(num1, currentOperator, num2)}`;
    console.log(num1)
    console.log(num2)
    num1 = calculatorOp(num1, currentOperator, num2).toFixed(2);
    console.log(num1)
    currentOperator = '';
    num2 = '';
    bdecimal = true;
        }


}
} 

function addDecimal() {
    if (adecimal === true && bdecimal === true && !currentOperator) {
    input.textContent += '.';
    num1 += '.';
    adecimal = false;
    console.log("hi");
    }
    else if (bdecimal === true && adecimal === false && currentOperator) {
        input.textContent += '.';
        num2 += '.';
        bdecimal = false;
        console.log('bye');
    }
    
}

function selectZero() {
    if (!currentOperator) {
        num1 += '0';
        input.textContent += '0';
        display_value += '0';
    }
    else if (currentOperator) {
        if (currentOperator === '/') {
            alert('You can\'t divide by zero you sausage!')
        }
        else {
        num2 += '0';
        input.textContent += '0';
        display_value += '0';
        }
    }
}

function selectOne() {
    if (!currentOperator) {
        num1 += '1';
        input.textContent += '1';
        display_value += '1';
    }
    else if (currentOperator) {
        num2 = '1';
        input.textContent += '1';
        display_value =+ '1';
    }
}

function selectTwo() {
    if (!currentOperator) {
        num1 += '2';
        input.textContent += '2';
        display_value += '2'; 
    }
    else if (currentOperator) {
        num2 = '2';
        input.textContent += '2';
        display_value += '2';
    }
}

function selectThree() {
    if (!currentOperator) {
        num1 += '3';
        input.textContent += '3';
        display_value += '3';
    }
    else if (currentOperator) {
        num2 += '3';
        input.textContent += '3';
        display_value += '3';
    }
}

function selectFour() {
    if (!currentOperator) {
        num1 += '4';
        input.textContent += '4';
        display_value += '4';
    }
    else if (currentOperator) {
        num2 += '4';
        input.textContent += '4';
        display_value += '4';
    }
}

function selectFive() {
    if (!currentOperator) {
        num1 += '5';
        input.textContent += '5';
        display_value += '5';
    }
    else if (currentOperator) {
        num2 += '5';
        input.textContent += '5';
        display_value += '5';
    }
}

function selectSix() {
    if (!currentOperator) {
        num1 += '6';
        input.textContent += '6';
        display_value += '6';
    }
    else if (currentOperator) {
        num2 += '6';
        input.textContent += '6';
        display_value += '6';
    }
}

function selectSeven() {
    if (!currentOperator) {
        num1 += '7';
        input.textContent += '7';
        display_value += '7';
    }
    else if (currentOperator) {
        num2 += '7';
        input.textContent += '7';
        display_value += '7';
    }
}

function selectEight() {
    if (!currentOperator) {
        num1 += '8';
        input.textContent += '8';
        display_value += '8';
    }
    else if (currentOperator) {
        num2 += '8';
        input.textContent += '8';
        display_value += '8';
    }
}

function selectNine() {
    if (!currentOperator) {
        num1 += '9';
        input.textContent += '9';
        display_value += '9';
    }
    else if (currentOperator) {
        num2 += '9';
        input.textContent += '9';
        display_value += '9';
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
decimal.addEventListener('click', addDecimal);
clear.addEventListener('click', () => {
    input.textContent = '';
    num1 = '';
    num2 = '';
    currentOperator = '';
    adecimal = true;
    bdecimal = true;
}
)

remove.addEventListener('click', removeCurrent);


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
        return addNums(parseFloat(a), parseFloat(b));
    }
    else if (operator === '-') {
        return subtractNums(parseFloat(a), parseFloat(b));
    }
    else if (operator === '*') {
        return multiplyNums(parseFloat(a), parseFloat(b));
    }
    else if (operator === `/`) {
        return divideNums(parseFloat(a), parseFloat(b));
    }
}