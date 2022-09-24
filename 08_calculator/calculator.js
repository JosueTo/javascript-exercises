const add = function(num1, num2) {
  let totalAdd = num1 + num2;
  return totalAdd;
};

const subtract = function(num1, num2) {
	let totalSubtract = num1 - num2;
  return totalSubtract;
};

const sum = function(array) {
	// let totalSum = 0;
  // for (let i = 0; i < array.length; i++) {
  //   totalSum += array[i];
  // }

  const totalSum = array.reduce((total, currentValue) => {
    return total + currentValue}, 0);

  return totalSum;
};

const multiply = function(array) {
  const totalMultiply = array.reduce((total, currentValue) => {
    return total * currentValue
  });
  return totalMultiply;
};

const power = function(integer, power) {
	const total = Math.pow(integer, power); // integer ** power produces the same result.
  return total;
};

const factorial = function(num) {
	// if (num === 0){
  //   return 1;
  // } else {
  //   return (num * factorial(num - 1))
  // }

  // let result = num;
  // if (num === 0 || num === 1) {
  //   return 1;
  // }

  // while (num > 1) {
  //   num --;
  //   result = result * num;
  // }
  // return result;

  if (num === 0 || num === 1) {
    return 1;
  }
  
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
