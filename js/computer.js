/**
 * This is just a function which takes 2 numbers and 1 operator.
 * Then it will calculate the result and return the result.
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @param {String | CharacterData} operator 
 */

const computer = (num1, num2, operator) => {

  let result;

  switch (operator) {
    case '+':
      result = +num1 + +num2;
      break;
    
    case '-':
      result = +num1 - +num2;
      break;  
  
    case '×':
      result = +num1 * +num2;
      break;

    case '÷':
      result = +num1 / +num2;
      result = result.toFixed(10);
      break;

    case '%':
      result = +num1 % +num2;
      break;

    case '':
      result = num1;
      break;
    
    default:
      break;
  }

  return result;
}

export default computer;