const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = a[i] + sum;
  }
  return sum;
};

const multiply = function(a) {
  return a.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let ans = 1;
  for (let i = a; i > 0; i--) {
    ans *= i;
  }
  return ans;
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
