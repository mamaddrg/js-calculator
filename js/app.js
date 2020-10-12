const showHistory = document.querySelector('.history');
const showExpr = document.querySelector('.expression');
const showResult = document.querySelector('.result');

const btnNumbers = document.querySelectorAll('[data-number]');
const btnOperands = document.querySelectorAll('[data-operand]');

const btnReset = document.querySelector('#btn-reset');
const btnClear = document.querySelector('#btn-clear');
const btnEqual = document.querySelector('#btn-equal');

const OPERATORS = ['+', '-', '×', '÷', '%', '+/-'];
let history = '';
let expression = '';
let result = 0;
let lastResult = 0;
let lastOperand = '';
let currentInput = '';


btnNumbers.forEach(item => {
  item.addEventListener('click', () => {

    // numbers can't start with multiple zeros
    if (+item.textContent === 0 && +currentInput === 0 && currentInput.length === 1) 
      return;

    // numbers can't contain multiple points
    if (item.textContent === '.' && currentInput.includes('.')) 
      return;

    // Will remove default zero which is shown when input is empty
    if (+item.textContent > 0 && !currentInput.includes('.') && +currentInput === 0)
      currentInput = '';

    // Will add a default zero in float numbers if user forgot to add
    if (item.textContent === '.' && currentInput.length === 0)
      currentInput = '0';

    currentInput += item.textContent;

    showResult.textContent = currentInput;
  })
});

btnOperands.forEach(item => {
  item.addEventListener('click', () => {

    // expression cant start with an opearator
    if (currentInput.length === 0 || +currentInput === 0) return;

    // expresson can't contain 2 operators without a number between
    if (+currentInput === 0 && OPERATORS.includes(expression.charAt(expression.length - 1))) {
      // the last character is already an operator
      // the new one will be replaced to last operator

      // remove last character, which is the old operator
      expression = expression.slice(0, -1);

      // add new operator to expression
      expression += item.textContent;

      showExpr.textContent = expression;
      return;
    }

    switch (lastOperand) {
      case '+':
        result = lastResult + +currentInput;
        break;
      
      case '-':
        result = lastResult - +currentInput;
        break;  
    
      case '×':
        result = lastResult * +currentInput;
        break;

      case '÷':
        result = lastResult / +currentInput;
        break;

      case '%':
        result = lastResult % +currentInput;
        break;

      case '':
        result = +currentInput;
        break;
      
      default:
        break;
    }

    lastResult = result;
    lastOperand = item.textContent;

    expression = `${expression}${currentInput}${item.textContent}`;
    currentInput = '0';

    showExpr.textContent = expression;
    showResult.textContent = result;
  })
});

btnReset.addEventListener('click', () => {
  
  expression = '';
  result = 0;
  currentInput = '';
  result = 0;
  lastResult = 0;
  lastOperand = '';

  showExpr.textContent = expression;
  showResult.textContent = result;
});

btnClear.addEventListener('click', () => {
  
  if (currentInput.length > 0)
    currentInput = currentInput.slice(0, currentInput.length - 1);

  if (currentInput.length === 0)
    currentInput = '0';

  showResult.textContent = currentInput;
});

btnEqual.addEventListener('click', () => {
  
  switch (lastOperand) {
    case '+':
      result = lastResult + +currentInput;
      break;
    
    case '-':
      result = lastResult - +currentInput;
      break;  
  
    case '×':
      result = lastResult * +currentInput;
      break;

    case '÷':
      result = lastResult / +currentInput;
      break;

    case '%':
      result = lastResult % +currentInput;
      break;

    case '':
      result = +currentInput;
      break;
    
    default:
      break;
  }

  expression = `${expression}${currentInput}=`;
  showExpr.textContent = '';
  showResult.textContent = result;

  lastResult = result;
  history = expression + result;
  expression = '';
  result = 0;
  currentInput = '';
  showHistory.textContent = history;
});