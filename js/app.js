const showExpr = document.querySelector('.expression');
const showResult = document.querySelector('.result');

const btnNumbers = document.querySelectorAll('[data-number]');
const btnOperands = document.querySelectorAll('[data-operand]');

const btnReset = document.querySelector('#btn-reset');
const btnClear = document.querySelector('#btn-clear');
const btnEqual = document.querySelector('#btn-equal');

btnNumbers.forEach(item => {
  item.addEventListener('click', () => {
    console.log(item.textContent);
  })
});

btnOperands.forEach(item => {
  item.addEventListener('click', () => {
    console.log(item.textContent);
  })
});

btnReset.addEventListener('click', () => {
  console.log('reset btn clicked!');
});

btnClear.addEventListener('click', () => {
  console.log('clear btn clicked!');
});

btnEqual.addEventListener('click', () => {
  console.log('equal btn clicked!');
});