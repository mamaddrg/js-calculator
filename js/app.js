const showExpr = document.querySelector('.expression');
const showResult = document.querySelector('.result');

const btnNumbers = document.querySelectorAll('[data-number]');
const btnOperands = document.querySelectorAll('[data-operand]');

const btnReset = document.querySelector('#btn-reset');
const btnClear = document.querySelector('#btn-clear');
const btnEqual = document.querySelector('#btn-equal');

let expression = '';
let result = '0';

btnNumbers.forEach(item => {
  item.addEventListener('click', () => {

    /**
     * There might be 2 kind of problems when user enters a number.
     * 1- a number cant start with more than a single zero.
     * 2- a number can not have more than a single point inside it.
     */

    if (+item.textContent === 0 && +expression === 0 && expression.length === 1) 
      return;

    if (item.textContent === '.' && expression.includes('.')) 
      return;

    if (+item.textContent > 0 && !expression.includes('.') && +expression === 0)
      expression = '';

    if (item.textContent === '.' && expression.length === 0)
      expression = '0';

    expression += item.textContent;

    showExpr.textContent = expression;
  })
});

btnOperands.forEach(item => {
  item.addEventListener('click', () => {
    console.log(item.textContent);
  })
});

btnReset.addEventListener('click', () => {
  
  expression = '0';
  result = '0'

  showExpr.textContent = expression;
});

btnClear.addEventListener('click', () => {
  
  if (expression.length > 0)
    expression = expression.slice(0, expression.length - 1);

  if (expression.length === 0)
    expression = '0';

  showExpr.textContent = expression;
});

btnEqual.addEventListener('click', () => {
  console.log('equal btn clicked!');
});