const convertToCelsius = function(tempInFahrenheit) {
  let conversionValue = 5/9;
  let toCelsius = (tempInFahrenheit - 32) * conversionValue;
  return Math.round(toCelsius * 10) / 10;
};

const convertToFahrenheit = function(tempInCelsius) {
  let conversionValue = 9/5;
  let toFahrenheit = tempInCelsius * conversionValue + 32;
  return Math.round(toFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
