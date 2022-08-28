const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
  let sum = 0;
	for (var x of arr) sum += x;
  return sum;
};

const multiply = function(arr) {
  let prod = 1;
	for (var x of arr) prod *= x;
  return prod;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let result = 1;
  for (var i = 1; i <=a; i++) result *= i;
  return result;
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
